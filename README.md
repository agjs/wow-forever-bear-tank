# Bear Tank Codex: WoW: Forever Feral (Bear) Tank

A static reference site for a Windshaper Skyborne Feral Druid tank in WoW: Forever (Patch 1.60.1). It contains:

- a checkpoint plan for levels 13 to 60 (dungeons, items to farm, talents, training)
- the talent order with automatic validation (tier gates, rank caps, level requirements, prerequisites)
- a table showing which talent affects which spell or stat
- the rotation, cooldown use and shapeshifting rules
- Forever mechanics, stat priority, an armor calculator, enchants, consumables, professions and racials

No build step. Content lives in `data.js`, and `app.js` only renders it.

## Publish on GitHub Pages

```bash
git init && git add . && git commit -m "Bear Tank Codex"
gh repo create wow-forever-bear-tank --public --source=. --push
```

Then go to the repo on GitHub → **Settings → Pages → Build and deployment**, set **Source** to "Deploy from a branch", and pick **Branch** `main` and folder `/ (root)`.
The site goes live at `https://<user>.github.io/wow-forever-bear-tank/`.

## Updating after patches

Edit `data.js`:

- `TALENTS`: tooltip text, per-rank effects (`fx`), tank rating
- `ORDER`: 51 talent keys, one for each level from 10 to 60. The page warns you if the build becomes invalid.
- `CHECKPOINTS`: dungeons and items. Each item has a flag: `v` (confirmed in the Forever database), `q` (quest reward) or `c` (Classic data, not yet confirmed).

To preview locally, run `python3 -m http.server` and open http://localhost:8000.
