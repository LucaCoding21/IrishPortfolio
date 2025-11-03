# Portfolio Build Guide (Next.js + Tailwind + Framer Motion)

**STATUS: ✓ COMPLETE - Built October 15, 2025**

This doc explains—step by step—how to implement your entire portfolio in **Next.js + Tailwind + JavaScript + Framer Motion**, including the **triangle "flashlight" cursor reveal** in the hero and a **static projects area** where clicking project buttons swaps the Emdep frame.

> You can paste each **Cursor Task Prompt** into Cursor to generate files quickly.

---

## 0) Goals & Constraints

- **Audience:** UI/UX & web design portfolio reviewers.
- **Stack:** Next.js (App Router), TailwindCSS, TypeScript, Framer Motion.
- **Key Interactions:**
  1. **Hero “flashlight” cursor** = _triangle cutout_ that reveals a **hidden background photo** underneath while the rest is dimmed.
  2. **Projects** = static cards. Clicking a project **swaps the large Emdep frame** with that project’s image/text.
- **Scope:** Desktop-first (1440–1920px), clean motion, no CMS (for now).
- **ASAP**: Structure is optimized for speed-to-ship while staying maintainable.

---

## 1) Project Scaffold

### Cursor Task Prompt

Create a new Next.js (App Router) + TypeScript + Tailwind project and clean the boilerplate.

```
npx create-next-app@latest portfolio --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
cd portfolio
```

Remove unused boilerplate files. Keep `app/page.tsx` as the landing page.

---

## 2) Tailwind Setup & Global Styles

Tailwind is auto-configured by the scaffold. Add some base tokens and utilities.

### `tailwind.config.ts`

- Enable container padding and custom breakpoints if needed.
- Add any brand fonts if you have them (optional).

### Cursor Task Prompt

Update `tailwind.config.ts` with a comfortable desktop-first container and a couple of tokens.

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1.5rem" },
    extend: {
      colors: {
        bg: "#0B0B0C",
        fg: "#F5F7FA",
        muted: "#9AA2B1",
        accent: "#1D4ED8", // sky-blue accent if desired
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
```

### `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html,
body,
#__next {
  height: 100%;
}
body {
  @apply bg-bg text-fg antialiased;
}

/* Smooth scrolling and selection */
html {
  scroll-behavior: smooth;
}
::selection {
  background: rgba(29, 78, 216, 0.35);
}
```

---

## 3) Folder Structure (App Router)

```
src/
  app/
    layout.tsx
    page.tsx
    favicon.ico
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      Container.tsx
    hero/
      Hero.tsx
      TriangleMask.tsx
    projects/
      Projects.tsx
      EmdepFrame.tsx
      ProjectCard.tsx
    ui/
      SectionHeading.tsx
      Button.tsx
  lib/
    types.ts
    projects.ts
```

---

## 4) Shared Types & Data

### `src/lib/types.ts`

```ts
export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  thumb: string; // small image for card
  image: string; // large image for Emdep frame
  role?: string;
  year?: string;
};
```

### `src/lib/projects.ts`

(Replace images with your real assets, placeholder paths for now.)

```ts
import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "emdep",
    title: "Emdep Aesthetics",
    subtitle: "Beauty clinic website redesign",
    thumb: "/images/emdep-thumb.jpg",
    image: "/images/emdep-hero.jpg",
    role: "UI/UX, Web Design",
    year: "2025",
  },
  {
    id: "project-2",
    title: "Project Two",
    subtitle: "Placeholder showcase",
    thumb: "/images/p2-thumb.jpg",
    image: "/images/p2-hero.jpg",
  },
  {
    id: "project-3",
    title: "Project Three",
    subtitle: "Placeholder showcase",
    thumb: "/images/p3-thumb.jpg",
    image: "/images/p3-hero.jpg",
  },
];
```

---

## 5) Layout

### `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "UI/UX & Web Design Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### `src/components/layout/Container.tsx`

```tsx
import { cn } from "@/utils/cn"; // optional helper, or remove and use className directly

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container max-w-[1200px]", className)}>{children}</div>
  );
}
```

> If you don’t have a `cn` util yet, either create one or replace with plain strings.

### `src/components/layout/Navbar.tsx`

```tsx
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-white/5">
      <Container className="flex items-center justify-between h-16">
        <Link href="#" className="font-semibold tracking-tight">
          Your Name
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#projects" className="hover:text-fg">
            Projects
          </a>
          <a href="#about" className="hover:text-fg">
            About
          </a>
          <a href="#contact" className="hover:text-fg">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
```

### `src/components/layout/Footer.tsx`

```tsx
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <Container className="py-10 text-sm text-muted">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Container>
    </footer>
  );
}
```

---

## 6) Hero with Triangle “Flashlight” Cursor

### Concept

We stack **two layers**:

