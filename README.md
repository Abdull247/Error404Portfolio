# Error404 · Developer Portfolio

A slick, dark-themed, terminal-inspired developer portfolio for **Error404** (Dev Codes) — a full-stack web & backend developer based in Lagos / Abuja, Nigeria.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**.

## ✨ Features

- **Animated hero** with a self-typing terminal that cycles through `whoami`, `cat stack.txt`, `git log`, and `echo $STATUS`
- **Sticky nav** with active-section highlighting and smooth-scroll anchor links
- **Scroll reveal** animations powered by `IntersectionObserver`
- **Cursor-follow glow** (desktop only, respects `prefers-reduced-motion`)
- **Tech marquee** — infinite horizontal ticker of the full stack
- **Core stack grid** — 6 categorized cards (Frontend, Backend, Data, Automation, Deployment, Additional)
- **Projects showcase** — featured Error404Apis card with mock API response + secondary cards for TaskBridge, Sudo, Reelix
- **Strengths grid**, **experience/education timeline**, and a **contact panel** with all links
- Fully **responsive** from 320px to 1440px+
- Honors `prefers-reduced-motion`

## 🎨 Theme

Dark mode with an amber accent (`#f5a623`), using:

- **Space Grotesk** — headings
- **Inter** — body
- **JetBrains Mono** — terminal / code

## 🚀 Run locally

```bash
# install deps
bun install

# start dev server
bun run dev

# open http://localhost:3000
```

## 📁 Structure

```
src/
├── app/
│   ├── globals.css        # theme + tailwind + animations
│   ├── layout.tsx         # fonts + metadata
│   └── page.tsx           # main portfolio composition
└── components/
    ├── portfolio/         # all portfolio sections
    │   ├── Hero.tsx
    │   ├── TerminalWindow.tsx
    │   ├── Nav.tsx
    │   ├── About.tsx
    │   ├── CoreStack.tsx
    │   ├── Projects.tsx
    │   ├── Strengths.tsx
    │   ├── Experience.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── TechMarquee.tsx
    │   ├── CursorGlow.tsx
    │   ├── Reveal.tsx
    │   └── SectionHeader.tsx
    └── ui/                # shadcn/ui components
```

## 📝 License

MIT — feel free to fork and adapt.
