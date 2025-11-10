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
    title: "Foundit",
    subtitle: "Digital lost & found for campuses",
    thumb: "/images/foundit-cover.jpg",
    image: "/images/foundit-cover.jpg",
    tags: ["Foundit", "Product Designer"],
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

const DEFAULT_TABLE_OF_CONTENTS = [
  { number: "01", title: "Problem & Research", id: "problem" },
  { number: "02", title: "Goals", id: "insight" },
  { number: "03", title: "Design Process", id: "design" },
  { number: "04", title: "Results & Impact", id: "solution" },
];

const createSectionTemplate = (projectName = "Your Project") => ([
  {
    id: "problem",
    title: "Problem & Research",
    blocks: [
      {
        type: "text",
        heading: "Problem",
        headingVariant: "xl",
        paragraphs: [
          `${projectName} needs a clear problem statement. Summarize the situation in one or two sentences.`,
        ],
        image: {
          src: "/images/hero-bg.png",
          alt: `${projectName} problem visual`,
          width: 1296,
          height: 870,
          lightbox: true,
        },
      },
      {
        type: "text",
        heading: "Research",
        headingVariant: "xl",
        subheading: "Competitive Analysis & Interview",
        paragraphs: [
          `Add 2-3 sentences describing what you learned while researching ${projectName}.`,
          "Use this space to talk about interviews, secondary research, or competitive analysis.",
        ],
      },
    ],
  },
  {
    id: "insight",
    title: "Goals",
    blocks: [
      {
        type: "text",
        heading: "Goal",
        headingVariant: "xl",
        paragraphs: [
          "Share a short high-level goal for the project.",
        ],
      },
      {
        type: "text",
        heading: "User Goals",
        headingVariant: "accent",
        list: [
          "List how users benefit",
          "Make bullets short and scannable",
          "Aim for 3–4 key points",
        ],
      },
      {
        type: "text",
        heading: "Business Goals",
        headingVariant: "accent",
        list: [
          "Explain the outcomes the client/business needs",
          "Tie each goal to impact",
          "Keep bullets short",
        ],
      },
      {
        type: "image",
        src: "/images/hero-bg.png",
        alt: `${projectName} goals visual`,
        width: 795,
        height: 248,
      },
    ],
  },
  {
    id: "design",
    title: "Design Process",
    blocks: [
      {
        type: "text",
        heading: "My Process",
        headingVariant: "xl",
        paragraphs: [
          "Outline the approach you took. Reference mood boards, explorations, or framing work.",
        ],
      },
      {
        type: "image",
        src: "/images/hero-bg.png",
        alt: `${projectName} inspiration`,
        width: 795,
        height: 692,
      },
      {
        type: "text",
        paragraphs: [
          "Add supporting narrative explaining why the visuals look the way they do.",
        ],
      },
      {
        type: "image",
        src: "/images/hero-bg.png",
        alt: `${projectName} secondary inspiration`,
        width: 795,
        height: 598,
      },
      {
        type: "text",
        heading: "Typography",
        headingVariant: "accent",
        paragraphs: [
          "Explain the typography choices and what they support.",
        ],
        image: {
          src: "/images/hero-bg.png",
          alt: `${projectName} typography preview`,
          width: 2385,
          height: 3597,
        },
      },
      {
        type: "text",
        heading: "Color Palette",
        headingVariant: "accent",
        paragraphs: [
          "Describe the color palette rationale.",
        ],
        image: {
          src: "/images/hero-bg.png",
          alt: `${projectName} color palette`,
          width: 795,
          height: 938,
        },
      },
      {
        type: "text",
        heading: "Logo",
        headingVariant: "accent",
        paragraphs: [
          "Explain how the logo supports the brand story.",
        ],
        image: {
          src: "/images/hero-bg.png",
          alt: `${projectName} logo preview`,
          width: 795,
          height: 419,
        },
      },
      {
        type: "text",
        heading: "Website Design + Development",
        headingVariant: "accent",
        paragraphs: [
          "Discuss handoff or build details.",
          "Call out responsive or technical considerations.",
        ],
      },
      {
        type: "placeholder",
        heading: "Desktop View",
        headingVariant: "accent",
        label: "Drop in a desktop screen grab or video",
      },
      {
        type: "imageGrid",
        heading: "Mobile View",
        headingVariant: "accent",
        columns: 2,
        images: [
          {
            src: "/images/hero-bg.png",
            alt: `${projectName} mobile screen 1`,
            width: 400,
            height: 800,
            lightbox: true,
          },
          {
            src: "/images/hero-bg.png",
            alt: `${projectName} mobile screen 2`,
            width: 400,
            height: 800,
            lightbox: true,
          },
        ],
      },
      {
        type: "text",
        heading: "Desktop Low-Fidelity Wireframes",
        headingVariant: "accent",
        paragraphs: [
          "Explain what people should look for in these wires.",
        ],
        image: {
          src: "/images/hero-bg.png",
          alt: `${projectName} low fidelity wires`,
          width: 2385,
          height: 1557,
          lightbox: true,
        },
      },
      {
        type: "imageGrid",
        heading: "Mobile Wireframes",
        headingVariant: "accent",
        columns: 1,
        gapClass: "gap-[37px]",
        images: [
          {
            src: "/images/hero-bg.png",
            alt: `${projectName} mobile low fidelity wires`,
            width: 2385,
            height: 1788,
            lightbox: true,
          },
          {
            src: "/images/hero-bg.png",
            alt: `${projectName} mobile high fidelity wires`,
            width: 2385,
            height: 1788,
            lightbox: true,
          },
        ],
      },
    ],
  },
  {
    id: "solution",
    title: "Results & Impact",
    blocks: [
      {
        type: "text",
        heading: "Results & Impact",
        headingVariant: "xl",
        paragraphs: [
          "Summarize the outcome.",
        ],
      },
      {
        type: "text",
        heading: "After Launch",
        headingVariant: "accent",
        list: [
          "Share outcome 1",
          "Share outcome 2",
          "Share outcome 3",
        ],
      },
      {
        type: "text",
        heading: "Reflection",
        headingVariant: "accent",
        paragraphs: [
          "Call out what you learned.",
        ],
        list: [
          "Lesson 1",
          "Lesson 2",
          "Lesson 3",
        ],
      },
    ],
  },
]);

