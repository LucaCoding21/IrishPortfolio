export const PROJECTS = [
  {
    id: "fitcheck",
    title: "FitCheck",
    subtitle: "Personal Outfit Planning Platform",
    thumb: "/images/FitCheck-viewCover.png",
    image: "/images/FitCheck-viewCover.png",
    tags: ["FitCheck", "Product Designer"],
  },
  {
    id: "foundit",
    title: "Foundit",
    subtitle: "Digital lost & found for campuses",
    thumb: "/images/foundit-viewcover.png",
    image: "/images/foundit-viewcover.png",
    tags: ["Foundit", "Product Designer"],
  },
  {
    id: "emdep",
    title: "Em Dep Aesthetics",
    subtitle: "Brand & Web Developer",
    thumb: "/images/emdep-mockup1.png",
    image: "/images/emdep-mockup1.png",
    tags: ["Em Dep Aesthetics", "Brand & Web Developer"],
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

const FOUNDIT_TABLE_OF_CONTENTS = [
  { number: "01", title: "Problem", id: "problem" },
  { number: "02", title: "Goals", id: "goals" },
  { number: "03", title: "Research & Design Process", id: "research" },
  { number: "04", title: "Final Solution", id: "solution" },
];

const [
  founditBaseProblemResearchSection,
  ,
  founditBaseDesignSection,
  founditBaseSolutionSection,
] = createSectionTemplate("Foundit");

const [founditBaseProblemBlock, founditBaseResearchBlock] =
  founditBaseProblemResearchSection.blocks;

const founditDesignBlocks = [
  {
    ...founditBaseDesignSection.blocks[0],
    heading: "Brand Identity Design",
    headingVariant: "accent",
    paragraphs: [
      "The Foundit brand was designed to feel trustworthy and approachable which is perfect for helping students and staff reconnect with their belongings. The system combines a simple logo, clear typography and a calm colour palette.",
    ],
  },
  {
    type: "image",
    src: "/images/foundit-design.png",
    alt: "Foundit brand identity overview",
    width: 1590,
    height: 3284,
    spacing: "mt-12",
    lightbox: true,
  },
  {
    type: "text",
    heading: "User Personas & User Flows",
    headingVariant: "accent",
    paragraphs: [
      "After identifying my user personas by using an online tool and through the interviews, I mapped out the user flows for both students and staff to help design the features that mattered most:",
    ],
    list: [
      "Quick reporting for students",
      "Organized tracking and verification tools for security staff",
    ],
    spacing: "mt-12",
  },
  {
    type: "image",
    src: "/images/foundit-persona.png",
    alt: "Foundit user personas",
    width: 2379,
    height: 1653,
    spacing: "mt-12",
    lightbox: true,
  },
  {
    type: "image",
    src: "/images/flow1.png",
    alt: "Security guard flow",
    width: 2385,
    height: 2724,
    spacing: "mt-12",
    lightbox: true,
  },
  {
    type: "image",
    src: "/images/flow2.png",
    alt: "Student flow",
    width: 2385,
    height: 2724,
    spacing: "mt-12",
    lightbox: true,
  },
  {
    type: "text",
    heading: "Wireframes",
    headingVariant: "accent",
    paragraphs: [
      "I designed low-fidelity wireframes to outline main interactions and structure. It was used to help reduct friction to ensure non technical users such as staffs can use the app effortlessly.",
    ],
    spacing: "mt-12",
  },
  {
    type: "text",
    heading: "Admin",
    headingVariant: "accent",
    spacing: "mt-12",
  },
  {
    type: "image",
    src: "/images/admin-wireframe.png",
    alt: "Admin wireframes",
    width: 1590,
    height: 4774,
    spacing: "mt-6",
    lightbox: true,
  },
  {
    type: "text",
    heading: "Student",
    headingVariant: "accent",
    spacing: "mt-12",
  },
  {
    type: "image",
    src: "/images/student-wireframe.png",
    alt: "Student wireframes",
    width: 2385,
    height: 6078,
    spacing: "mt-6",
    lightbox: true,
  },
  {
    type: "text",
    paragraphs: [
      "We integrated AI assistance to speed up submissions for both users:",
    ],
    list: [
      "it could autofill item details from photos or text for students and suggest matching reports for staff to reduce manual verification.",
    ],
    spacing: "mt-12",
  },
  {
    type: "text",
    paragraphs: [
      "Through testing, I also condensed the multi step form into a single page and built an admin dashboard for security guards to manage claims, verify ownership, and mark items as returned.",
    ],
    spacing: "mt-8",
  },
];

const founditFinalSolutionBlocks = [
  {
    ...founditBaseSolutionSection.blocks[0],
    heading: "Final Solution",
    paragraphs: [
      "Foundit transformed the outdated lost and found process into a modern web app for universities. Once it relied on handwritten logs and calls to an intuitive online platform tool that makes reporting and recovering lost items faster and easier.",
    ],
  },
  {
    type: "text",
    heading: "Key Improvements",
    headingVariant: "accent",
    list: [
      "Handwritten logs → Digital reporting dashboard",
      "Email-based claims → Structured tracking interface",
      "Unclear ownership → Photo-based verification",
    ],
    spacing: "mt-12",
  },
  {
    type: "text",
    heading: "Deliverables includes:",
    headingVariant: "accent",
    paragraphs: [
      "Despite the 24 hour timeframe, our team designed and coded a working prototype",
    ],
    list: [
      "UI Screens: Reporting form, search results, and staff dashboard",
      "Design System: Color palette, typography, logo, and reusable components",
      "High-Fidelity Prototype: Complete user journey for both student and staff roles",
    ],
    spacing: "mt-12",
  },
  {
    type: "text",
    heading: "Reflection",
    headingVariant: "accent",
    paragraphs: [
      "Through this project, I learned how to speed up the research process using AI tools while still valuing real world insights.",
      "I also learned how to communicate effectively with my team and identify what helps streamline the design process to complete the project on time.",
      "Other than that, I also learned that it is important to fuel yourself with healthy snacks and food in order to work an overnight hackathon. Staying awake for more than 24 hours that day made me realize that hackathons are not that easy, but was still a fun event to experience with my team.",
    ],
    spacing: "mt-12",
  },
];

const FOUNDIT_RESEARCH_DESIGN_SECTION = {
  id: "research",
  title: "Research & Design Process",
  blocks: [
    {
      ...founditBaseResearchBlock,
      subheading: undefined,
      paragraphs: [
        "With the tight hackathon timeline, I used a combination of an AI assisted research and real interviews to gather insights efficiently.",
      ],
      spacing: undefined,
    },
    {
      type: "image",
      src: "/images/foundit-research.png",
      alt: "Foundit research overview",
      width: 1620,
      height: 900,
      spacing: "mt-12",
      lightbox: true,
    },
    {
      type: "text",
      paragraphs: [
        "The AI tool used online data to compile on existing lost and found systems, market gaps, user personas, and user flows. This helped speed up the research phase and outline the core pain points.",
        "My team interviewed campus security and custodians who manage the lost and found process. We discovered issues like inconsistent tracking, inefficient listings, and time wasted verifying ownership. Calling the office for lost items also proved ineffective, often causing delays and miscommunication.",
      ],
      spacing: "mt-12",
    },
    ...founditDesignBlocks,
  ],
};

const FOUNDIT_SECTIONS = [
  {
    id: "problem",
    title: "Problem",
    blocks: [
      {
        ...founditBaseProblemBlock,
        paragraphs: [
          "Students often lose personal items like IDs, headphones, and wallets, but the recovery process is slow and unorganized. Without a system, most reports go unanswered, and valuable time is wasted.",
        ],
      },
    ],
  },
  {
    id: "goals",
    title: "Goals",
    blocks: [
      {
        type: "text",
        heading: "Goal",
        headingVariant: "xl",
      },
      {
        type: "text",
        heading: "Student Goals",
        headingVariant: "accent",
        list: [
          "Submit lost items in under a minute",
          "Search easily by filter, location and item",
          "Get notified immediately if there’s a match",
        ],
      },
      {
        type: "text",
        heading: "Campus Security goals",
        headingVariant: "accent",
        list: [
          "Reduce manual sorting",
          "Organize lost items",
          "Improve response time and satisfaction",
        ],
        spacing: "mt-12",
      },
      {
        type: "image",
        src: "/images/foundit-goals.png",
        alt: "Foundit goals overview",
        width: 2385,
        height: 744,
        lightbox: true,
        spacing: "mt-12",
      },
    ],
  },
  {
    ...FOUNDIT_RESEARCH_DESIGN_SECTION,
  },
  {
    ...founditBaseSolutionSection,
    title: "Final Solution",
    blocks: founditFinalSolutionBlocks,
  },
];

export const PROJECT_CASE_STUDIES = {
  emdep: EMDEP_CASE_STUDY,
  foundit: createCaseStudyTemplate("Foundit", {
    hero: {
      banner: "/images/foundit-cover.jpg",
      secondary: "/images/foundit-photo.png",
      description: "move the tags in the bottom instead and include the glass effect again",
    },
    details: {
      date: "October 4 - 5, 2025",
      timeline: "24 hours",
      role: "Product Designer",
      deliverables: [
        "Branding",
        "High-Fidelity Wireframes",
        "Interactive Prototype",
      ],
      tools: ["Figma", "Photoshop", "Illustrator"],
    },
    tableOfContents: FOUNDIT_TABLE_OF_CONTENTS,
    sections: FOUNDIT_SECTIONS,
  }),
  "fitcheck": createCaseStudyTemplate("FitCheck", {
    hero: {
      banner: "/images/fitcheck/FitcheckCover.png",
      secondary: "/images/fitcheck/FitCheck-preview.png",
      description:
        "FitCheck is a social app where friends post daily outfits and rate each other anonymously for fun competition.",
    },
    details: {
      date: "June - September 2025",
      timeline: "3 months",
      role: "Product Designer",
      deliverables: ["Branding", "High-Fidelity Wireframes","App Store Screens"],
      tools: ["Figma", "Photoshop", "Illustrator"],
    },
    tableOfContents: DEFAULT_TABLE_OF_CONTENTS.map((item) => {
      if (item.id === "problem") {
        return { ...item, title: "Problem" };
      }
      if (item.id === "solution") {
        return { ...item, title: "Final Solution" };
      }
      return item;
    }),
    sections: createSectionTemplate("FitCheck").map((section) => {
      if (section.id === "problem") {
        const [problemBlock = {}, ...restBlocks] = section.blocks ?? [];
        const filteredRestBlocks = restBlocks.filter((block) => block.heading !== "Research");
        return {
          ...section,
          title: "Problem",
          blocks: [
            {
              type: "text",
              heading: problemBlock.heading ?? "Problem",
              headingVariant: problemBlock.headingVariant ?? "xl",
              paragraphs: [
                "As we get older, we naturally drift apart from close friends because of busy schedules. To counter this, we wanted to use social media to solve this problem however, the traditional social media is filled with:",
              ],
              spacing: "mb-8",
            },
            {
              type: "text",
              list: [
                "Influencers and not real friends",
                "Pressure to look perfect",
                "Algorithms which buries connections with friends",
              ],
              spacing: "mt-8 mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "Therefore, fashion became our solution. We wanted a simple way for friends to stay present in each other’s daily lives. It’s not about showing off, its about keeping the friendship alive with one outfit at a time.",
              ],
              spacing: "mt-8 mb-8",
            },
            ...filteredRestBlocks,
          ],
        };
      }
      if (section.id === "insight") {
        return {
          ...section,
          title: "Goals",
          blocks: [
            {
              type: "text",
              heading: "Goal",
              headingVariant: "xl",
              paragraphs: ["Build a space where:"],
              spacing: "mb-8",
            },
            {
              type: "text",
              list: [
                "Posting is low pressure and fun",
                "Friends feel seen through engagements",
                "Create micro interaction sparks",
              ],
              spacing: "mb-8",
            },
            {
              type: "image",
              src: "/images/fitcheck/goals-tools.png",
              alt: "FitCheck goals overview",
              width: 1586,
              height: 610,
              spacing: "mt-4 mb-8",
            },
          ],
        };
      }
      if (section.id === "design") {
        return {
          ...section,
          title: "Design Process",
          blocks: [
            {
              type: "text",
              heading: "Research & Insights",
              headingVariant: "xl",
              paragraphs: [
                "To understand how people share fashion and connect online, I conducted user interviews with 12 participants aged 17–25, all of whom actively use social platforms like Instagram, BeReal, and Pinterest. I asked about their posting habits, how they interact with friends content, and what prevents them from posting regularly.",
              ],
              spacing: "mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "A few examples are shown below. This data is important because we wanted FitCheck to feel welcoming and ensure friends can easily post they’re daily outfit without fear of judgement.",
              ],
              spacing: "mb-8",
            },
            {
              type: "image",
              src: "/images/fitcheck/Research-post.png",
              alt: "Research interview takeaways",
              width: 2385,
              height: 1659,
              spacing: "mt-4 mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "Posting shouldn’t feel performative. It should feel fun and low pressure.",
              ],
              spacing: "mt-8",
            },
            {
              type: "text",
              heading: "Design Experiment #1: Reducing Posting Pressure",
              headingVariant: "accent",
              paragraphs: [
                "To help users feel comfortable posting every day, we introduced posting vibes: Chill, Main, and Prompt. This system reduces the pressure to post a “perfect” fit by giving users permission to share outfits that reflect different moods and levels of effort:",
              ],
              spacing: "mt-12",
            },
            {
              type: "text",
              list: [
                "Chill: Everyday looks like sweats, gym clothes, or something quick before class",
                "Main: The fits you feel proud of and want to show off a little",
                "Prompt: A playful nudge for days when you need inspiration or want to try something new",
              ],
              spacing: "mt-6 mb-8",
            },
            {
              type: "image",
              src: "/images/fitcheck/design-screen1.png",
              alt: "Posting vibes design exploration",
              width: 1589,
              height: 1444,
              spacing: "mt-8 mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "Through interviews and usability testing, we validated this idea. Users felt more comfortable posting and were more motivated to show up daily.",
              ],
              spacing: "mt-6 mb-8",
            },
            {
              type: "text",
              heading: "Design Experiment #2: Stickers over likes",
              headingVariant: "accent",
              paragraphs: [
                "With FitCheck, our goal was to make friends feel seen using interactions that are personal and expressive. Instead of relying on the traditional ‘like’ or ‘heart’ buttons, we introduced stickers as a way for friends to react to each other’s fits.",
                "These stickers let users express genuine emotions in a playful way. By removing visible counts and numbers, we encouraged a fun, no pressure engagement that felt more like an inside joke between friends rather than a public performance.",
              ],
              spacing: "mt-12 mb-8",
            },
            {
              type: "image",
              src: "/images/fitcheck/design-screen2.png",
              alt: "Sticker reactions exploration",
              width: 1586,
              height: 1404,
              spacing: "mt-8 mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "I sketched multiple iterations to explore how reactions could feel positive and expressive, I then refined the final four designs in Adobe Illustrator ensuring that it also aligns with FitChecks visual identity.",
              ],
              spacing: "mt-6 mb-8",
            },
            {
              type: "image",
              src: "/images/fitcheck/design-screen3.png",
              alt: "Final FitCheck design mockups",
              width: 1580,
              height: 1872,
              spacing: "mt-8 mb-6",
            },
            {
              type: "text",
              paragraphs: [
                "Once the core features and visuals were finalized, we combined them into the final design.",
              ],
              spacing: "mt-4 mb-8",
            },
          ],
        };
      }
      if (section.id === "solution") {
        const [, ...restBlocks] = section.blocks ?? [];
        return {
          ...section,
          title: "Final Solution",
          blocks: [
            {
              type: "text",
              heading: "Final Design + MVP Iterations",
              headingVariant: "xl",
              paragraphs: [
                "After several rounds of feedback and iteration, the final design focuses on creating a fun way for friends to stay connected through their daily outfits.",
              ],
              spacing: "mb-12",
            },
            {
              type: "text",
              heading: "High-Fidelity MVP",
              headingVariant: "accent",
              paragraphs: [
                "I built the final design on Figma while highlighting a clean and expressive interface on:",
              ],
              spacing: "mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "Post: Snap a photo, choose a vibe and share instantly",
              ],
              highlightedLabel: "Post:",
              spacing: "mb-6",
            },
            {
              type: "text",
              paragraphs: [
                "Feed: See your friends daily outfits",
              ],
              highlightedLabel: "Feed:",
              spacing: "mb-6",
            },
            {
              type: "text",
              paragraphs: [
                "Reactions: Choose stickers to react on friends post",
              ],
              highlightedLabel: "Reactions:",
              spacing: "mb-6",
            },
            {
              type: "text",
              paragraphs: [
                "Rating: Friends rate each fit with fun, anonymous stars",
              ],
              highlightedLabel: "Rating:",
              spacing: "mb-6",
            },
            {
              type: "text",
              paragraphs: [
                "Profile & Archive: Visit gallery full of past fits and track consistency",
              ],
              highlightedLabel: "Profile & Archive:",
              spacing: "mb-12",
            },
            {
              type: "text",
              paragraphs: [
                "Below are the main MVP screens showing final interfaces.",
              ],
              spacing: "mt-12 mb-4",
            },
            {
              type: "image",
              src: "/images/fitcheck/design-screen4.png",
              alt: "High-Fidelity MVP design mockups",
              width: 1586,
              height: 2868,
              spacing: "mt-4",
            },
            {
              type: "text",
              heading: "Results:",
              headingVariant: "accent",
              paragraphs: [
                "FitCheck reached 50+ early users during pilot texting.",
              ],
              spacing: "mt-12 mb-8",
            },
            {
              type: "text",
              list: [
                "85% posted at least three times a week",
                "90% said it helped them stay connected with friends",
                "70% felt less pressure when posting outfits",
              ],
              spacing: "mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "The combination of fit vibes, stickers, and ratings, turned fashion sharing into a casual, daily routine rather than a performance.",
                "The next phase will focus on expanding group features, improving reactions, and launching a public beta to collect more user feedback. We're also exploring weekly highlights and group challenges to strengthen connection and make posting even more fun.",
              ],
              spacing: "mt-8",
            },
            {
              type: "text",
              heading: "Reflection:",
              headingVariant: "accent",
              paragraphs: [
                "This was a summer project built by just two people. I led the UI/UX design, handling everything from user research and wireframing to prototyping and visual design, while my teammate focused on development. Together, we built and tested multiple MVPs to bring FitCheck to life.",
              ],
              spacing: "mt-12 mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "One challenge I faced was finding the right users to test the app. We needed friends who actually cared about fashion and staying connected, not just anyone willing to try it. It taught me how important it is to test with people who truly reflect your target audience.",
                "Testing with the wrong users showed how easily my team and I could go off track and lose sight of the app's original purpose. It was a reminder that good design decisions come from testing with the right audience",
              ],
              spacing: "mb-8",
            },
            {
              type: "text",
              paragraphs: [
                "This experience helped me understand the value of defining clear user criteria early and staying focused on feedback that truly represents our intended users.",
              ],
              spacing: "mt-12",
            },
          ],
        };
      }
      return section;
    }),
  }),
  "project-4": createCaseStudyTemplate("Project 4"),
};

export const CASE_STUDY_SECTION_TEMPLATE = createSectionTemplate();
