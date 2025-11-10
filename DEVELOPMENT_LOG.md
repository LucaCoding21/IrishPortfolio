# Development Log - iclaire Portfolio

## Project Overview

Building a portfolio website with Irish/Celtic theme for iclaire using Next.js, Tailwind CSS, and Framer Motion.

---

## October 15, 2025

### Initial Setup ✓

- Created Next.js 15 project with App Router
- Configured JavaScript (instead of TypeScript per user preference)
- Set up Tailwind CSS with custom theme tokens
- Installed Framer Motion for animations

### Project Structure ✓

Created the following folder structure:

```
src/
  app/
    layout.js
    page.js
    globals.css
  components/
    layout/
      Navbar.js
      Footer.js
      Container.js
    hero/
      Hero.js
      TriangleMask.js
    projects/
      Projects.js
      EmdepFrame.js
      ProjectCard.js
    sections/
      About.js
      Contact.js
    ui/
      SectionHeading.js
  lib/
    cn.js
    projects.js
```

### Features Implemented ✓

#### 1. Hero Section with Triangle Flashlight Effect

- Implemented custom SVG mask that creates a triangle cutout
- Triangle follows cursor position with smooth spring animation
- Reveals Irish landscape background image through the triangle
- Dark overlay covers rest of the hero section
- Smooth animations using Framer Motion springs

#### 2. Navigation & Layout

- Sticky navbar with backdrop blur effect
- "iclaire" branding in navbar
- Works, About, Contact navigation links
- Footer with social media icons (LinkedIn, GitHub, Email)
- "made with love & care" footer text

#### 3. Projects Section

- Grid layout with large preview frame (EmdepFrame) on left
- Smaller project cards on right side
- Clicking a project card swaps the main preview image
- Shows project tags (Foundti, Product Designer)
- Three placeholder projects: Emdep Aesthetics, Project Two, Project Three

#### 4. About Section

- Clover-shaped image element (Irish theme)
- Skills section with icon placeholders
- "Behind the Screen" subsection with two portrait images
- "Let's Chat!" call-to-action with rounded background
- Social media links integrated

#### 5. Contact Section

- Split layout with content on left, image on right
- Curved edge on image (rounded-l-[50%])
- Large social media icon links
- Contact heading and description text

### Theme & Styling ✓

