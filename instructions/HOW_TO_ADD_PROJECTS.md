# How to Add New Projects - Super Easy Guide

This portfolio is designed to make adding new project case studies incredibly simple. You just need to edit **ONE file** with your content!

## Quick Start - Add a New Project in 3 Steps

### Step 1: Add Basic Project Info to `src/lib/projects.js`

Find the `PROJECTS` array and add your project:

```javascript
{
  id: "your-project-id",  // Must be unique and URL-friendly
  title: "Your Project Name",
  subtitle: "Your Role • Company",
  thumb: "/images/your-thumbnail.png",  // Grid thumbnail image
  image: "/images/your-preview.png",    // Preview image
  tags: ["Tag 1", "Tag 2"],
}
```

### Step 2: Add Case Study Data to `PROJECT_CASE_STUDIES`

In the same file (`src/lib/projects.js`), add your case study data:

```javascript
"your-project-id": {
  // Hero Section (Top of page)
  hero: {
    image: "/images/your-hero-image.png",
    title: "Your Project Title",
    description: "Brief description of the project...",
  },

  // Project Details (Metadata box)
  details: {
    date: "Month Year - Month Year",
    timeline: "X months",
    role: "Your Role Here",
    deliverables: ["Deliverable 1", "Deliverable 2"],
    tools: ["Figma", "Photoshop", etc...],
  },

  // Preview Image (Shown in details card)
  previewImage: "/images/your-preview.png",

  // Table of Contents (Customize sections)
  tableOfContents: [
    { number: "01", title: "Problem & Research", id: "problem" },
    { number: "02", title: "Insight & Goals", id: "insight" },
    { number: "03", title: "Design Process", id: "design" },
    { number: "04", title: "Final Solution", id: "solution" },
  ],

  // Case Study Sections - THIS IS WHERE YOUR CONTENT GOES!
  sections: {
    // Section 1: Problem
    problem: {
      heading: "Problem",
      text: "Your problem statement...",
      image: "/images/problem-image.png",
    },

    // Section 2: Research
    research: {
      heading: "Research",
      subheading: "Competitive Analysis & Interview",  // Optional green subheading
      paragraphs: [
        "First paragraph of research...",
        "Second paragraph..."
      ],
      image: "/images/research-image.png",
    },

    // Section 3: Key Insights
    insights: {
      heading: "Key Insights",
      text: "Your insights...",
      image: "/images/insights-image.png",
    },

    // Section 4: Goals (with bullet list)
    goals: {
      heading: "Goals",
      list: [
        "Goal number 1",
        "Goal number 2",
        "Goal number 3"
      ],
    },

    // Section 5: Inspirations (with 2 images side by side)
    inspirations: {
      heading: "Inspirations",
      text: "Your inspiration text...",
      images: ["/images/inspo-1.png", "/images/inspo-2.png"],
    },

    // Section 6: Logo & Typography
    logoTypography: {
      heading: "Logo & Typography",
      text: "Your logo/typography description...",
      image: "/images/logo-typo.png",
    },

    // Section 7: Color Palette
    colorPalette: {
      heading: "Color Palette",
      text: "Your color palette description...",
      image: "/images/colors.png",
    },

    // Section 8: Final Design (with 2 images stacked)
    finalDesign: {
      heading: "Final Design",
      text: "Your final design description...",
      images: ["/images/final-1.png", "/images/final-2.png"],
    },
  },
}
```

### Step 3: That's It!

Your new project will automatically:

- ✅ Show up on the homepage grid
- ✅ Have its own detail page at `/projects/your-project-id`
- ✅ Use the same beautiful design template
- ✅ Include sticky section navigation
- ✅ Have premium animations

## Content Options Reference

### Section Types You Can Use:

#### Simple Section (text + image)

```javascript
sectionName: {
  heading: "Heading Here",
  text: "Your text content...",
  image: "/images/your-image.png",
}
```

#### Section with Subheading (green)

```javascript
sectionName: {
  heading: "Main Heading",
  subheading: "Green Subheading",  // This will be green!
  paragraphs: ["Paragraph 1...", "Paragraph 2..."],
  image: "/images/your-image.png",
}
```

#### Section with Bullet List

```javascript
sectionName: {
  heading: "Heading",
  list: [
    "Bullet point 1",
    "Bullet point 2"
  ],
}
```

#### Section with Multiple Images (side by side)

```javascript
sectionName: {
  heading: "Heading",
  text: "Description...",
  images: ["/images/img1.png", "/images/img2.png"],  // 2 images = side by side
}
```

#### Section with Multiple Images (stacked)

```javascript
sectionName: {
  heading: "Heading",
  text: "Description...",
  images: ["/images/img1.png", "/images/img2.png"],  // Will stack vertically
}
```

## Customizing Table of Contents

You can have 2-6 sections. Just adjust the `tableOfContents` array:

```javascript
tableOfContents: [
  { number: "01", title: "Your Section Title", id: "problem" },
  { number: "02", title: "Another Section", id: "research" },
  // Add more as needed...
],
```

The `id` should match the section key in your `sections` object!

## Typography Reference

The template automatically uses:

- **Sticky Titles**: Darker Grotesque, 25px, #959494
- **Section Headings**: Figtree, 25px, Black
- **Green Subheadings**: Figtree, 25px, #4A7C59
- **Body Text**: Darker Grotesque, 25px, Black

Everything is already styled perfectly!

## Tips

1. **Images**: Put all your images in `/public/images/` folder
2. **Image paths**: Always start with `/images/...`
3. **Consistency**: Try to keep similar structure across all 4 projects
4. **IDs**: Use lowercase with hyphens (e.g., "my-project-name")
5. **Copy Template**: Use the "project-2" template as a starting point

## Need Help?

The current working example is `"emdep"` in `PROJECT_CASE_STUDIES`. Copy its structure for your new projects!



