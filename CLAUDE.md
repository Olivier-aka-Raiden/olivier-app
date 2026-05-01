# CLAUDE.md — Working on Olivier App

## Dev Commands

```bash
npm start              # Dev server → http://localhost:3000
npm test               # Interactive test runner (Jest + RTL)
npm run build          # Production build → build/
npm install            # Install dependencies (run after clone)
```

## Quick Reference

### Adding an image to a gallery
1. Place the `.webp` (or `.jpg`/`.png`) in `public/assets/img/`
2. Add an entry to the image array in the relevant component:
   - `AIWork.tsx` → `images[]` (AI-generated) or `loraImages[]` (fine-tuned)
   - `AIVideoGallery.tsx` → `images[]` for video galleries
   - `AIVideoMusicGallery.tsx` → `images[]` for music galleries
3. Each entry: `{ original: "/assets/img/your-file.webp", thumbnail: "/assets/img/your-file.webp" }`

### Adding a project tile
1. Place an image in `public/assets/img/`
2. Add a `<Tile>` in `Projects.tsx` with `imageUrl`, `title`, `description`, `learnMoreUrl`

### Adding a new section
1. Create component in `src/components/YourSection.tsx`
2. Import it in `App.tsx`
3. Add `<section id="your-section"><YourSection/></section>` in the `.content` div
4. Add a `<Link scroll={el => scrollWithOffset(el)} to="#your-section">` nav link in:
   - The `<ul class="menu">` for desktop
   - `BurgerMenu.tsx` for mobile

### Adding a new carousel conversation
In `AIWork.tsx`, add an entry to the `conversations[]` array with `{ prompt, response, model }`.

## Code Style

- **Components:** PascalCase, one per file in `src/components/`
- **CSS:** Prefer CSS variables from `App.css :root` over hardcoded values
- **styled-components:** Used for layout-heavy components (Tile, PromptBubble, PromptCarousel)
- **Inline styles:** Used sparingly (Contact.tsx uses them)
- **No backend** — all data is static (hardcoded arrays in components)
- **No API keys** needed to run the project

## Gotchas

- **Images must be in `public/assets/img/`** — NOT imported via JS imports. Use string paths like `/assets/img/foo.webp`.
- **HashLink scroll offset** accounts for the fixed 15vh header — changing header height requires updating `scrollToElement.service.tsx`.
- **Fullscreen gallery** may not work on local dev due to iframe restrictions (YouTube embeds).
- **Strict TypeScript** (`strict: true` in tsconfig) — casting may be needed for some patterns.
- **React 18 strict mode** causes double-mount in development — don't be alarmed by duplicate effects/logs.
- **GSAP and Lenis** are installed but currently unused in components. If you add animations, import directly in the component.
- **`react-hook-form`** is in `package.json` but the Contact form uses raw state management — it's unused infrastructure.