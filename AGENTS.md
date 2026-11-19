## AI Assistant Instructions

You are an expert TypeScript and Lua developer working on **Bear Tank Codex**: a WoW: Forever guide for a Horde
Feral Druid bear tank, published as a website (https://agjs.github.io/wow-forever-bear-tank/) and as an in-game
addon. Both are built from one typed data package.

## Quick reference

| Topic        | Guidance                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------- |
| Runtime      | Node **26.4** (`.nvmrc`), pnpm **10** workspaces                                             |
| Install      | `nvm use && pnpm i`                                                                          |
| Dev          | `pnpm dev` (website)                                                                         |
| Verify       | `pnpm verify` (typecheck, Biome, Vitest, Lua tests). Run before every push                   |
| Typecheck    | `pnpm typecheck` (TypeScript **7**, `tsc -b` over project references)                        |
| Lint/format  | `pnpm check` / `pnpm format` (Biome; ESLint's TypeScript parser doesn't support TS 7)         |
| Addon        | `pnpm build:addon`, `pnpm test:addon`. Details: [apps/addon/AGENTS.md](./apps/addon/AGENTS.md) |
| Deploy       | Push to `main`; GitHub Actions builds the site and publishes it to GitHub Pages               |

## Repository layout

```
apps/
  web/            Astro 7 site, React 19 islands, Tailwind 4: one static page per section (SEO)
  addon/          BearTankCodex WoW addon (Lua 5.1) + its LuaJIT test runner and WoW mock
packages/
  guide-data/     ALL guide content as typed data, one folder per domain
tools/
  build-addon/    guide-data -> addon Lua data files, release zip, addon-version.txt, update.ps1
  updater/        update.ps1: Windows updater (installs and keeps the addon current)
```

## Guide data (`packages/guide-data`)

The single source of truth. The website and the addon must never hold their own copy of guide content.

```
src/<domain>/
├── <domain>.data.ts     # the content, typed
├── <domain>.types.ts    # interfaces for it
├── <domain>.test.ts     # integrity rules (talent trees valid, route has no gaps, ...)
└── index.ts             # public exports
src/common/              # shared types: LevelRange, Source, TitledText, QuestRef, Reagent, Origin
```

**Rules**

- Every fact must be checked against Wowhead's WoW: Forever database or an in-game source. No "unverified"
  filler: leave a fact out rather than hedge it.
- Add an integrity test when a rule can be checked mechanically.
- Field names are descriptive camelCase (`requiredLevel`, not `req`). Level ranges are `LevelRange`, never strings.

## Website (`apps/web`)

- One Astro page per section in `src/pages`, all inside `src/layouts/GuideLayout.astro`. Sections are listed once in
  `src/navigation/navigation.constants.ts` (sidebar, titles, SEO descriptions, redirects from old `#tab` links).
- Anything that depends on the player's level is a React island (`client:load`). Islands render on the server at
  level 10 so every page's full content is in the HTML for search engines, then switch to the saved level.
- Browser state goes through `lib/storage` (`storedValue` + `useStored`). Keys keep the original site's `btc:` names,
  so saved levels, ticks and quest statuses carry over.
- Guide text renders through `<Rich>`, which links spell, item, NPC and quest names to Wowhead (`lib/wowhead`).
- `src/styles/guide.css` is the site's design (ported from the first version). Tailwind utilities are available, its
  base reset is not loaded.

## Code standards

1. **Type safety:** strict TS (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`); no `any`, no casts.
2. **Modules:** a folder per feature or component with `.types.ts`, `.utils.ts` (pure, tested), `.hooks.ts`
   (React state), `.constants.ts` and an `index.ts` for public exports only.
3. **Imports:** explicit `.ts` extensions (Node runs TypeScript directly); `import type` for types.
4. **Dependencies:** exact versions only: `pnpm add -E <pkg>@<version>`. Check that a release is compatible
   with TS 7, Vite 8 and Node 26 before adding it.
5. **Tests:** Vitest, co-located as `*.test.ts(x)`. Test behavior, not implementation details.
6. **UI copy:** sentence case, plain full sentences, explain every name (what it is, where, when). Link items,
   NPCs, quests and spells to Wowhead. Hide content the player has already passed.
