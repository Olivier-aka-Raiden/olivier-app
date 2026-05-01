# Olivier App — Agent Guide

Personal portfolio/landing page for Olivier Villequey, showcasing side projects, AI-generated art, music, and professional background.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 (Create React App) |
| Language | TypeScript 4.9 |
| Routing | Hash-based smooth-scroll via `react-router-hash-link` (no page routes — single page) |
| Animations | GSAP 3.12.5 + Lenis 1.1.9 + ScrollTrigger |
| Styling | CSS custom properties + styled-components 6.1 |
| UI Gallery | react-image-gallery |
| Markdown | react-markdown 10 |
| Form | react-hook-form (listed, but Contact uses raw state) |

## Directory Map

```
olivier-app/
├── public/
│   ├── assets/img/       # ~50 AI-generated images + logos + thumbnails
│   └── index.html        # CRA entry
├── src/
│   ├── components/       # All React components (flat — no subdirectories)
│   ├── services/         # scrollToElement service (smooth scroll helper)
│   ├── App.tsx           # Root layout: header, sections, burger menu
│   ├── App.css           # Global styles + all CSS (~770 lines)
│   ├── index.tsx         # ReactDOM entry
│   └── index.css         # Minimal reset
└── package.json          # Dependencies + CRA scripts
```

## Component Tree

```
App.tsx (BrowserRouter)
├── header
│   ├── Link (home "O." button)
│   ├── ul.menu (desktop: About, Projects, AI Work, Contact)
│   └── BurgerMenu (mobile hamburger)
├── section#home          → Home.tsx
├── section#about         → About.tsx (uses Tooltip)
├── section#projects      → Projects.tsx (uses Tile)
├── section#ai-work       → AIWork.tsx
│   ├── AIImageGallery    (react-image-gallery)
│   ├── AIVideoGallery    (YouTube embeds)
│   ├── AIVideoMusicGallery
│   └── PromptCarousel    → PromptBubble (uses ReactMarkdown)
└── section#contact       → Contact.tsx (mailto form)
```

## Component Inventory

| Component | Type | Key Props | Notes |
|-----------|------|-----------|-------|
| `Home` | FC | — | Landing hero, welcome text |
| `About` | FC | — | Bio, logos (8 tech + 6 AI), skills, experience |
| `Projects` | FC | — | 5 project tiles with Tile component |
| `AIWork` | FC | — | Orchestrates all AI galleries + prompt carousel |
| `Contact` | FC | — | Name/email/message form, mailto submission |
| `BurgerMenu` | FC | `isOpen`, `toggleMenu` | Slide-in mobile nav |
| `Tile` | FC | `imageUrl`, `title`, `description`, `learnMoreUrl` | styled-components card |
| `Tooltip` | FC | `text`, `children` | Hover tooltip for About logos |
| `AIImageGallery` | Class | `images?: ReactImageGalleryItem[]` | react-image-gallery wrapper |
| `AIVideoGallery` | Class | — | YouTube embed gallery (4 items) |
| `AIVideoMusicGallery` | Class | — | YouTube embed gallery (4 items) |
| `PromptCarousel` | FC | `conversations: Conversation[]` | Swipeable carousel, styled-components |
| `PromptBubble` | FC | `prompt`, `response`, `model` | Chat bubble with ReactMarkdown |

## Conventions

- **No backend or API calls** — fully static CRA app deployed as a landing page
- **Contact form** uses `mailto:` link — no server-side processing
- **All images** in `public/assets/img/` — loaded as static assets, not imports
- **No state management** — local `useState` only, no contexts or stores
- **Mix of class and functional components** — some components (galleries) are class components with lifecycle methods
- **styled-components** used for complex layout components (Tile, PromptBubble, PromptCarousel)
- **CSS variables** in `:root` for theming (purple/dark theme)
- **Smooth scroll** via custom `scrollWithOffset` service (accounts for fixed 15vh header)
- **GSAP/Lenis** installed but not imported in any component — may have been used in a removed implementation or is unused infrastructure

## Key Color Theme (CSS Variables)

```
--color-bg: #1a0b37        (dark purple background)
--color-text: #818bff      (light blue text)
--color-title: #9577cc     (purple accent)
--color-link: #2935ba      (blue links/accents)
--color-link-hover: #9577cc
```

## Development Commands

```bash
npm start       # Dev server on port 3000
npm test        # React Testing Library + Jest
npm run build   # Production build to build/
```

## Build & Deploy

- **Build:** `react-scripts build` outputs to `build/` directory
- **Deploy:** Static hosting (GitHub Pages, Netlify, Vercel, etc.) — serve `build/` folder
- **No environment variables** or API keys required

## Common Tasks

| Task | What to Touch |
|------|---------------|
| Add new section | Create component in `src/components/`, add `<section id="x">` in `App.tsx`, add nav link in header + BurgerMenu |
| Add AI images | Add image array in `AIWork.tsx`, place `.webp` in `public/assets/img/` |
| Add project | Add `<Tile>` in `Projects.tsx`, place image in `public/assets/img/` |
| Add gallery type | Copy pattern from `AIImageGallery.tsx` or `AIVideoGallery.tsx` |
| Change theme | Edit CSS variables in `App.css :root` |
| Change scroll offset | Update `scrollToElement.service.tsx` |
| Add external link | Add `<a>` or `<Tile learnMoreUrl="...">` |
| Add animation | Import GSAP in component, target refs for timeline |