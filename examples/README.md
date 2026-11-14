# Examples built with Cool Graphs

Two small websites built **only** from the design system in this repo (tokens and components in `src/`). They show how the system is used for real pages, and they follow `DESIGN.md` and the skill in `.claude/skills/cool-graphs-design/`.

| Example | What it is | Open it |
|---|---|---|
| [Vegetable Explorer](vegetable-explorer/README.md) | Cards of 27 vegetables. Select one to see its price, nutrition, fun fact and charts. | `vegetable-explorer/index.html` |
| [Vegetable Face-off](vegetable-face-off/README.md) | A ten-question game. Four vegetables per question, odd questions, real numbers after each answer. | `vegetable-face-off/index.html` |

**To look at one:** download the repo and open its `index.html` in a browser. Each is a single page and needs no install.

## How an example is made

Each folder has a `src/` folder with the page's own files (text, layout, behaviour) and a `build.py`. Running `python3 build.py` joins them with the design system's tokens and components into one `index.html`. Because the build reads `../src` directly, a change to a token or component shows up in the examples after the next build.

Shared by both examples, in `shared/`:
- `vegetable-data.js`: the 27 vegetables, their nutrition, prices and the scoring. **Change the scoring here, once.**
- `icons/`: the 27 vegetable illustrations (from the Vegetable Chart prototype).
- `icons.json`: the Material icon paths the pages use (the same icons as `src/components/Icon`).
- `page-extras.css`: a few small page-only styles.
- `icon-helper.js`: the function that draws an icon.

## Data and its limits

- **Nutrition:** approximate amounts per 100 g of raw vegetable, from USDA FoodData Central. Provisional until Spain's BEDCA database is imported.
- **Nutrient Density Score (0 to 100):** the average, across 12 nutrients, of the share of the EU daily reference found in **100 g** of the vegetable, each capped at 100%. It measures a food portion, not calories. (An earlier version used 100 kcal; this was changed on 13 November 2026.)
- **Prices:** average Spanish consumer prices, € per kg, July 2026, MAPA. Four vegetables only have a product-group price and six are estimates. Both are marked as such.
- **Daily references:** EU Regulation 1169/2011, Annex XIII. Fiber uses the EFSA reference of 25 g.
- **Fun facts:** general knowledge, not part of the data.
