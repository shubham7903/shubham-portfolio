# Shubham Kumar — Portfolio

A single-page portfolio built with plain HTML, CSS and JavaScript — no build step, no framework, deploys straight to GitHub Pages.

**Theme:** engineering blueprint / deployment schematic — a sticky pipeline rail (`SOURCE → BUILD → TEST → DEPLOY → MONITOR`) tracks scroll position like a live CI/CD run, and each section is styled as a blueprint "sheet" with corner brackets and a title block.

## Structure
```
portfolio/
├── index.html          # all page content
├── css/style.css        # styling
├── js/script.js         # scroll spy, reveal animation, typing effect, contact form
├── assets/
│   └── Shubham_Kumar_Resume.pdf   # replace with your latest resume anytime
└── README.md
```

## Deploy to GitHub Pages (5 minutes)

1. **Create a new repo** on GitHub — e.g. `shubham-portfolio` (public).
2. **Push this folder** to it:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shubham-portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, branch = `main`, folder = `/ (root)`. Save.
5. Wait ~1 minute — your site goes live at:
   ```
   https://<your-username>.github.io/shubham-portfolio/
   ```

## Customizing

- **Content:** all text lives directly in `index.html` — search for the section (`#source`, `#build`, `#test`, `#deploy`, `#monitor`) you want to edit.
- **Colors/fonts:** all design tokens are CSS variables at the top of `css/style.css` under `:root`.
- **Resume:** swap `assets/Shubham_Kumar_Resume.pdf` with an updated file (keep the same filename, or update the `href` in the hero's "Download Résumé" button).
- **Contact form:** currently opens the visitor's email client via `mailto:` (works with zero backend, since GitHub Pages only serves static files). If you want real form submissions later, swap the `fetch`/`mailto` logic in `js/script.js` for a service like Formspree or EmailJS — free tier is enough for a portfolio.

## Notes

- Fully responsive down to mobile (pipeline rail collapses into a small top pill on narrow screens).
- Respects `prefers-reduced-motion`.
- No external JS dependencies — only Google Fonts are loaded from a CDN.
