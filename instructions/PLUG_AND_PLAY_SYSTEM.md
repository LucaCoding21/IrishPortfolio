# Plug & Play Case Study System

This doc captures what changed in the refactor + how to use the new data-first workflow to add projects without touching layout code. Em Dep stays pixel-perfect—the new projects borrow its exact sections.

## What Changed

- `PROJECT_CASE_STUDIES` now stores **every piece of case-study content** (hero, metadata, table of contents, and the ordered section blocks).
- `ProjectContentSections` renders blocks dynamically, so you only edit JSON-like data.
- `ProjectDetailPage` reads that data for hero text, mockups, metadata, and the sticky table of contents.
- A reusable `createCaseStudyTemplate(name)` helper + exported `CASE_STUDY_SECTION_TEMPLATE` give you a full scaffold when starting a new project.

## File Map

| Area | File | Notes |
|------|------|-------|
| Project list + data | `src/lib/projects.js` | Contains both the homepage cards (`PROJECTS`) and the new structured `PROJECT_CASE_STUDIES`. |
| Section renderer | `src/components/projects/ProjectContentSections.js` | Consumes the `sections` array and renders `text`, `image`, `imageGrid`, and `placeholder` blocks. |
| Project page | `src/app/projects/[id]/page.js` | Pulls hero + metadata + TOC + sections from the case study entry. |

## Adding a Project (Deep Dive)

1. **Duplicate a card** in `PROJECTS`:
   - Update `id`, `title`, `subtitle`, `image`, and `tags`.
   - Make sure the `id` is URL-friendly; this becomes `/projects/{id}`.

2. **Create the case study entry**:
   - Either call `createCaseStudyTemplate("Name")` (temporary), or copy the Em Dep object and replace its values.
   - Fill `hero`, `details`, `tableOfContents`, and `sections`.

3. **Fill the sections**:
   - Keep the same order (`problem`, `insight`, `design`, `solution`) unless you also update the table of contents.
   - Replace paragraphs/lists/images inside each block. The component handles spacing + typography automatically.
   - Use `lightbox: true` on any image you want to zoom (wireframes, mockups, etc.).

4. **Swap assets**:
   - Place PNG/JPG/SVG files into `/public/images` (or another public folder) and update the `src` paths.
   - Width/height props are optional but recommended—they preserve layout shift.

5. **Verify**:
   - Run `npm run dev`, visit the new route, scroll through, and click each table-of-contents link + lightbox image.

## Block Reference

```ts
type TextBlock = {
  type: "text";
  heading?: string;
  headingVariant?: "xl" | "accent" | "default";
  subheading?: string;
  paragraphs?: string[];
  list?: string[];
  image?: ImageConfig;
  spacing?: string; // e.g., "mt-12", "mb-12"
};

type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lightbox?: boolean;
  spacing?: string;
};

type ImageGridBlock = {
  type: "imageGrid";
  heading?: string;
  headingVariant?: "accent" | "xl" | "default";
  columns?: 1 | 2 | 3;
  gapClass?: string; // optional tailwind class
  images: ImageBlock[];
  spacing?: string;
};

type PlaceholderBlock = {
  type: "placeholder";
  heading?: string;
  headingVariant?: string;
  label?: string;
  heightClass?: string; // default h-[600px]
  spacing?: string;
};
```

> Use `spacing` to match Em Dep spacing exactly (`mb-12`, `mt-12`, etc.). Copy/paste from the Em Dep data whenever you're unsure.

## Workflow Tips

- **Start by copying Em Dep**: Duplicate its `sections` array, paste it under your new ID, and change the copy. That keeps all spacing, headings, and block combinations identical.
- **Table of contents order matters**: The sticky labels + anchor scroll rely on `tableOfContents`. Always keep the `id` value in sync with each section's `id`.
- **One source of truth**: Because everything lives in `src/lib/projects.js`, you never need to touch the React components when adding content.
- **Lightbox vs. static images**: Use `lightbox: true` for screens you want to zoom. Leave it off for simple decorative imagery.

With this setup, adding Project 2–4 is literally copying structured data and swapping assets. No component edits required, and Em Dep remains untouched.
