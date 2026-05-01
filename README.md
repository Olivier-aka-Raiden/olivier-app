# Olivier App — Personal Portfolio

A single-page portfolio website showcasing Olivier Villequey's side projects, AI-generated art, music, and professional background.

## Quick Start

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

Static output in `build/` — deploy to any static host (GitHub Pages, Netlify, Vercel, etc.)

## Tech Stack

React 18 · TypeScript 4.9 · Create React App · styled-components · GSAP · react-image-gallery · react-markdown

## Sections

- **Home** — Landing hero
- **About** — Bio, tech stack, skills, experience, AI interests
- **Projects** — 5 featured side projects with detail cards
- **AI Work** — AI-generated images, fine-tuned LoRA gallery, AI music videos, prompt conversations
- **Contact** — Contact form (mailto-based)

## Project Structure

```
src/
├── components/    # 13 React components (all sections + UI primitives)
├── services/      # Smooth scroll helper
├── App.tsx        # Root layout with hash-based navigation
└── App.css        # Global styles + theme variables
```

See [AGENTS.md](AGENTS.md) for the full architecture guide.
