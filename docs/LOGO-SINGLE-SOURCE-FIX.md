# Logo single-source fix

Problem: the previous build rendered 2 logo image elements for each logo position. They were intended to overlap, but this created visible duplicate logos in some views.

Fix applied:

- Each logo position now uses 1 `<img>` only.
- The image source is swapped by `js/app.js` when the light/dark theme changes.
- The required files are:
  - `img/backlogo-light.png` for light mode
  - `img/backlogo-dark.png` for dark mode
- Header and footer logos use the same mechanism.

Do not add both logos manually into the HTML. Use only the single `<img class="theme-logo">` structure.
