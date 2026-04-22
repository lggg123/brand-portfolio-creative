# Alex Rivera — Director of Football Video

A cinematic portfolio website built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Three.js** via `@react-three/fiber`.

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **3D / Animation**: Three.js, @react-three/fiber, @react-three/drei
- **Typography**: System fonts (sans-serif stack)

## Features

- Immersive Three.js particle field + geometric shapes in the hero section
- Dark cinematic design with gold accent (`#d4af37`)
- Responsive layout — mobile-first
- Sections: Hero, Work (projects), About (skills + experience), Contact (form)
- SSR-safe Three.js via `dynamic` import with `ssr: false`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Structure

```
app/
  layout.tsx       # Root layout (dark theme)
  page.tsx         # Main page — assembles all sections
  globals.css      # Global styles and custom CSS utilities
components/
  Navbar.tsx       # Fixed transparent-to-solid navigation
  Hero.tsx         # Full-screen hero with 3D background (dynamic import)
  HeroScene.tsx    # Three.js canvas — particles + wireframe geometry
  Work.tsx         # Portfolio projects grid
  About.tsx        # Bio, skill bars, experience timeline
  Contact.tsx      # Contact form + footer
```
