# Noriflow Landing Page

## Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- npm (comes with Node.js)

### Setup
```bash
# 1. Clone or download this project
git clone <your-repo-url>
cd noriflow-landing

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Opens at **http://localhost:5173**

### Build for Production
```bash
npm run build
```

Output goes to `dist/` — deploy anywhere (Netlify, Vercel, any static host).

### Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Project Structure
```
src/
├── assets/          # App screenshots (PNG)
├── components/      # All UI sections
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── WorkspacesSection.tsx
│   ├── ThemeShowcaseSection.tsx
│   ├── ComparisonSection.tsx
│   ├── DesktopPulseSection.tsx
│   ├── RoadmapSection.tsx
│   ├── CTASection.tsx
│   ├── FooterSection.tsx
│   ├── ParticleCanvas.tsx
│   ├── CursorTracker.tsx
│   └── ScrollReveal.tsx
├── pages/
│   └── Index.tsx    # Main page layout
├── index.css        # Design tokens & global styles
└── App.tsx          # Router setup
```

---
*Built for Noriflow by MSSATALAITE*