const createCaseStudyTemplate = (projectName, overrides = {}) => ({
  hero: {
    banner: "/images/hero-bg.png",
    secondary: "/images/hero-bg.png",
    title: projectName,
    description: `Add a short overview for ${projectName}.`,
    ...overrides.hero,
  },
  details: {
    date: "Month 0000 - Month 0000",
    timeline: "0 months",
    role: "Role",
    deliverables: ["Deliverable 1", "Deliverable 2"],
    tools: ["Figma"],
    ...overrides.details,
  },
  tableOfContents: overrides.tableOfContents ?? DEFAULT_TABLE_OF_CONTENTS,
  sections: overrides.sections ?? createSectionTemplate(projectName),
});

const EMDEP_CASE_STUDY = {
  hero: {
    banner: "/images/emdep-mockup1.png",
    secondary: "/images/emdep-mockup2.png",
    title: "Em Dep Aesthetics",
    description:
      "Em Dep Aesthetics is a Vancouver based beauty studio specialized in professional cosmetic and skincare services.",
  },
  details: {
    date: "Sept 2024 - Nov 2024",
    timeline: "3 months",
    role: "Brand & Web Designer",
    deliverables: ["Brand Identity", "Responsive Website"],
    tools: ["Figma", "Photoshop", "Illustrator", "Canva", "WordPress"],
  },
  tableOfContents: DEFAULT_TABLE_OF_CONTENTS,
  sections: [
    {
      id: "problem",
      title: "Problem & Research",
      blocks: [
        {
          type: "text",
          heading: "Problem",
          headingVariant: "xl",
          paragraphs: [
            "Em Dep Aesthetics relied on social media and a booking link, but this setup didn't reflect its brand identity or provide enough information about the business.",
          ],
          image: {
            src: "/images/emdep-problem.png",
            alt: "Problem illustration",
            width: 1296,
            height: 870,
            lightbox: true,
          },
          spacing: "mb-12",
        },
        {
          type: "text",
          heading: "Research",
          headingVariant: "xl",
          subheading: "Competitive Analysis & Interview",
          paragraphs: [
            "I reviewed local competitors to identify effective design elements for beauty websites and interviewed the my client to understand her brand values. She wanted a clean, minimalist site that felt modern and professional.",
            "Combining her vision with my research guided the overall design direction.",
          ],
          spacing: "mt-12",
        },
      ],
    },
    {
      id: "insight",
      title: "Goals",
      blocks: [
        {
          type: "text",
          heading: "Goal",
          headingVariant: "xl",
        },
        {
          type: "text",
          heading: "User Goals",
          headingVariant: "accent",
          list: [
            "Understand services & pricing quickly",
            "Understand quality of care",
            "Book appointments without friction",
          ],
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Business goals",
          headingVariant: "accent",
          list: [
            "Increase online visibility",
            "Reduce DM workload on owner",
            "Modern brand and website to standout in marker",
          ],
          spacing: "mt-12",
        },
        {
          type: "image",
          src: "/images/emdep-goal-tools.png",
          alt: "Goals and Tools",
          width: 795,
          height: 248,
          spacing: "mt-12",
        },
      ],
    },
    {
      id: "design",
      title: "Design Process",
      blocks: [
        {
          type: "text",
          heading: "My Process",
          headingVariant: "xl",
          paragraphs: [
            "I created a mood board from Pinterest and Cosmos website to gather inspirations.",
          ],
          spacing: "mb-12",
        },
        {
          type: "image",
          src: "/images/emdep-inspo2.png",
          alt: "Inspiration 1",
          width: 795,
          height: 692,
          spacing: "mb-12",
        },
        {
          type: "text",
          paragraphs: [
            "With a minimalist design in mind, I explored clean layouts from different websites and put them together like puzzle pieces to create the right vision.",
          ],
        },
        {
          type: "image",
          src: "/images/emdep-inspo1.png",
          alt: "Inspiration 2",
          width: 795,
          height: 598,
          spacing: "mb-12",
        },
        {
          type: "text",
          heading: "Typography",
          headingVariant: "accent",
          paragraphs: [
            "With the typography, I wanted to incorporate a clean, modern and elegant look just like what the client has requested.",
          ],
          image: {
            src: "/images/emdep-typography.png",
            alt: "Typography",
            width: 2385,
            height: 3597,
          },
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Color Palette",
          headingVariant: "accent",
          paragraphs: [
            "I chose these colours to give a sense of calm, yet timeless feeling to support that modern and elegant look.",
          ],
          image: {
            src: "/images/emdep-colourpalette.png",
            alt: "Color Palette",
            width: 795,
            height: 938,
          },
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Logo",
          headingVariant: "accent",
          paragraphs: [
            "The Em Dep logo was designed to reflect the brand's clean, modern, and professional identity. Its minimalist form and elegant typography convey beauty and trust to portray Em Deps beauty services. To the brand identity separately, click here",
          ],
          image: {
            src: "/images/emdep-logoprev.png",
            alt: "Logo Preview",
            width: 795,
            height: 419,
          },
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Website Design + Development",
          headingVariant: "accent",
          paragraphs: [
            "Using the mood board as a foundation, I followed the same modern visual direction and designed the experience mobile first in Figma. I then built the website in WordPress using Blocksy and Kadence, which allowed me to work more efficiently through their pre-made layout components.",
            "I also implemented SEO best practices which included optimized headings, alt text, metadata, and fast load performance in order to improve discoverability and help the studio attract new customers organically.",
          ],
          spacing: "mt-12",
        },
        {
          type: "placeholder",
          heading: "Desktop View",
          headingVariant: "accent",
          label: "Video placeholder",
          spacing: "mt-12",
        },
        {
          type: "imageGrid",
          heading: "Mobile View",
          headingVariant: "accent",
          columns: 2,
          images: [
            {
              src: "/images/hero-bg.png",
              alt: "Mobile View 1",
              width: 400,
              height: 800,
              lightbox: true,
            },
            {
              src: "/images/hero-bg.png",
              alt: "Mobile View 2",
              width: 400,
              height: 800,
              lightbox: true,
            },
          ],
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Desktop Low-Fidelity Wireframes",
          headingVariant: "accent",
          paragraphs: [
            "Check out the wireframes here",
          ],
          image: {
            src: "/images/emdep-lowfid-desktop.png",
            alt: "Desktop Low-Fidelity Wireframes",
            width: 2385,
            height: 1557,
            lightbox: true,
          },
          spacing: "mt-12",
        },
        {
          type: "imageGrid",
          heading: "Mobile Wireframes",
          headingVariant: "accent",
          columns: 1,
          gapClass: "gap-[37px]",
          images: [
            {
              src: "/images/emdep-lowfid-mobile.png",
              alt: "Mobile Low-Fidelity Wireframes",
              width: 2385,
              height: 1788,
              lightbox: true,
            },
            {
              src: "/images/emdep-highfid-mobile.png",
              alt: "Mobile High-Fidelity Wireframes",
              width: 2385,
              height: 1788,
              lightbox: true,
            },
          ],
          spacing: "mt-12",
        },
      ],
    },
    {
      id: "solution",
      title: "Results & Impact",
      blocks: [
        {
          type: "text",
          heading: "Results & Impact",
          headingVariant: "xl",
          spacing: "mb-12",
        },
        {
          type: "text",
          heading: "After Launch",
          headingVariant: "accent",
          list: [
            "Clients found key information much faster",
            "Fewer DM's and tasks for the owner",
            "Brand increased trust",
            "New customers online",
            "Bookings are generated organically",
          ],
          spacing: "mt-12",
        },
        {
          type: "text",
          heading: "Reflection",
          headingVariant: "accent",
          paragraphs: [
            "As my first client project, I learned many lessons that will carry forward into future work:",
          ],
          list: [
            "Businesses don't always have time for frequent communication, so it's best to clarify all key details early on.",
            "I learned how to manage my time effectively over the 2.5 month project period by planning and organizing my workflow using tools like Notion and Google Calendar.",
            "I used real data to identify what was working and what wasn't, allowing me to continuously improve the website.",
          ],
          spacing: "mt-12",
        },
      ],
    },
  ],
};

export const PROJECT_CASE_STUDIES = {
  emdep: EMDEP_CASE_STUDY,
  foundit: createCaseStudyTemplate("Foundit", {
    hero: {
      banner: "/images/foundit-cover.jpg",
      secondary: "/images/foundit-photo.png",
      description: "A digital lost & found for campuses.",
    },
  }),
  "project-3": createCaseStudyTemplate("Project 3"),
  "project-4": createCaseStudyTemplate("Project 4"),
};

export const CASE_STUDY_SECTION_TEMPLATE = createSectionTemplate();
