<#
  Bear Tank Codex updater for Windows.

  Run once from PowerShell:
    irm https://agjs.github.io/wow-forever-bear-tank/update.ps1 | iex

  What it does:
    1. Finds your WoW: Forever AddOns folder (registry, common paths, or asks once) and remembers it.
    2. Compares the installed version with the latest one on the site; downloads only when newer.
    3. Replaces AddOns\BearTankCodex and removes the old AddOns\BearTankQuests.
    4. On the first run, offers to update automatically every time you sign in to Windows,
       and puts an "Update Bear Tank Codex" shortcut on your desktop.

  Flags (when run as a saved script): -Quiet (no prompts, used by the automatic task), -Force (reinstall).
#>
param([switch]$Quiet, [switch]$Force)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"   # makes Invoke-WebRequest much faster in Windows PowerShell 5.1

$Site = "https://agjs.github.io/wow-forever-bear-tank"
$AddonName = "BearTankCodex"
$LegacyAddons = @("BearTankQuests")
$ConfigDir = Join-Path $env:APPDATA "BearTankCodex"
$ConfigFile = Join-Path $ConfigDir "config.json"
$LocalScript = Join-Path $ConfigDir "update.ps1"
$TaskName = "Bear Tank Codex updater"

function Say($msg, $color = "Gray") { if (-not $Quiet) { Write-Host $msg -ForegroundColor $color } }

function Read-Config {
  if (Test-Path $ConfigFile) { return Get-Content $ConfigFile -Raw | ConvertFrom-Json }
  return [pscustomobject]@{ addonsPath = $null }
}

function Save-Config($config) {
  New-Item -ItemType Directory -Force -Path $ConfigDir | Out-Null
  $config | ConvertTo-Json | Set-Content -Path $ConfigFile -Encoding UTF8
}

# ---------- find the AddOns folder ----------

