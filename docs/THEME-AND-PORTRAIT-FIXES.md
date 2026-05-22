# Theme and portrait fixes

Changes made:

- Set the default site palette to light using Savannah brand colours.
- Added a dark mode palette controlled by `html[data-theme="dark"]`.
- Added a top-right nav button with animated moon/sun icons.
- Stored selected theme in browser local storage as `savannah-theme`.
- Added a head script to apply the saved theme before the stylesheet loads.
- Physically cropped all staff photos to a consistent 4:5 portrait ratio.
- Kept hover effects, spacing, maps, forms, project grids, team cards and footer layout intact across both palettes.

Notes:

- The site remains static HTML/CSS/JavaScript.
- The theme toggle works on GitHub Pages and normal static hosting.
- No backend is required for the theme toggle.
