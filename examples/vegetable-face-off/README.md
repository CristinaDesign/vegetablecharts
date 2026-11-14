# Vegetable Face-off

A ten-question game. Every question shows four vegetables and asks something odd, for example: which gives you a whole day of vitamin C in the smallest portion, which is the cheapest way to eat 1,000 kcal, which has the most waste after peeling.

**Components used:** Button, Switch, Chip, Banner, Table, Icon.

**How it works**
- Questions are picked at random from many kinds (see the list in the page's "Sources and notes"). The same kind never comes twice in a row.
- Every question has one clear winner: the best of the four must be clearly ahead of the second best, and the four values must read differently on screen.
- After a pick, all four cards show their value, unit and rank. A banner says what happened. Right and wrong are shown with an icon and words as well as colour.
- If you do not press "Next question" within 5 seconds, the game moves on. A thin bar in the button shows the time. A switch turns this off (for people who need more time to read).
- Motion (cards landing, numbers counting up, small burst on a right answer, shake on a wrong one) is switched off when the device asks for reduced motion.

**Add a new kind of question:** open `src/game.js`, copy one of the entries in the `T` list (for example `T.euro`), and add it to `MAKERS`. Each entry says what is measured, who wins (highest or lowest), how clear the win must be, and how the value is shown with its unit.

**Files:** `src/body.html`, `src/game.css`, `src/game.js`, `build.py`. The vegetable data is in `../shared/vegetable-data.js`.
