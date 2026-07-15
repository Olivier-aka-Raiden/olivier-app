# Olivier AI Hub

[![Netlify Status](https://api.netlify.com/api/v1/badges/62826674-853d-4d27-88ca-62cf6d26e507/deploy-status)](https://app.netlify.com/projects/olivier-ai-hub/deploys)

Personal portfolio website showcasing side projects, AI-generated art, music, and professional background. Live at **[olivier-ai-hub.netlify.app](https://olivier-ai-hub.netlify.app)**.

## Quick Start

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production output in build/
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 4.9 (Create React App) |
| Styling | styled-components + CSS custom properties |
| Routing | react-router-hash-link (single-page smooth scroll) |
| Animations | GSAP + Lenis |
| UI | react-image-gallery, react-markdown |
| Deploy | Netlify (static) |

## Sections

- **Home** — Landing hero
- **About** — Bio, skills, experience, tech & AI tool logos
- **Projects** — Featured side projects with card-based layout
- **AI Work** — AI image galleries, music videos, prompt carousel
- **Contact** — mailto-based contact form

## Deploy

Pushes to `master` auto-deploy via Netlify. See [netlify.toml](netlify.toml) for build configuration.
The site uses the Prerender extension for SEO/agent crawling.

## Project Structure

```
src/
├── components/    # React components (sections + UI primitives)
├── data/          # Extracted content (images, videos, conversations)
├── services/      # Scroll helpers, active section tracking
├── App.tsx         # Root layout with hash-based navigation
└── App.css         # Global styles + theme variables
```

See [AGENTS.md](AGENTS.md) for the full architecture guide.