- Dark color scheme (bg: #0B0B0C)
- Custom colors for text (fg: #F5F7FA, muted: #9AA2B1)
- Irish/Celtic inspired with green landscape imagery
- Smooth transitions and hover states
- No flashy animations (per user preference)
- Clean, minimal design aesthetic

### Assets ✓

- Created placeholder images for all sections
- Images directory structure organized
- README.md in images folder documenting requirements
- All images using Irish landscape green color palette
- **Updated**: Added real hero images (hero-bg.png and hero-after.png)
  - Triangle reveals hero-after.png (with flowers) over hero-bg.png base
  - **Updated**: Clover mask rotated 45 degrees to match reference design
  - Petals now positioned diagonally (diamond orientation)
  - Changed to ellipse-based petals for more heart-shaped appearance

---

## October 15, 2025 (Evening Update)

### Design Mockup Implementation ✓

**Updated homepage to match provided design mockup:**

1. **Hero Section Updates**

   - Moved "Lorem ipsum" text to center as main hero heading
   - Repositioned social icons and "made with love & care" to bottom of hero
   - **Changed cursor reveal to four-leaf clover shape** (was triangle)
   - Cursor positioned at center of clover with 4 heart-shaped petals revealing hero-after.png
   - Clover shape matches Irish theme perfectly

2. **Projects Section Redesign**

   - Changed to white background
   - Split into large card (left) and small cards (right)
   - Large card: Beige background with "Em Dep Aesthetics" + "Brand & Web Developer" tags
   - Small cards: Landscape images with "Foundti" + "Product Designer" tags overlay
   - Added placeholder text where images don't exist yet
   - Removed interactive swapping (now static display)

3. **New "Let's Chat!" Section**

   - Replaced About and Contact sections
   - Two-column layout with text on left, clover image placeholder on right
   - Social media icons included
   - Simple, clean design matching mockup

4. **Footer Simplification**

   - Centered "made with love & care ❤️" text only
   - Social icons moved to hero section

5. **Placeholder Strategy**
   - Where images don't exist: shows gray box with text "Add [type] image"
   - Clear instructions for what each placeholder needs
   - Easy to replace with actual images later

---

## October 15, 2025 (Late Update)

### Full-Page Scroll Snap ✓

**Implemented native CSS Scroll Snap for smooth section navigation:**

1. **Scroll Container**

   - Main element now has `snap-y snap-mandatory` for vertical snapping
   - `overflow-y-scroll` enables scrolling with snap behavior
   - Each section takes full viewport height (`h-screen`)

2. **Section Snapping**

   - All three sections (Hero, Projects, LetsChat) snap to viewport
   - Used `snap-start snap-always` for precise alignment
   - Users cannot be stuck between sections - smooth transitions
   - Native browser feature - no JavaScript plugins needed

3. **Content Centering**

   - Projects and LetsChat sections use `flex items-center`
   - Content vertically centered within each full-page section
   - Maintains visual balance across all sections

4. **Technical Approach**
   - Simple, non-overengineered solution using CSS only
   - No external dependencies or plugins
   - Performant and works across all modern browsers
   - Fast snap transitions with `scroll-behavior: auto`

### Projects Section Redesign ✓

**Updated Focused Projects to match design mockup exactly:**

1. **Header Layout**

   - "Focused Projects" heading and description now side-by-side
   - Larger heading size (text-5xl)
   - Description text-left aligned on right side
   - More spacing between header and cards (mb-16)

2. **Large Card (Left)**

   - More rounded corners (rounded-3xl)
   - Increased padding (p-10)
   - Tags with subtle borders and semi-transparent white backgrounds
   - Flexbox layout for proper content centering
   - Placeholder text guides for mockup images

3. **Small Cards (Right)**
   - More rounded corners (rounded-3xl)
   - Both tags now styled with black backgrounds and white text
   - Larger tags with better padding
   - Positioned at top-6 left-6 for consistency
   - Gradient placeholder backgrounds for visual interest

---

## October 16, 2025

### Navbar Pill Transformation ✓

**Implemented reference navbar that transforms based on section:**

1. **Intersection Observer Detection**

   - Uses IntersectionObserver to detect when user leaves Hero section
   - Single state tracking (`isOverHero`) for clean logic
   - Uses rootMargin offset for precise trigger timing
   - Smooth state transitions between normal and pill modes

2. **Normal Navbar (Hero Section)**

   - Full-width transparent background
   - Shows "iclaire" branding on left
   - Navigation links: Works, Contact
   - Light text color (text-fg) for dark hero background

3. **Pill-Style Reference Nav (All Other Sections)**

   - Transforms into centered pill with rounded-full styling
   - White background with shadow-lg for depth
   - Positioned at top-8 with center alignment (left-1/2 -translate-x-1/2)
   - Compact design with clover icon + navigation links
   - Navigation links: Home, Works, Contact
   - No "iclaire" branding (saves space in compact mode)

4. **Clover Icon Placeholder**

   - Added placeholder clover icon on left side of pill
   - Green circular background with shamrock emoji (temporary)
   - Ready to be replaced with actual PNG when provided
   - Icon positioned before navigation links

5. **Technical Implementation**

   - Conditional rendering: pill mode when `isOverHero` is false
   - Added id="hero" to hero section for anchor navigation
   - Section IDs: #hero, #projects, #about, #contact

6. **Framer Motion Animations**

   - Used AnimatePresence for smooth transitions between navbar states
   - Pill nav: slides down from top with scale and bounce effect
   - Custom easing curve [0.34, 1.56, 0.64, 1] for subtle bounce
   - Clover icon spins in with spring animation (rotate -180 to 0)
   - Staggered animations for navigation links (50ms delay between each)
   - Normal nav: fades in with "iclaire" sliding from left
   - Spring physics for natural, smooth movements
   - All animations tuned for polish without being flashy

7. **Navigation Links Update (Matched Figma Design)**

   - Updated navigation links to: Works, About, Contact
   - Both normal and pill nav show the same three links
   - Works links to #projects section
   - About and Contact both link to "Let's Chat" section
   - Added dual anchor IDs (about/contact) to LetsChat section

---

## October 17, 2025

### Project Details Page Implementation ✓

**Created dynamic project detail pages with full case study layout:**

1. **Dynamic Routing**

   - Created `/projects/[id]` route for individual project pages
   - Project cards now clickable and navigate to detail pages
   - Used Next.js generateStaticParams for static generation
   - Hover states added to project cards

2. **Project Detail Page Structure**

   - Hero image section at top
   - Project metadata grid (Tags, Timeline, Role, Tools)
   - Social sharing buttons (Facebook, Twitter, LinkedIn, WhatsApp)
   - Table of Contents with jump links
   - Multiple content sections: Problem, Research, Goal, Inspirations, etc.
   - Image galleries throughout
   - "View More Projects" section at bottom
   - Custom footer with copyright

3. **Content Sections Implemented**

   - Problem: Describes the client's challenge
   - Research: Details research methodology and findings
   - Target Audience: Defines user demographics
   - Goal: Lists project objectives
   - Inspirations: Visual inspiration with image grid
   - Logo & Typography: Brand identity showcase
   - Color Palette: Color scheme presentation
   - Final Design: Showcases final deliverables

4. **Styling & Design**

   - White background for clean, professional look
   - Consistent typography hierarchy
   - Rounded image containers (rounded-2xl)
   - Gray text for body copy, black for headings
   - Proper spacing and section dividers
   - Responsive grid layouts

5. **Navigation & UX**

   - Clickable project cards with hover effects
   - Internal anchor links in Table of Contents
   - Related projects at bottom for continued browsing
   - Back navigation through browser or navbar

---

## October 18, 2025

### Hero Image Loading Fix ✓

**Fixed glitchy flash on hero section load:**

1. **Problem Identified**

   - On page load, hero-after.png was briefly visible before clipPath was ready
   - Size state initialized at {w: 0, h: 0}, causing clipPath: 'none' initially
   - This caused full hero-after.png to flash before triangle mask applied

2. **Solution Implemented**

   - Wrapped hero-after.png layer in conditional render
   - Only displays when size.w > 0 && size.h > 0
   - Ensures revealed image only appears once clipPath mask is ready
   - Users now only see hero-bg.png on initial load - smooth, no flash

3. **Technical Details**
   - Simple conditional rendering using existing size state
   - No additional state or complexity needed
   - Maintains smooth triangle reveal effect once loaded

### Loading Optimization & Premium Animations ✓

**Implemented comprehensive loading optimizations with Framer Motion animations:**

1. **Hero Section Optimizations**

   - Added image preloading for both hero-bg.png and hero-after.png
   - Created loading overlay with smooth fade-out animation
   - Background image fades in with subtle scale effect (1.05 to 1)
   - Heading uses blur-to-focus animation for premium feel
   - Staggered entrance animations for all content elements
   - Social icons have bounce effect with whileHover scale animations
   - Custom easing curves for natural, smooth movements

2. **Projects Section Enhancements**

   - IntersectionObserver triggers animations when scrolling into view
   - Header elements slide in from left and right
   - Project cards stagger in with scale and fade effects
   - Each card has 0.1s delay for cascading effect
   - Only animates once (performance optimization)

3. **LetsChat Section Animations**

   - All content elements use scroll-triggered animations
   - Heading, paragraph, and social links stagger in sequence
   - Social icons have individual bounce-in animations with subtle delay
   - Clover placeholder rotates and scales in smoothly
   - Footer fades in last for complete sequence

4. **ProjectCard Interactive Hover**

   - Converted to client component for Framer Motion
   - Added scale hover effect (1.0 to 1.05) on entire card
   - Tags have individual hover animations
   - Subtle overlay darkens on hover for depth
   - Smooth transitions with custom easing

5. **Image Optimization (Next.js Config)**

   - Enabled WebP and AVIF formats for modern browsers
   - Configured device sizes for responsive images
   - Set image quality to 85% for balance between quality and speed
   - Optimized image sizes array for various use cases

6. **Performance Techniques Used**

   - Image preloading to eliminate flash
   - Intersection Observer for viewport-based animations
   - AnimatePresence for smooth mount/unmount transitions
   - Once-only animations to prevent re-triggering on scroll
   - Custom easing curves: [0.25, 0.1, 0.25, 1] and [0.34, 1.56, 0.64, 1]
   - Staggered delays for natural cascading effects

7. **Animation Philosophy**

   - Smooth, not flashy (per user preference)
   - Premium feel with blur and scale effects
   - Natural movement using physics-inspired easing
   - Subtle interactions that enhance rather than distract
   - All animations tuned for polish and professionalism

### Project Details Sticky Navigation ✓

**Implemented sticky section navigation matching Figma design:**

1. **Layout Structure**

   - Two-column layout: sticky title on left (380px), content on right
   - Large spacing between columns (80px gap) for visual clarity
   - Title section has generous whitespace matching Figma design
   - All content wrapped in white rounded card with proper padding

2. **Sticky Title Behavior**

   - Section title sticks to top of viewport as user scrolls
   - Title automatically switches to current section being viewed
   - Uses Intersection Observer for accurate section detection
   - Smooth transitions between section titles

3. **Section Organization**

   - Problem & Research (combines problem + research content)
   - Insight & Goals (combines insights + goals content)
   - Design Process (includes inspirations, logo, typography, colors)
   - Final Solution (final design showcase)
   - Large spacing between sections (128px) for clear separation

4. **Typography & Spacing**

   - Section titles: 50px font size on sticky left side
   - Content headings: 30px font size
   - Body text: 20px with relaxed line height
   - Matches Figma design specifications exactly

5. **Technical Implementation**

   - Client component with IntersectionObserver API
   - Custom rootMargin for precise section detection
   - Refs to track each section element
   - Automatically updates active section state on scroll

6. **Design Philosophy**

   - Follows Figma design 1:1
   - Clear visual hierarchy with sticky navigation
   - Easy to scan and navigate long content
   - Professional, minimalist aesthetic

7. **Sticky Title Animation & Layout**
   - Each section title is positioned alongside its corresponding content
   - Titles appear spatially aligned with their content sections
   - Each title individually sticky (top-32 / 128px from top)
   - As you scroll down, upcoming titles appear where their sections begin
   - Previous titles scroll away as new ones stick to top
   - **Premium multi-layer animation:**
     - Blur-to-focus effect (10px blur → sharp)
     - 3D perspective rotation (rotateX: 15deg → 0)
     - Scale spring animation (0.9 → 1) with physics
     - Smooth slide up (60px → 0)
     - Fade in opacity transition
     - Custom cubic-bezier easing [0.16, 1, 0.3, 1] for Apple-like smoothness
     - Spring physics (damping: 20, stiffness: 100) for natural bounce
   - Each title container has minHeight: calc(100vh + 200px) for generous spacing
   - Bottom padding (pb-32 / 128px) creates buffer before title transitions
   - Clean, elegant two-column grid layout with titles and content perfectly aligned
   - Last section (Final Solution) has min-h-screen to maintain sticky behavior

### Project Case Study System ✓

**Created easy-to-use system for managing multiple project case studies:**

1. **Data-Driven Architecture**

   - All project content stored in `src/lib/projects.js`
   - Separate `PROJECTS` array for grid cards
   - `PROJECT_CASE_STUDIES` object for detailed case study data
   - Component accepts sections as props for flexibility

2. **Simple Content Management**

   - Each project has structured data sections
   - Supports multiple content types: text, images, lists, subheadings
   - Consistent template across all 4 projects
   - Easy to add/edit without touching components

3. **Reusable Section Types**

   - Simple section: heading + text + image
   - Section with green subheading
   - Section with bullet lists
   - Section with multiple images (side by side or stacked)
   - Section with multiple paragraphs

4. **Automatic Features**

   - Sticky navigation automatically generated
   - Table of contents from section data
   - Premium animations applied to all sections
   - Consistent typography and spacing

5. **Documentation**

   - Created `/instructions/HOW_TO_ADD_PROJECTS.md`
   - Step-by-step guide for adding new projects
   - Content structure reference
   - Tips and examples included

6. **Easy Workflow for All 4 Projects**
   - Just edit `src/lib/projects.js`
   - Copy template structure
   - Fill in content and images
   - Automatically works with premium animations

### Branding Updates ✓

**Replaced text logo with actual logo image:**

1. **Navbar Logo**

   - Replaced "iclaire" text with `/public/Logo.png` image
   - Used Next.js Image component for optimization
   - Set height to 40px (h-10) with auto width
   - Positioned 40px left from default (-ml-10)
   - Maintains responsive sizing
   - Works on both homepage and project detail pages

2. **Navbar Typography**

   - Navigation buttons: Darker Grotesque (font-sans), 20px, semi-bold
   - Updated both normal nav and pill nav for consistency
   - Maintains hover states and animations

3. **Logo Conditional Display**

   - Homepage hero: Shows "iclaire" text
   - Project details pages: Shows Logo.png image with -ml-10 offset
   - Maintains proper styling and sizing for both states

4. **Fixed Hero Navigation Bug**

   - Added pathname dependency to useEffect
   - Resets `isOverHero` to true when returning to homepage
   - Uses specific `#hero` selector instead of generic `section`
   - Ensures transparent header always shows when viewing hero section
   - No more pill header appearing incorrectly on homepage hero

5. **Logo Hover Animation**
   - Added smooth 90-degree rotation on hover for project page logo
   - Uses Framer Motion whileHover for smooth animation
   - 0.4s duration with custom easing curve for natural feel
   - Enhances user interaction without being flashy
   - Also applied to pill header logo on homepage
   - Pill header logo now uses actual Logo.png instead of green placeholder
   - Logo is clickable and navigates back to homepage

---

## November 3, 2025

### Project Content Updates ✓

**Updated section title in emdep project:**

1. **Section Title Change**
   - Changed "Insight & Goals" to just "Goals"
   - Updated in ProjectContentSections.js sticky title
   - Updated in page.js table of contents
   - Updated in projects.js data structure
   - Maintains consistency across all project pages

---

## November 4, 2025

### Sticky Title Alignment & Height Matching ✓

**Fixed sticky side titles to properly align and persist throughout their content:**

1. **Vertical Alignment Fix**
   - Added `pt-32` (128px) padding to all content sections
   - Matches the `top-32` position of sticky titles
   - "Design Process" title now aligns perfectly with "My Process" heading
   - Consistent alignment across all sections

2. **Dynamic Height Matching**
   - **Problem Identified**: Fixed minHeight for title containers didn't match actual content heights
   - Design Process section is much longer than other sections (multiple subsections with images)
   - Old approach: All title containers got generic `calc(100vh + 200px)` height
   - This caused "Design Process" sticky title to scroll away before content ended
  
3. **Solution Implemented**
   - Added `sectionHeights` state to track actual content section heights
   - Created useEffect to measure each content section's offsetHeight
   - Applied measured heights to corresponding title containers on left
   - Each title container now matches its content section height exactly
   - Re-measures on window resize and after image load delay
  
4. **Result**
   - "Design Process" sticky title stays visible throughout ALL Design Process content
   - Title persists through: My Process, Typography, Color Palette, Logo, Website Design, Desktop/Mobile views, and all Wireframes
   - "Results & Impact" title appears exactly when its content starts
   - Perfect synchronization between left titles and right content
   - No more premature title transitions

5. **Technical Details**
   - Uses refs to measure actual DOM element heights
   - Falls back to `calc(100vh + 200px)` before measurement completes
   - Measures after 1-second delay to account for image loading
   - Simple, performant solution that scales to any content length

---

## November 10, 2025

### Added Foundit Project Entry ✓

- Created Project 2 `foundit` card using `/images/foundit-cover.jpg` for the cover image
- Initialized Foundit case study with shared template, linking `/images/foundit-cover.jpg` as the banner and `/images/foundit-photo.png` as the secondary mockup
- Documented change in `/instructions/PROJECT_UPDATES.md` for future AI context

---

## Next Steps

### Required Tasks

1. Replace placeholder images with actual Irish landscape photos
2. Replace clover icon placeholder with actual PNG
3. Update copy text (currently using Lorem ipsum)
4. Add real project content and images
5. Test triangle flashlight effect across different browsers
6. Optimize images for web (JPEG quality ~80% per user preference)
7. Test responsive behavior on different screen sizes

### Future Enhancements

- Add case study pages for each project (`/projects/[id]`)
- Implement smooth scroll animations between sections
- Add loading states for images
- Consider adding a cursor trail effect (stretch goal)
- Add meta tags and Open Graph data for SEO

---

## Technical Notes

### Key Technologies

- Next.js 15 with App Router
- JavaScript (not TypeScript per user preference)
- Tailwind CSS for styling
- Framer Motion for animations
- SVG masks for triangle flashlight effect

### Performance Considerations

- Using Next.js Image component for automatic optimization
- Priority loading on hero background image with preloading
- WebP and AVIF format support for modern browsers
- Image quality set to 85% for optimal balance
- Intersection Observer for viewport-based animations (loads only when visible)
- Once-only animations to prevent re-triggering
- Smooth spring animations with optimized parameters
- Minimal JavaScript bundle size
- Custom easing curves for natural movement without heavy physics calculations

### Browser Compatibility

- SVG masks work in all modern browsers
- Backdrop blur may need fallback for older browsers
- Smooth scrolling enabled via CSS

---

## Design Decisions

1. **JavaScript over TypeScript**: User preference for simpler, less strict code
2. **Simple Solutions**: Avoided over-engineering, kept implementations straightforward
3. **No Flashy Animations**: Subtle, tasteful transitions that suit the vibe
4. **Irish Theme**: Green landscape imagery, Celtic/clover shapes, nature-inspired
5. **Dark Theme**: Better showcases the flashlight effect and creates ambiance

---

## Issues & Solutions

### Issue: Triangle mask performance

- **Solution**: Used SVG masks instead of CSS mask-composite for better cross-browser support
- Spring animation parameters tuned for smooth following without lag

### Issue: Image placeholder generation

- **Solution**: Used placehold.co service with Irish-themed green colors
- All images downloaded and ready for replacement with real assets

---

## Resources & References

- Build guide: `/instructions/portfolio_build_guide_next.md`
- Design mockups provided by user showing Irish landscape theme
- Framer Motion documentation for spring animations
- Next.js Image optimization docs

---

_Last updated: November 10, 2025_
