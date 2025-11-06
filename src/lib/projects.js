export const PROJECTS = [
  {
    id: "emdep",
    title: "Em Dep Aesthetics",
    subtitle: "Brand & Web Developer",
    thumb: "/images/hero-bg.png",
    image: "/images/hero-bg.png",
    tags: ["Em Dep Aesthetics", "Brand & Web Developer"],
  },
  {
    id: "project-2",
    title: "Project 2",
    subtitle: "Foundti • Product Designer",
    thumb: "/images/hero-bg.png",
    image: "/images/hero-bg.png",
    tags: ["Foundti", "Product Designer"],
  },
  {
    id: "project-3",
    title: "Project 3",
    subtitle: "Foundti • Product Designer",
    thumb: "/images/hero-bg.png",
    image: "/images/hero-bg.png",
    tags: ["Foundti", "Product Designer"],
  },
  {
    id: "project-4",
    title: "Project 4",
    subtitle: "Foundti • Product Designer",
    thumb: "/images/hero-bg.png",
    image: "/images/hero-bg.png",
    tags: ["Foundti", "Product Designer"],
  },
];

// Project case study data - Easy to add/edit for each project
export const PROJECT_CASE_STUDIES = {
  "emdep": {
    // Hero section data
    hero: {
      image: "/images/hero-bg.png",
      title: "Em Dep Aesthetics",
      description: "Em Dep Aesthetics is a Vancouver based beauty studio specialized in professional cosmetic and skincare services.",
    },
    
    // Project details metadata
    details: {
      date: "Sept 2024 - Nov 2024",
      timeline: "3 months",
      role: "Brand & Web Designer",
      deliverables: ["Brand Identity", "Responsive Website"],
      tools: ["Figma", "Photoshop", "Illustrator", "Canva", "WordPress"],
    },
    
    // Preview image
    previewImage: "/images/hero-bg.png",
    
    // Table of contents (automatically generated from sections)
    tableOfContents: [
      { number: "01", title: "Problem & Research", id: "problem" },
      { number: "02", title: "Goals", id: "insight" },
      { number: "03", title: "Design Process", id: "design" },
      { number: "04", title: "Final Solution", id: "solution" },
    ],
    
    // Case study sections - This is where you customize content per project!
    sections: {
      problem: {
        heading: "Problem",
        text: "Em Dep Aesthetics relied on social media and a booking link, but this setup didn't reflect its brand identity or provide enough information about the business.",
        image: "/images/emdep-problem.png",
      },
      research: {
        heading: "Research",
        subheading: "Competitive Analysis & Interview",
        paragraphs: [
          "I reviewed local competitors to identify effective design elements for beauty websites and interviewed the my client to understand her brand values. She wanted a clean, minimalist site that felt modern and professional.",
          "Combining her vision with my research guided the overall design direction.",
        ],
        image: "/images/hero-bg.png",
      },
      insights: {
        heading: "Key Insights",
        text: "Based on trust, clarity, and professionalism, users want to feel secure and informed before booking treatments. Simple navigation and clear service info are needed to convert visitors into clients.",
        image: "/images/hero-bg.png",
      },
      goals: {
        heading: "Goals",
        list: [
          "Create a clean, modern website that reflects the brand's professionalism",
          "Make it easy for users to understand services and book appointments",
          "Build trust through clear information and testimonials",
          "Ensure the site is responsive and works seamlessly on all devices",
        ],
      },
      inspirations: {
        heading: "Inspirations",
        text: "I drew inspiration from luxury spa websites, high-end fashion brands, and modern wellness platforms. The goal was to create a design that feels both calming and sophisticated.",
        images: ["/images/hero-bg.png", "/images/hero-bg.png"],
      },
      logoTypography: {
        heading: "Logo & Typography",
        text: "The logo design combines modern minimalism with elegant serif typography. I chose a clean, sophisticated font that reflects the premium nature of the services.",
        image: "/images/hero-bg.png",
      },
      colorPalette: {
        heading: "Color Palette",
        text: "The color palette was carefully selected to evoke feelings of calm, luxury, and trustworthiness. Soft neutrals combined with subtle accent colors create a harmonious atmosphere.",
        image: "/images/hero-bg.png",
      },
      finalDesign: {
        heading: "Final Design",
        text: "The final website design successfully merges aesthetics with functionality. Each page is carefully crafted to guide users through their journey, from discovering services to booking appointments.",
        images: ["/images/hero-bg.png", "/images/hero-bg.png"],
      },
    },
  },
  
  // Template for new projects - just copy and fill in!
  "project-2": {
    hero: {
      image: "/images/hero-bg.png",
      title: "Project 2 Title",
      description: "Project 2 description goes here.",
    },
    details: {
      date: "Month Year - Month Year",
      timeline: "X months",
      role: "Your Role",
      deliverables: ["Deliverable 1", "Deliverable 2"],
      tools: ["Tool 1", "Tool 2"],
    },
    previewImage: "/images/hero-bg.png",
    tableOfContents: [
      { number: "01", title: "Problem & Research", id: "problem" },
      { number: "02", title: "Insight & Goals", id: "insight" },
      { number: "03", title: "Design Process", id: "design" },
      { number: "04", title: "Final Solution", id: "solution" },
    ],
    sections: {
      problem: {
        heading: "Problem",
        text: "Your problem statement here...",
        image: "/images/hero-bg.png",
      },
      // Add more sections as needed...
    },
  },
  
  "project-3": {
    // Copy structure from project-2...
  },
  
  "project-4": {
    // Copy structure from project-2...
  },
};

