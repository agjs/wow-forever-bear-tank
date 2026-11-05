#!/usr/bin/env python3
"""Merge dungeon JSON files (args) into window.DUNGEONS inside research.js, sorted by level."""
import json, re, sys, pathlib
RES = pathlib.Path(__file__).resolve().parent.parent / "research.js"
ds = []
for f in sys.argv[1:]:
    p = pathlib.Path(f)
    if p.exists(): ds += json.loads(p.read_text())
seen, out = set(), []
for d in ds:
    if d["key"] in seen: continue
    seen.add(d["key"]); out.append(d)
out.sort(key=lambda d: int(re.match(r"\d+", d["lv"]).group()))
src = RES.read_text()
src = re.sub(r"window\.DUNGEONS = .*?;\n(?=window\.|$)", "window.DUNGEONS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n", src, flags=re.S)
RES.write_text(src)
print(len(out), "dungeons:", ", ".join(f'{d["name"]} ({d["lv"]})' for d in out))