1. **Background layer** with your hero photo (hidden by default via dark overlay).
2. **Dark overlay** on top covering the full hero.

We then apply an **SVG mask** to the overlay that cuts out a **triangle hole** anchored to the mouse position—revealing the background beneath only within the triangle. This approach is **performant** and **cross‑browser** compared to complex CSS mask-composites.

### Implementation Details

- Track mouse (x,y) **relative to the hero container**.
- Compute triangle polygon points:
  - Apex = cursor position `(x, y)`.
  - Base width = `base = 320` (tweak)
  - Height = `height = 380` (tweak)
  - Base points = `(x - base/2, y + height)` and `(x + base/2, y + height)`; clamp to container bounds.
- Update `<polygon points="..." />` dynamically.
- Use Framer Motion for gentle easing of the triangle so it lags slightly behind the cursor (polished feel).

### `src/components/hero/TriangleMask.tsx`

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function TriangleMask({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const containerRef = useRef<SVGSVGElement | null>(null);

  // Smooth springs for cursor position
  const sx = useSpring(0, { stiffness: 250, damping: 30, mass: 0.3 });
  const sy = useSpring(0, { stiffness: 250, damping: 30, mass: 0.3 });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sx.set(Math.max(0, Math.min(x, width)));
      sy.set(Math.max(0, Math.min(y, height)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [width, height, sx, sy]);

  // Base/height of the triangle (tweak to taste)
  const BASE = 320;
  const TRI_H = 380;

  // Convert springs to instantaneous numbers for polygon points.
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);

  useEffect(() => {
    const unsubX = sx.on("change", setPx);
    const unsubY = sy.on("change", setPy);
    return () => {
      unsubX();
      unsubY();
    };
  }, [sx, sy]);

  // Clamp helper
  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(val, max));

  // Compute triangle points each render
  const ax = clamp(px, 0, width);
  const ay = clamp(py, 0, height);
  const bx = clamp(px - BASE / 2, 0, width);
  const by = clamp(py + TRI_H, 0, height);
  const cx = clamp(px + BASE / 2, 0, width);
  const cy = clamp(py + TRI_H, 0, height);

  const points = `${ax},${ay} ${bx},${by} ${cx},${cy}`;

  return (
    <svg
      ref={containerRef}
      width={width}
      height={height}
      className="absolute inset-0 block"
    >
      <defs>
        {/* Mask: white = visible (overlay), black = hole (reveals bg) */}
        <mask
          id="triangleMask"
          x="0"
          y="0"
          width={width}
          height={height}
          maskUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width={width} height={height} fill="white" />
          {/* The polygon cutout follows the cursor */}
          <motion.polygon
            points={points}
            fill="black"
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
              mass: 0.25,
            }}
          />
        </mask>
      </defs>
      {/* The dark overlay that will have a triangle hole */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="rgba(0,0,0,0.55)"
        mask="url(#triangleMask)"
      />
    </svg>
  );
}
```

### `src/components/hero/Hero.tsx`

```tsx
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TriangleMask from "./TriangleMask";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[640px] overflow-hidden border-b border-white/10"
    >
      {/* Background image (hidden by overlay except triangle cutout) */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center opacity-100"
      />

      {/* Dark overlay with triangle hole */}
      {size.w > 0 && size.h > 0 && (
        <TriangleMask width={size.w} height={size.h} />
      )}

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container max-w-[1200px]">
          <motion.h1
            className="text-6xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Your Name
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-muted max-w-[720px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            UI/UX & Web Design — I craft clean interfaces and build them in
            code.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-fg text-bg font-medium shadow-soft hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-white/15 hover:bg-white/5"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

> Swap `/images/hero-bg.jpg` with your real hidden background. The overlay will reveal it **only inside** the moving triangle.

---

## 7) Projects Section (Static Cards + Emdep Frame Swap)

Behavior: a row/grid of **ProjectCard** components; clicking one **updates the EmdepFrame** (big display) with that project’s `image`.

### `src/components/projects/EmdepFrame.tsx`

```tsx
import Image from "next/image";

export default function EmdepFrame({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
  );
}
```

### `src/components/projects/ProjectCard.tsx`

```tsx
import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  selected,
  onSelect,
}: {
  project: Project;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`group w-full text-left p-3 rounded-xl border transition ${
        selected
          ? "border-fg bg-white/5"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-12 rounded-lg overflow-hidden">
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="">
          <div className="font-medium leading-tight">{project.title}</div>
          {project.subtitle && (
            <div className="text-xs text-muted">{project.subtitle}</div>
          )}
        </div>
      </div>
    </button>
  );
}
```

### `src/components/projects/Projects.tsx`

```tsx
"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import EmdepFrame from "./EmdepFrame";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId)!;

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-[1200px]">
        <SectionHeading
          title="Projects"
          subtitle="Click a project to preview in the frame"
        />

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-8">
            <EmdepFrame image={active.image} title={active.title} />
          </div>
          <div className="col-span-4 flex flex-col gap-3">
            {PROJECTS.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                selected={p.id === activeId}
                onSelect={() => setActiveId(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `src/components/ui/SectionHeading.tsx`

```tsx
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
    </div>
  );
}
```

---

## 8) About & Contact Sections (Simple)

### About

A concise paragraph plus a few capability bullets.

```tsx
export function About() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="container max-w-[1200px] grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-4 text-muted max-w-[720px]">
            I’m a UI/UX and web designer who codes. I design clean interfaces
            and implement them in Next.js + Tailwind with motion polish.
          </p>
        </div>
        <ul className="col-span-5 grid gap-2 text-muted text-sm">
          <li>• UI/UX for web apps and marketing sites</li>
          <li>• Next.js + Tailwind implementation</li>
          <li>• Framer Motion micro-interactions</li>
          <li>• SEO basics & performance</li>
        </ul>
      </div>
    </section>
  );
}
```

### Contact

Minimal links + email.

```tsx
export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="container max-w-[1200px]">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-4 text-muted">
          Reach me at{" "}
          <a href="mailto:you@example.com" className="underline">
            you@example.com
          </a>{" "}
          or find me on{" "}
          <a className="underline" href="#">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
```

---

## 9) Assemble the Home Page

### `src/app/page.tsx`

```tsx
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import { About, Contact } from "@/components/sections"; // or inline as shown above

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
```

> If you kept About/Contact inline, import from the files you created, or place them directly in `page.tsx`.

---

## 10) Performance & Polish

- **Images**: Use `next/image` with local optimized JPG/WEBP assets sized for desktop (e.g., 1920×1080 hero, 1200×675 project images).
- **Preload hero**: `priority` on the hero background.
- **Motion**: keep transitions under `0.6s`; use gentle springs.
- **Accessibility**: Ensure link focus styles (`outline`), alt text for images.
- **SEO**: Fill `metadata` in `layout.tsx` with your name and keywords.

---

## 11) Deployment

- Push to GitHub → **Vercel** import → build.
- Set `output: standalone` only if using custom runtimes. Default is fine here.
- Configure **Image Optimization** domains in `next.config.js` if you link external images.

---

## 12) Troubleshooting the Triangle Mask

- **Laggy movement** → lower `stiffness`/increase `damping` in springs; ensure only the polygon animates, not the whole section.
- **Mask inverted** → swap `fill="white"`/`fill="black"` in mask rect/polygon.
- **Bounds issues** → clamp the coordinates within hero width/height (already done above).
- **Safari quirks** → keep `maskUnits="userSpaceOnUse"` and avoid nested transforms on the `<svg>`.

---

## 13) Stretch Goals (Optional)

- **Cursor trail**: draw a polyline path of past apex points with low alpha.
- **Parallax hero**: small translate on hero text based on mouse position.
- **Dark/Light mode**: `class` strategy and Tailwind’s `dark:` variants.
- **Case study pages**: route per project at `/projects/[id]` later.

---

## 14) What to Hand to Cursor (Quick Prompts)

You can paste these prompts one‑by‑one in Cursor:

1. **Scaffold & Tailwind**

   > Create a Next.js App Router project with TypeScript + Tailwind. Configure `tailwind.config.ts` and `globals.css` using the tokens provided above. Add a dark background and container defaults.

2. **Layout**

   > Build `layout.tsx`, `Navbar`, `Footer`, and a `Container` component exactly as shown. Sticky navbar with blur and subtle border.

3. **Hero**

   > Implement `Hero.tsx` with a full-bleed background image and the `TriangleMask.tsx` SVG mask that reveals the image only inside a triangle following the cursor. Match the spring settings.

4. **Projects**

   > Create `types.ts`, `projects.ts` with dummy items, `ProjectCard`, `EmdepFrame`, and `Projects.tsx` sections. Clicking a card updates the frame.

5. **About & Contact**

   > Add simple About and Contact sections with clean copy and semantic markup.

6. **Assembly & Deploy**
   > Compose `page.tsx` using the components and deploy to Vercel. Optimize images and metadata.

---

## 15) Next Steps Checklist (ASAP)

- [ ] Replace placeholder images with **your real hero photo** and project screenshots.
- [ ] Tune triangle `BASE` and `TRI_H` for your aesthetic.
- [ ] Fill real copy in About + Contact.
- [ ] Test on Chrome/Safari/Edge at 1440–1920 widths.
- [ ] Ship to Vercel.

---

**Done.** This is everything your Cursor AI needs to generate the full portfolio with the triangular flashlight hero and static project frame swapping. Tweak styles to your brand and you’re good to ship.
