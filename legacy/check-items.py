#!/usr/bin/env python3
"""Re-check items flagged "c" (Classic/unverified) in data.js against Wowhead's Forever DB.
Wowhead hides Forever dungeon loot until it's discovered; once an item's tooltip resolves,
its Forever stats are known.  Usage:
    python3 tools/check-items.py           # report
    python3 tools/check-items.py --apply   # flip resolved items to "v" in data.js
"""
import json, re, sys, html, urllib.request, pathlib
DATA = pathlib.Path(__file__).resolve().parent.parent / "data.js"
src = DATA.read_text()
items = re.findall(r'\["([^"]+)",(\d+),"([^"]*)","c"\]', src)
def tooltip(i):
    req = urllib.request.Request(f"https://nether.wowhead.com/forever/tooltip/item/{i}", headers={"User-Agent": "Mozilla/5.0"})
    try:
        j = json.load(urllib.request.urlopen(req, timeout=20))
    except Exception:
        return None
    t = html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<br\s*/?>", " ; ", j.get("tooltip", ""))))
    return re.sub(r"\s+", " ", re.sub(r"Sell Price.*", "", t)).strip()
found = 0
for name, iid, where in items:
    t = tooltip(iid)
    if t:
        found += 1
        print(f"✓ {name} ({iid}) now visible: {t[:200]}")
        if "--apply" in sys.argv:
            src = src.replace(f'["{name}",{iid},"{where}","c"]', f'["{name}",{iid},"{where}","v"]')
    else:
        print(f"· {name} ({iid}) still hidden")
if "--apply" in sys.argv and found:
    DATA.write_text(src); print(f"Updated {found} item(s) in data.js. Review their stats, then commit.")
