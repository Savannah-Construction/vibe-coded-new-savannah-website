# Savannah Construction Website - Fixed Review Build Static website build with alignment, spacing and formatting fixes applied across all pages. ## Open locally Open `index.html` with Visual Studio Code Live Preview, or run a static server from this folder. ## Push to GitHub ```powershell
git status
git add.
git commit -m "Fix website alignment spacing and feedback items"
git push
``` ## Important The consultation form includes front-end email validation and a review/demo verification-code flow. Real email verification requires a server endpoint or form service before going live. ## Light/Dark theme update This version defaults to the light Savannah palette and includes a top-right navigation toggle. The button shows a moon in light mode and a sun in dark mode. The selected mode is stored in `localStorage` under `savannah-theme`. Staff portraits have been physically cropped to a consistent 4:5 portrait ratio and the CSS also enforces consistent presentation across the Team page.
