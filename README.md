# yuju shrestha — digital portfolio

> *seeking something missing. missing something left behind.*

A cinematic, emotionally expressive portfolio and digital identity experience built with Next.js, TypeScript, and Framer Motion. Live at [yuju-psi.vercel.app](https://yuju-psi.vercel.app).

---

## what this is

This is not a template. Every design decision — color, typography, motion, pacing — was built from a specific emotional brief. The site carries influences from Bleeder (1999), All About Lily Chou-Chou, Slowdive, and a specific memory of a BMX ride to a lakeside with a Jansport bag, Mishima, and an iPod.

The failure condition was simple: if it didn't feel like me, it failed.

---

## live features

- **Cinematic hero** — Cormorant serif, bruised gold palette, breathing ambient orb
- **3D icosahedron** — wireframe geometry rotating slowly behind the hero name
- **Live GitHub integration** — repositories fetched dynamically via GitHub API
- **Experience section** — AankhaNet, this site, and projects becoming
- **About section** — carries a hidden memory nobody will find unless they look
- **Journal system** — MDX-powered, writes like a text file, publishes like a site
- **Custom cursor** — dot and ring, turns bruised gold on hover
- **Page transitions** — fall and rise, 8px movement, 0.6s ease
- **Scroll progress** — 1px terminal green line along the top
- **Keyboard navigation** — `j` and `k` to move between sections, vim-style
- **Loading screen** — name appears before anything else
- **Easter egg** — type `yuju` anywhere on the page
- **Music player** — four terminal green lines, bottom right
- **SEO + Open Graph** — share card carries the palette and the thesis
- **Mobile responsive** — cursor hidden on touch, 3D hidden on small screens

---

## design system

### color tokens

| name | hex | meaning |
|------|-----|---------|
| `--shade-self` | `#0d0f0c` | where you sat |
| `--near-black` | `#1a1a18` | the film grain |
| `--bruised-gold` | `#c8a96e` | longing |
| `--shade-green` | `#3d4a35` | living thing |
| `--still-lake` | `#7a8fa0` | holding sky |
| `--journal-page` | `#e8e0d0` | used, not clean |
| `--bleeder-red` | `#b5432a` | sparse. deliberate. |
| `--terminal-green` | `#00c853` | you. right now. |

### typography voices

| voice | feel | usage |
|-------|------|-------|
| **awe** | Cormorant, oversized, inevitable | headings |
| **intimate** | serif italic, breathing | body, memory |
| **oriented** | monospace, coordinates | labels, nav |
| **weak** | barely there, honest | footnotes, hidden lines |

### motion language

| name | description | values |
|------|-------------|--------|
| `drift.in` | arrives like a thought | y: 24→0, opacity 0→1, 0.9s |
| `dissolve` | leaves without deciding | opacity 1→0, 0.6s |
| `breathe` | ambient pulse | scale 1→1.008→1, 4s loop |
| `fall` | page transition | y: 0→8px + opacity 1→0 |
| `stagger` | children arrive unhurried | delay: index × 0.12s |

---

## tech stack

| layer | tool | why |
|-------|------|-----|
| framework | Next.js 16 | routing, API security, performance |
| language | TypeScript | catches mistakes before they become bugs |
| styling | CSS variables + inline styles | design tokens in one place |
| animation | Framer Motion | drift, dissociation, thought arriving |
| 3D | React Three Fiber | one element, used once, used right |
| fonts | Cormorant Variable + Inter Variable | awe and orientation |
| blog | MDX + gray-matter | journaling as code |
| data | GitHub API | live repositories, no database needed |
| hosting | Vercel | same family as Next.js |

---

## project structure

```
yuju/
├── app/
│   ├── globals.css          — design tokens, motion, base styles
│   ├── layout.tsx           — root layout, all global components
│   ├── page.tsx             — home page, section composition
│   ├── journal/             — blog/journal routing
│   ├── opengraph-image.tsx  — OG share card
│   └── icon.tsx             — favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Nav.tsx      — fixed navigation with journal link
│   │   ├── sections/
│   │   │   ├── Hero.tsx     — landing, ambient orb, 3D form
│   │   │   ├── Projects.tsx — GitHub API integration
│   │   │   ├── Resume.tsx   — experience, skills, location
│   │   │   ├── About.tsx    — the memory, the hidden line
│   │   │   └── Contact.tsx  — links, footer thesis
│   │   └── ui/
│   │       ├── Cursor.tsx        — custom cursor, hover states
│   │       ├── EasterEgg.tsx     — type yuju
│   │       ├── FloatingForm.tsx  — 3D icosahedron
│   │       ├── KeyboardNav.tsx   — j/k navigation, section dots
│   │       ├── Loader.tsx        — cinematic entrance
│   │       ├── MusicPlayer.tsx   — four lines, ambient
│   │       └── ScrollProgress.tsx — terminal green progress line
│   ├── lib/
│   │   ├── github.ts        — repository fetching, caching
│   │   └── posts.ts         — MDX blog utilities
│   └── types/               — TypeScript type definitions
├── content/
│   └── posts/               — MDX journal entries
└── public/                  — static assets
```

---

## running locally

```bash
# clone
git clone https://github.com/yujushrestha/yuju.git
cd yuju

# install
npm install

# environment — create .env.local
GITHUB_TOKEN=your_github_personal_access_token

# develop
npm run dev
```

open `http://localhost:3000`

---

## journal

writing lives in `content/posts/`. create a new entry:

```bash
touch content/posts/your-title-here.mdx
```

frontmatter structure:

```mdx
---
title: "the actual title"
date: "2026-05-31"
description: "one line. what it's about."
---

your words here.
```

push to main. it appears on the live site automatically.

---

## featured work

### AankhaNet
AI-driven network threat detection and visualization platform with a mobile SOC companion for SMEs. Built for Australian small-medium businesses.

**detect · monitor · protect**

→ [aankhanet.net](https://aankhanet.net)
→ [github.com/iambnishant07/aankhanet](https://github.com/iambnishant07/aankhanet)

Built with: Python, TypeScript, React, React Native, Kafka, PostgreSQL, InfluxDB, Redis, Docker, AWS

---

## the emotional brief

*"someone peeping through my memory files in my mind"*

The site lives at night. Warm low light. The home frequency is quiet dark — a journal in one hand, something running underneath the stillness.

The palette comes from two films: Bleeder (1999) and All About Lily Chou-Chou. Overexposed in the soul, underexposed on the surface.

The motion language is loose, dissociative. Things arrive the way thoughts arrive — unannounced, already halfway there.

The invisible architecture is two sentences:
*seeking something missing. missing something left behind.*

---

## built with

Yuju Shrestha — Brisbane, QLD
Bachelor of IT, majoring in Web and Mobile Application Development

*graduating 2026 — open to work*

→ [yujushresthao@gmail.com](mailto:yujushresthao@gmail.com)
→ [github.com/yujushrestha](https://github.com/yujushrestha)

---

*built slowly. honestly.*
