# Cool Graphs design system

React + TypeScript + Storybook. Tokens and components come from the Vegetable Chart prototype (warm, earthy look; light and dark).

- `src/tokens/tokens.css`: colours, type, spacing, radius, shadow (CSS variables, prefix `--cg-`)
- `src/components/*`: one folder per component (component, styles, stories)
- `src/tokens/primitives.css`, `semantic.css`, `component.css`: the three colour layers (see `DESIGN.md`, section 3)
- Run `npm run storybook` to browse everything; use the Theme menu in the toolbar for light/dark.

## Where to find things

| What | Where |
|---|---|
| Principles and rules (read this first) | `DESIGN.md` |
| Instructions for AI tools and agents | `.claude/skills/cool-graphs-design/SKILL.md` |
| What changed and when | `CHANGELOG.md` |
| Tokens and components (the code) | `src/` |
| Example websites built with the system | `examples/` (Vegetable Explorer, Vegetable Face-off) |
| Built Storybook, for hosting | `docs/` (rebuild with `npm run build-docs`) |

## Keeping it up to date

When you change a token or component, update `DESIGN.md` if a rule changes, add a line to `CHANGELOG.md`, run `npm run build-docs`, and rebuild any example you touched (`python3 build.py` in its folder).

## Icons

Icons are from [Material Design Icons](https://github.com/marella/material-design-icons) (outlined style), licensed under Apache 2.0. The 20 icons in use are in `src/components/Icon/icons.ts`.
