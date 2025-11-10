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
    id: "foundit",
    title: "FoundIt",
    subtitle: "FoundIt • Product Designer",
    thumb: "/images/foundit-cover.jpg",
    image: "/images/foundit-cover.jpg",
    tags: ["FoundIt", "Product Designer"],
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
  
  // FoundIt project
  "foundit": {
    hero: {
      image: "/images/foundit-cover.jpg",
      title: "FoundIt",
      description: "FoundIt is a digital lost and found platform that uses AI image recognition to help students and staff recover items.",
    },
    details: {
      date: "October 4 - October 5 2025",
      timeline: "24 hours",
      role: "Product Designer",
      deliverables: ["Branding", "High-Fidelity Wireframes", "Interactive Prototype"],
      tools: ["Figma", "Photoshop", "Illustrator"],
    },
    previewImage: "/images/foundit-photo.png",
    tableOfContents: [
      { number: "01", title: "Problem", id: "problem" },
      { number: "02", title: "Goals", id: "goals" },
      { number: "03", title: "Research", id: "research" },
      { number: "04", title: "Design Process", id: "design" },
      { number: "05", title: "Final Solution", id: "solution" },
    ],
    sections: {
      problem: {
        heading: "Problem",
        text: "Students and staff frequently lose items on campus, and traditional lost and found systems are inefficient and time-consuming. There's no easy way to match lost items with their owners using visual recognition.",
      },
      goals: {
        heading: "Goals",
        groups: [
          {
            title: "User Goals",
            items: [
              "Submit lost items in under a minute",
              "Search easily by filter, location, and item",
              "Get notified immediately when there\'s a match",
            ],
          },
          {
            title: "Business Goals",
            items: [
              "Increase online visibility for lost-and-found",
              "Reduce manual follow-ups for campus staff",
              "Stand out with a trustworthy, modern experience",
            ],
          },
        ],
        image: "/images/foundit-goals.png",
      },
      research: {
        heading: "Research",
        subheading: "User Interviews & Market Analysis",
        paragraphs: [
          "I conducted interviews with students and staff to understand their pain points with current lost and found systems. Most reported frustration with having to physically visit multiple locations to search for items.",
          "Market research revealed that AI image recognition technology could significantly improve the matching process and reduce the time to recover lost items.",
        ],
        image: "/images/foundit-research.png",
      },
      insights: {
        heading: "Key Insights",
        text: "Users need a quick, visual way to search for lost items. They want to upload photos of lost items and have the system match them automatically. Trust and ease of use are critical for adoption.",
        image: "/images/foundit-research.png",
      },
      inspirations: {
        heading: "Inspirations",
        text: "I drew inspiration from modern marketplace apps, social media platforms, and AI-powered search interfaces. The goal was to create a design that feels familiar yet innovative.",
        images: ["/images/foundit-research.png", "/images/foundit-goals.png"],
      },
      logoTypography: {
        heading: "Logo & Typography",
        text: "The FoundIt logo uses a modern, friendly sans-serif typeface that conveys approachability and innovation. The design emphasizes clarity and trustworthiness.",
        image: "/images/foundit-goals.png",
      },
      colorPalette: {
        heading: "Color Palette",
        text: "The color palette combines vibrant, energetic colors with calming neutrals to create a sense of optimism and trust. The primary colors help items stand out while maintaining visual hierarchy.",
        image: "/images/foundit-goals.png",
      },
      finalDesign: {
        heading: "Final Design",
        text: "The final design successfully combines AI technology with an intuitive user interface. Users can easily report lost items, search using photos, and connect with item owners through a streamlined process.",
        images: ["/images/foundit-cover.jpg", "/images/foundit-photo.png"],
      },
    },
  },
  
  "project-3": {
    // Copy structure from project-2...
  },
  
  "project-4": {
    // Copy structure from project-2...
  },
};

