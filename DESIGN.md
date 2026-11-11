# Vegetable Chart: Design principles

> **Status: first draft.** Everything here is inferred from the Vegetable Chart prototype and the components in this repo. Items marked **(?)** are guesses that need the designer's decision. Edit freely; this file is meant to be read by people and by AI tools before they design or build anything.

## 1. What we are designing

A calm, trustworthy way to see which vegetables give the most nutrition for the least money. The audience is everyday shoppers in Spain, not nutrition experts. The interface should feel like a market stall, not a lab dashboard.

## 2. Principles

1. **Warm and earthy.** Cream paper, brown ink, one leaf-green accent. Never cold greys or saturated blues. *(Source: the prototype palette.)*
2. **The data is the hero.** Chrome stays quiet so charts, numbers and rankings carry the page. Decoration must earn its place.
3. **Say how sure we are.** Estimated and provisional data is always marked differently from official data, and the notes explain why. Trust matters more than polish.
4. **Never rely on colour alone.** Meaning is also carried by shape, outline, weight or text (for example the dashed ring on estimated points, bold on the selected option).
5. **Light and dark are equals.** Every component is designed and checked in both themes. Dark is the same browns at night, not an inverted light theme.
6. **Plain language.** Name things the way a shopper would ("Whole, as bought", not "gross weight basis"). Short labels, no jargon.
7. **Keyboard and phone first-class.** Everything works with a keyboard, with a visible focus ring, and at 400px wide. **(?)** Confirm the minimum touch-target size you want.

## 3. Tokens: the rules

All values live in `src/tokens/tokens.css` as CSS variables starting with `--vc-`. Rules:

- **Never use a raw hex colour, pixel size or font name in a component.** Use a token. If none fits, propose a new token instead of hard-coding a value.
- **Colours are named by job, not by hue.** For example `--vc-color-ink` is "text and borders", not "brown".
- **Accent (leaf green) is for two things only:** keyboard focus and data marks (bars, positive values). Do not use it for decoration or for buttons. **(?)**
- **Fonts:** Alegreya Sans for headings and interface. Alegreya (serif) for numbers and chart text. Numbers in columns use tabular figures.
- **Spacing scale:** 4, 8, 12, 16, 24, 40 px. No in-between values.
- **Corners:** 8px for controls and cards, 16px for large panels, fully round for pills and switches.
- **Borders:** 2px ink outline is the signature of interactive controls.

## 4. Components: when to use what

| Need | Use | Avoid |
|---|---|---|
| Turn one thing on or off, instantly | **Switch** | Using it for a choice that needs a Save button |
| Choose 1 of 2 to 4 short options | **Segmented control** | More than 4 options, or long labels |
| Choose 1 of a longer list | **Select** | Using it for 2 options (use Segmented control) |
| Choose 1 of a few, with a title and a description | **Selectable card** | Use as navigation |
| The main action on a screen | **Button, primary** (one per view) | Two primary buttons side by side |
| Any other action | **Button, secondary** or **link** | Link buttons for destructive actions |
| Hide secondary detail | **Disclosure** | Hiding information people need to make a decision |
| Show many rows of numbers | **Table** | Using it for layout |
| Explain a chart marker | **Legend marker** | Colour-only legends |
| Show an item's score out of a maximum | **Score bar** | Scores without the number beside the bar |

The scatter chart itself is app code and not part of the design system yet.

## 5. States every interactive component must have

Default, hover, keyboard focus (3px leaf-green ring), selected or on, disabled (40% opacity, no pointer). Components that fade the unselected state (cards, segmented options) never go below readable contrast. **(?)** Contrast of the faded states should be checked against WCAG AA.

## 6. Do and don't

**Do**
- Check every new screen in light and dark.
- Keep one clear main action per screen.
- Show units next to numbers (€ / kg, %, per 100 kcal).
- Mark provisional data as provisional, in words.

**Don't**
- Add new colours, fonts or corner radii "just for this screen".
- Use shadows except for floating things like tooltips (`--vc-shadow-raised`).
- Use emoji or icons as the only label for a control.
- Animate things that are not changing state; respect "reduce motion".

## 7. Known gaps and open questions

- **Button** is new; the prototype had no standalone button. Review its look.
- **(?)** Do we want error, warning and success colours? The prototype has none.
- **(?)** Icons: the dark mode knob has a sun and moon, but there is no icon set yet.
- **(?)** Naming: is "Vegetable Chart" the product name, or a working title?
- Table sorting, tooltips, and the chart are not built yet.

## 8. How to change this system

1. Change or add a token first, in `src/tokens/tokens.css`.
2. Build or update the component in `src/components/<Name>/` with a story for each state, in light and dark.
3. Update this file if a rule or recommendation changes.
4. Run `npm run build-docs` so the published Storybook stays current.
