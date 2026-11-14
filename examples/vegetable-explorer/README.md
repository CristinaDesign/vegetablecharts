# Vegetable Explorer

A browse page: a grid of vegetable cards. Selecting one opens a panel with its price, Nutrient Density Score, 12 nutrient bars, a fun fact and two small charts. It also has a comparison table and a table of all the data.

**Pattern used:** "interactive illustration explorer" from the skill (`.claude/skills/cool-graphs-design/SKILL.md`, section 6).

**Components used:** Switch, Segmented control, Select, Selectable card style, Disclosure, Table, Legend marker, Score bar, Banner, Icon.

**Things to know**
- On small screens the explanations (Nutrition, Prices, Per €1) sit behind a "How the data and scores work" Disclosure. Units, source and date stay visible in the introduction.
- Cards use the soft border (`--cg-card-border-soft`); the selected card uses the full ink border.
- Prices from a product group or an estimate are marked with a dashed ring and the words say so.
- The Disclosure arrow is added in `src/page.css` for now. It could move into the Disclosure component.

**Files:** `src/body.html` (text and layout), `src/page.css` (page styles), `src/app.js` (behaviour), `build.py` (builds `index.html`).
