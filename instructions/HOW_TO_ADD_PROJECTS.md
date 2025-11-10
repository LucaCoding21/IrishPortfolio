# How to Add New Projects (Updated Plug & Play Flow)

The portfolio now treats every case study as structured data. Layout + styling stay identical to the Em Dep build—you only swap copy and media.

## Quick Checklist

1. **Add the project card** to the `PROJECTS` array in `src/lib/projects.js`.
2. **Create the case study entry** inside `PROJECT_CASE_STUDIES` with your content blocks.
3. **Export assets** into `public/images` (or update the paths) so every referenced file exists.
4. **Test `/projects/your-id`** to confirm anchors, media, and lightboxes work.

---

## Step 1 – Project Card Data

Each card powers the homepage grid and static route generation. Add an object that mirrors the existing ones:

```js
{
  id: "your-project-id",           // URL slug + lookup key (keep it lowercase + hyphenated)
  title: "Project Name",
  subtitle: "Role • Company",
  thumb: "/images/your-thumb.png", // optional thumbnail
  image: "/images/your-cover.png", // used for grid + hero fallback
  tags: ["Tag 1", "Tag 2"],
}
```

> Whatever `id` you choose here must match the key you add to `PROJECT_CASE_STUDIES`.

---

## Step 2 – Case Study Payload

Each entry controls the entire detail page: hero, metadata, table of contents, and all sections.

```js
PROJECT_CASE_STUDIES["your-project-id"] = {
  hero: {
    banner: "/images/your-hero.png",      // top hero image
    secondary: "/images/your-mockup.png", // right column mockup
    title: "Your Project Title",
    description: "One-sentence overview",
  },
  details: {
    date: "Jan 2025 - Mar 2025",
    timeline: "10 weeks",
    role: "Product Designer",
    deliverables: ["Brand System", "Responsive Website"],
    tools: ["Figma", "Photoshop"],
  },
  tableOfContents: [
    { number: "01", title: "Problem & Research", id: "problem" },
    { number: "02", title: "Goals", id: "insight" },
    { number: "03", title: "Design Process", id: "design" },
    { number: "04", title: "Results & Impact", id: "solution" },
  ],
  sections: [
    // Detailed blocks live here (see below)
  ],
};
```

### Section Objects

Every section keeps the sticky headline + content pairing used on Em Dep:

```js
{
  id: "problem",               // must match tableOfContents id
  title: "Problem & Research", // sticky left title
  blocks: [ /* ordered blocks */ ],
}
```

### Block Types

| Type | What it does | Key fields |
|------|--------------|------------|
| `text` | Copies the typography used throughout Em Dep. Can optionally render paragraphs, bullet lists, and an image/lightbox stacked underneath. | `heading`, `headingVariant` (`xl`, `accent`, `default`), `subheading`, `paragraphs`, `list`, `image`, `spacing` |
| `image` | Standalone full-width image (with optional lightbox). | `src`, `alt`, `width`, `height`, `lightbox`, `spacing` |
| `imageGrid` | Renders the two-up / stacked grids (mobile view, wireframes, etc.). | `heading`, `headingVariant`, `columns` (`1`, `2`, `3`), `gapClass`, `images[]` |
| `placeholder` | Keeps the desktop video placeholder styling. | `heading`, `headingVariant`, `label`, `heightClass`, `spacing` |

#### Example Block

```js
{
  type: "text",
  heading: "Typography",
  headingVariant: "accent",
  paragraphs: ["Explain why you chose these fonts."],
  image: {
    src: "/images/your-typography.png",
    alt: "Typography preview",
    width: 2385,
    height: 3597,
  },
  spacing: "mt-12",
}
```

> Tip: Copy the Em Dep section array, paste it under your new ID, and replace the copy. That guarantees you keep every spacing class + block order.

---

## Step 3 – Assets + QA

1. Export PNG/JPG assets into `/public/images` (or adjust the paths).
2. Run `npm run dev` and visit `/projects/your-project-id`.
3. Scroll the whole page and verify:
   - Hero + mockup images render.
   - Table of contents jumps hit the right anchors.
   - Lightbox images open.
   - Placeholder blocks got replaced (or intentionally left as-is).

---

## Extras & Utilities

- `createCaseStudyTemplate("Project Name")` (in `src/lib/projects.js`) returns a fully structured placeholder if you want to start from a blank slate.
- `CASE_STUDY_SECTION_TEMPLATE` exports the raw block shape so you can inspect it programmatically.
- Keep IDs consistent (`problem`, `insight`, `design`, `solution`) unless you also update the table of contents and anchor links.
