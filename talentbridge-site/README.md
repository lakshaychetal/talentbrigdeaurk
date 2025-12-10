# TalentBridge AU website

This project delivers a multi-page TalentBridge AU marketing experience with a sticky topbar, routed pages and sections inspired by the supplied Figma-style brief. Each page mirrors the requested copy, imagery, CTAs and microcopy (home, employers, job seekers, pricing, resources, about and contact), while the router-enabled layout lets the team prototype navigation quickly.

## Getting started
```bash
cd talentbridge-site
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Structure
- `src/App.jsx` — sets up React Router with the shared layout and page routes.
- `src/data/content.js` — shared copy, templates, lists and CTAs consumed by each page.
- `src/pages/` — individual page components for home, employers, job seekers, pricing, resources, about and contact.
- `src/components/` — layout framing, topbar navigation and footer shared across every route.
- `src/App.css` — design tokens, layout scaffolding, and responsive styling for the multi-page UI.
- `public/` — static assets such as the favicon.

## Notes
- All buttons follow the brand tokens and include hover affordances for keyboard/mouse use.
- The site intentionally keeps data in plain JS arrays so CMS content can easily replace each snippet.
- For production, swap the placeholder imagery text with actual hero photography and wire the search bar and job builder to live APIs.