function Find-WowRoot {
  $keys = @(
    "HKLM:\SOFTWARE\WOW6432Node\Blizzard Entertainment\World of Warcraft",
    "HKLM:\SOFTWARE\Blizzard Entertainment\World of Warcraft"
  )
  foreach ($key in $keys) {
    $p = (Get-ItemProperty -Path $key -ErrorAction SilentlyContinue).InstallPath
    if ($p) {
      # InstallPath usually points at a flavor folder like ...\World of Warcraft\_retail_\
      $root = $p.TrimEnd("\")
      if ((Split-Path $root -Leaf) -like "_*_") { $root = Split-Path $root -Parent }
      if (Test-Path $root) { return $root }
    }
  }
  $candidates = @(
    "${env:ProgramFiles(x86)}\World of Warcraft",
    "$env:ProgramFiles\World of Warcraft",
    "C:\Games\World of Warcraft",
    "D:\World of Warcraft",
    "D:\Games\World of Warcraft"
  )
  foreach ($c in $candidates) { if ($c -and (Test-Path $c)) { return $c } }
  return $null
}

function Resolve-AddonsPath($config) {
  if ($config.addonsPath -and (Test-Path $config.addonsPath)) { return $config.addonsPath }
  $root = Find-WowRoot
  if ($root -and (Test-Path (Join-Path $root "_forever_"))) {
    $path = Join-Path $root "_forever_\Interface\AddOns"
  } elseif ($Quiet) {
    throw "WoW: Forever folder not found. Run the updater once by hand to set it."
  } else {
    Say "I couldn't find WoW: Forever automatically." Yellow
    Say "In the Battle.net app, pick WoW: Forever, click the gear next to Play, choose 'Show in Explorer'," Yellow
    Say "and paste the path of the World of Warcraft folder it opens (the one that contains _forever_)." Yellow
    $root = (Read-Host "World of Warcraft folder").Trim('"', ' ')
    if (-not (Test-Path (Join-Path $root "_forever_"))) { throw "No _forever_ folder in '$root'." }
    $path = Join-Path $root "_forever_\Interface\AddOns"
  }
  New-Item -ItemType Directory -Force -Path $path | Out-Null
  $config.addonsPath = $path
  Save-Config $config
  return $path
}

# ---------- versions ----------

function Get-InstalledVersion($addonsPath) {
  $toc = Join-Path $addonsPath "$AddonName\$AddonName.toc"
  if (-not (Test-Path $toc)) { return $null }
  $line = Select-String -Path $toc -Pattern "^## Version:\s*(.+)$" | Select-Object -First 1
  if ($line) { return $line.Matches[0].Groups[1].Value.Trim() }
  return $null
}

function Get-LatestVersion {
  $nocache = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
  return (Invoke-WebRequest -UseBasicParsing "$Site/addon-version.txt?t=$nocache").Content.Trim()
}

# ---------- install ----------

function Install-Latest($addonsPath, $version) {
  $tmp = Join-Path $env:TEMP "BearTankCodex-$version"
  $zip = "$tmp.zip"
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
  Invoke-WebRequest -UseBasicParsing "$Site/$AddonName.zip?v=$version" -OutFile $zip
  Expand-Archive -Path $zip -DestinationPath $tmp -Force
  $source = Join-Path $tmp $AddonName
  if (-not (Test-Path (Join-Path $source "$AddonName.toc"))) { throw "The download doesn't look right (no $AddonName.toc)." }

  $target = Join-Path $addonsPath $AddonName
  Remove-Item -Recurse -Force $target -ErrorAction SilentlyContinue
  Move-Item -Path $source -Destination $target
  foreach ($old in $LegacyAddons) { Remove-Item -Recurse -Force (Join-Path $addonsPath $old) -ErrorAction SilentlyContinue }
  Remove-Item -Recurse -Force $tmp, $zip -ErrorAction SilentlyContinue
}

# ---------- first-run setup: keep a local copy, desktop shortcut, optional sign-in task ----------

function Ensure-LocalCopy {
  New-Item -ItemType Directory -Force -Path $ConfigDir | Out-Null
  Invoke-WebRequest -UseBasicParsing "$Site/update.ps1" -OutFile $LocalScript
}

function Ensure-Shortcut {
  $desktop = [Environment]::GetFolderPath("Desktop")
  $lnk = Join-Path $desktop "Update Bear Tank Codex.lnk"
  if (Test-Path $lnk) { return }
  $shell = New-Object -ComObject WScript.Shell
  $s = $shell.CreateShortcut($lnk)
  $s.TargetPath = "powershell.exe"
  $s.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$LocalScript`""
  $s.WorkingDirectory = $ConfigDir
  $s.Save()
  Say "Added an 'Update Bear Tank Codex' shortcut to your desktop." Green
}

function Ensure-SignInTask($config) {
  if ($Quiet -or $config.askedAboutTask) { return }
  $answer = Read-Host "Update automatically every time you sign in to Windows? (Y/n)"
  $config | Add-Member -NotePropertyName askedAboutTask -NotePropertyValue $true -Force
  Save-Config $config
  if ($answer -match "^(n|no)$") { return }
  $action = New-ScheduledTaskAction -Execute "powershell.exe" `
    -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$LocalScript`" -Quiet"
  $trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
  Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Force | Out-Null
  Say "Done: it will update quietly every time you sign in." Green
}

# ---------- main ----------

try {
  $config = Read-Config
  $addonsPath = Resolve-AddonsPath $config
  $installed = Get-InstalledVersion $addonsPath
  $latest = Get-LatestVersion

  if ($Force -or $installed -ne $latest) {
    Say "Installing Bear Tank Codex $latest into $addonsPath ..." Cyan
    Install-Latest $addonsPath $latest
    Say "Bear Tank Codex $latest installed. Type /reload in game (or restart it) to load it." Green
  } else {
    Say "Bear Tank Codex is up to date ($installed)." Green
  }

  if (-not $Quiet) {
    Ensure-LocalCopy
    Ensure-Shortcut
    Ensure-SignInTask $config
  }
} catch {
  if ($Quiet) { exit 1 }
  Write-Host "Update failed: $($_.Exception.Message)" -ForegroundColor Red
}
