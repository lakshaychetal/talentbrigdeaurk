# TalentBridge AU recruiting platform

This workspace contains two companions for the TalentBridge AU project:

- `TalentBridge-AU-Design-Brief.md` – Figma-style design & content brief that covers every major page, component spec, imagery keywords, accessibility guidance, and the three ready-to-use JD templates.
- `talentbridge-site/` – A single-page React + Vite marketing site that mirrors the core sections from the brief and showcases the hero, filters, industries, employer resources, compliance notes, and JD templates.

## Running the site
```bash
cd talentbridge-site
npm install
npm run dev
```

## Building the project
```bash
cd talentbridge-site
npm run build
```

The React app lives inside `talentbridge-site/src`, and you can replace the placeholder copy with real CMS content via the arrays defined in `App.jsx`.
