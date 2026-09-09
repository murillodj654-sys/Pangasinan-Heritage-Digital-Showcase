# Pangasinan Heritage Digital Showcase

**Student Name:** [Antonio Dj M.]
**Selected Framework:** React — Next.js 14 (App Router), Static Site Generation (SSG)

## About
A mobile-first, statically generated website promoting Pangasinan's heritage tourist sites
(Hundred Islands, Cape Bolinao Lighthouse, Balungao Hot Spring, Manaoag Church) for the
Pangasinan Provincial Tourism Office, built with an Atomic Design component architecture.

## Getting Started
```bash
npm install
npm run dev       # http://localhost:3000
```

## Build a static export (for GitHub Pages)
```bash
npm run build      # outputs static site to /out
```

## Project Structure
```
src/
├── app/                # Next.js App Router pages (Home, Detail, Favorites, About)
├── components/
│   ├── atoms/           # Button, Typography, ColorTokens, Icon, Image
│   ├── molecules/        # HeritageCard, SearchForm, NavigationItem
│   └── organisms/        # HeritageGrid, HeaderNavigation
└── data/                # heritage-sites.ts — content decoupled from components
```

## Live Website
[\[GitHub Pages URL — to be added after deployment in Activity 2\]](https://username.github.io/repository-name/)
