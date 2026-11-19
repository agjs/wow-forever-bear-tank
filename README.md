# Bear Tank Codex

A WoW: Forever guide for a Horde Feral Druid bear tank, from level 10 to 60: where to quest, what to train, which
talent to take, how to tank every dungeon, the Horde dungeon quests for 50–60, gear, enchants, professions, Camps &
Crates, PvP and the math behind it all.

- **Website:** https://agjs.github.io/wow-forever-bear-tank/
- **In-game addon:** type `/btq`. Install or update it on Windows by pasting this into PowerShell:

  ```powershell
  irm https://agjs.github.io/wow-forever-bear-tank/update.ps1 | iex
  ```

  Or download [BearTankCodex.zip](https://agjs.github.io/wow-forever-bear-tank/BearTankCodex.zip) and unzip it into
  `World of Warcraft\_forever_\Interface\AddOns`.

## Development

```bash
nvm use && pnpm i
pnpm dev       # website at http://localhost:4321/wow-forever-bear-tank/
pnpm verify    # typecheck, Biome, Vitest, addon tests (needs luajit)
pnpm build     # addon zip + static site in apps/web/dist
```

Pushing to `main` runs the same checks in GitHub Actions and publishes the site to GitHub Pages.

The website (Astro + React islands) and the addon (Lua) are both built from one typed data package,
`packages/guide-data`. See [AGENTS.md](./AGENTS.md) for the layout and code standards.

Fan-made reference. Not affiliated with Blizzard.
