# Sia Estates — Next.js

Editorial-luxury redesign of [siaestates.com](https://www.siaestates.com), built with **Next.js 14 (App Router)**, **Tailwind CSS**, and rich animations powered by **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and **Swiper**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

## Project structure

```
sia-estates/
├── src/
│   ├── app/
│   │   ├── layout.js          # root layout — fonts, metadata, html/body
│   │   ├── page.js            # composes all sections
│   │   └── globals.css        # CSS variables, custom utilities, all bespoke styles
│   └── components/
│       ├── SiteShell.jsx      # ★ Lenis + GSAP global animation provider
│       ├── CustomCursor.jsx   # mix-blend-difference cursor with hover state
│       ├── Header.jsx         # navbar + mobile menu (shared state)
│       ├── Hero.jsx           # full-bleed hero with parallax & word-by-word reveal
│       ├── Marquee.jsx        # ticker band under hero
│       ├── Manifesto.jsx      # about + animated stat counters
│       ├── Prospera.jsx       # featured project showcase (4 highlight blocks)
│       ├── ProjectUpdates.jsx # construction gallery
│       ├── WhyUs.jsx          # 4-up feature grid with hover invert
│       ├── Upcoming.jsx       # Patancheru + Sia Vantage cards
│       ├── Testimonials.jsx   # Swiper carousel (autoplay + nav)
│       ├── ContactCTA.jsx     # closing CTA
│       └── Footer.jsx         # footer with bottom marquee
├── public/                    # static assets (currently empty — all images are remote)
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.mjs
├── jsconfig.json              # @ alias → ./src
├── .eslintrc.json
└── package.json
```

## Architecture notes

### How animations are wired

**`SiteShell.jsx`** is the single source of truth for global animations. It:

1. Initializes **Lenis** smooth-scroll and exposes the instance on `window.__lenis` (so `Header.jsx` can call `.stop()` / `.start()` when the mobile menu opens).
2. Registers **GSAP ScrollTrigger** and links it to Lenis's scroll event.
3. After a brief tick (so the React tree has settled), it queries the DOM for `[data-reveal]`, `[data-counter]`, `.gallery-item`, `.magnetic`, `.hero-img`, etc., and binds animations.
4. Returns cleanup functions for every event listener and `ScrollTrigger.kill()`s on unmount.

This lets the **section components stay as plain server components** — they just sprinkle `data-*` attributes and class hooks, and `SiteShell` picks them up.

### Client vs server components

| Component          | Type   | Why                                          |
| ------------------ | ------ | -------------------------------------------- |
| `SiteShell.jsx`    | client | Uses Lenis, GSAP, `useEffect`                |
| `CustomCursor.jsx` | client | Mouse listeners + RAF                        |
| `Header.jsx`       | client | `useState` for mobile menu                   |
| `Testimonials.jsx` | client | Swiper React components need browser context |
| All other sections | server | Pure JSX with `data-*` hooks                 |

### Fonts

Loaded via `next/font/google` in `layout.js`:

- **Fraunces** (variable, with `SOFT` and `opsz` axes) — used for display headlines and italic emphasis
- **Geist** (variable) — body, UI, mono

The CSS classes `.font-display`, `.font-display-italic`, and `.font-mono` live in `globals.css` and reference the fonts via the `--font-fraunces` and `--font-geist` CSS variables that `next/font` exposes.

### Tailwind theme

Brand colors are extended in `tailwind.config.js`, so you can use:

```jsx
className = "bg-ink text-bone-light border-line";
```

instead of arbitrary values like `bg-[var(--ink)]`. The `line` and `line-soft` colors still resolve via CSS variables (since they need alpha).

For dark sections that need bone-tinted borders/accents (e.g. inside the Prospera or Testimonials sections), use Tailwind's opacity modifier: `border-bone/10`, `border-bone/15`, `border-bone/20`.

## Images

All hero/gallery images are loaded from `siaestates.com` via plain `<img>` tags (with `onError` Unsplash fallbacks). This is intentional — `next/image` doesn't support runtime error fallbacks elegantly. The `@next/next/no-img-element` ESLint rule is disabled in `.eslintrc.json`.

If you want to migrate to `next/image` for optimization:

1. Replace `<img>` with `<Image>` from `next/image`
2. Add explicit `width`/`height` or use `fill` with a sized parent
3. The remote hosts are already whitelisted in `next.config.mjs`

## Customization

### Change the accent color

Edit the `bronze` and `bronze-deep` values in:

- `tailwind.config.js` (Tailwind utilities)
- `src/app/globals.css` (`:root` CSS variables — used by buttons, marker dots, squiggle underline)

### Change fonts

Edit `src/app/layout.js`. The `next/font/google` API auto-self-hosts and generates CSS variables for you.

### Add a new section

1. Create `src/components/MySection.jsx`
2. Import + render it in `src/app/page.js`
3. Add `data-reveal` to anything you want to fade-up on scroll, or `.gallery-item` for the image-reveal animation. SiteShell will pick them up automatically.

## Tech

- **Next.js 14.2** (App Router)
- **React 18.3**
- **Tailwind CSS 3.4**
- **GSAP 3.12** + **ScrollTrigger** (free)
- **Lenis 1.1**
- **Swiper 11**

## Browser support

Modern evergreen browsers. Custom cursor and Lenis smooth-scroll auto-disable on touch devices (CSS media query `(hover: none)` and Lenis's own `smoothTouch: false`).
#
