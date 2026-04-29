# Ava Architecture Briefing (for Andrey)

Standalone web prototype: a 100,000ft view of Ava's three-layer architecture, designed to be walked through rather than read alone. Companion artifact to `Stack Overflowed/Projects/Cena Health/Ava Architecture Overview.md` — the doc is for collaborative editing; this asset is for shared understanding.

Built with Vite + React 19 + TypeScript + Tailwind v4. Brand tokens copied verbatim from `Lab/vanessa-ava-briefing/src/styles/tokens.css` (themselves copied from `Lab/haven-ui`).

## Develop

```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:5181
pnpm build     # static output in dist/
pnpm preview   # serve dist/ locally
```

## Deploy (GitHub Pages)

```bash
pnpm build
pnpm deploy    # pushes dist/ to gh-pages branch
```

`vite.config.ts` `base` defaults to `/andrey-architecture-briefing/`. Override with `VITE_BASE='/'` for a custom-domain or root deploy.

## Source plan

`~/.claude/plans/ava-andrey-briefing-asset.md`
