## Layout & Footer Updates

- Grouped the homepage footer directly under the `Let's Chat` section in `src/app/page.js` so it appears immediately after that section and participates in the same scroll-snap panel, without any sticky positioning.
- Updated the footer styles in `Footer.js` / `globals.css` to remove the container shadow and ensure the “made with love & care” text renders in the green brand color (`#4A7C59`) instead of white.
- Standardized navigation text size in `Navbar.js` and the “made with love & care” lines in the hero and footer to `text-[20px]` for a consistent 20px type scale.
- Increased the `LetsChat` section container from `max-w-[1200px]` to `max-w-[1500px]` so it aligns with the wider layout used elsewhere on the homepage.
- Updated all portfolio social icons (Hero, About, Contact, LetsChat, shared footer, and project detail footer) to use the real links: LinkedIn `https://www.linkedin.com/in/irishclairecatungal`, GitHub `https://github.com/ICClaire`, and `mailto:irishclaireparayno@gmail.com`, with external links opening in a new tab.
- Centered the `LetsChat` section vertically within the viewport by using a `flex-1 flex items-center justify-center` wrapper instead of offsetting it with top padding.
- Added a new `/about` page (`src/app/about/page.js`) that mirrors the reference “About / Behind the Screen / Let’s Chat!” layout, and wired the navbar “About” link to route there.
 - Updated `Navbar.js` so the About page (`/about`) uses the same solid, scroll-reactive navbar style as project detail pages instead of the transparent hero-style navbar.
 - Enlarged the clover image on the `/about` page by increasing its wrapper to `max-w-[680px]` and bumped the main About and Behind the Screen paragraphs to `text-[25px]` to better match the reference typography scale.
- Re-skinned `/about` to match the latest reference: new hero card with pink clover accent, rounded content card, expanded tools/development grids, refreshed Behind the Screen layout, and a left-aligned Let’s Chat section with circular socials.
- Removed the small uppercase section labels (“Profile,” “Personal,” “Contact”) from `/about` to keep the layout cleaner like the reference.
- Added a `box-shadow: 10px 10px 0 rgba(58, 123, 54, 0.25)` to the `/about` bio card to match the referenced green drop shadow.
- Removed the BCIT credential line from `/about` and removed the border/padding that used to separate the Tools/Development grid since the new layout already provides the necessary spacing.
- Added `pt-8` above the Tools/Development grid on `/about` to restore breathing room beneath the bio card without reintroducing the BCIT line.
- Installed `react-icons` and wired the About page’s Tools & Development badges to brand icons from `react-icons/si` (Figma, Adobe suite, ProtoPie, React, Next.js, etc.) so none of the badges render empty states.
- Switched the `/about` page background from the muted off-white to pure white to match the latest reference screenshot.
- Removed the forced green tint on the new `react-icons` brand badges so each icon renders in its original brand color.
- Simplified the `/about` tool/dev lists: removed ProtoPie & FigJam, added WordPress/HTML/CSS/JavaScript/React (basic), and swapped Framer/Webflow/Next.js/Figma to Web for the new stack.
- Added extra top padding (`pt-40`) to the `/about` hero section to create breathing room between the navbar and the “Claire” heading.
- Removed the inner dashed photo placeholder container from the `/about` hero image card; the gradient block now stands alone until a real photo is added.
- Constrained every `/about` section wrapper to `max-w-[1400px]` and centered content (`mx-auto`) with text centered on mobile and left-aligned on desktop to match the reference layout.
- Removed the pink blurred blob (`absolute -top-12 ... bg-[#F7DED9]`) behind the placeholder portrait so the hero image shows only the white gradient card.
- Centered the `/about` “Let’s Chat” section by switching to a vertical layout (single column, centered text/buttons) with the clover image centered beneath the intro copy.
- Ensured the clover image inside the `/about` Let’s Chat section stays centered by constraining its wrapper with `mx-auto`.
- Adjusted the Let’s Chat clover SVG viewBox to `0 0 500 500` for consistent scaling.
- Matched homepage social icon styling to the About page: hero icons now sit inside bordered circular buttons (`border-white/30`), and the global footer icons use bordered circles in the brand green.
- Extended the bordered icon treatment to the homepage Let’s Chat section (`h-12 w-12 rounded-full border border-[#D7DACD]` with subtle hover fill) so all contact CTAs share the same design language.
- Disabled the hover scale animation on the homepage Let’s Chat icons so they match the About page buttons exactly (same size, border, and hover color).
- Added the shared `Footer` component to `/about/page.js` so the About page now displays the same footer as the homepage.
- Wrapped the homepage `<Footer />` in its own `snap-start` container so it participates in scroll snapping just like the Let’s Chat section (fixing cases where the footer wasn’t visible).
- Rebuilt `/contact` to match the new reference hero (wave mask photo on the right, simple copy + bordered social buttons on the left) and updated the navbar logic so `/contact` uses the same solid style as `/about`/project pages.
- Swapped the `/contact` hero mask from the wave silhouette to the same clover shape used throughout the site, and aligned its viewBox/circle positions (`0 0 500 500`) with the About section for perfect symmetry.

## Mobile Responsiveness Overhaul

Implemented comprehensive mobile optimizations across all pages to ensure content is never cut off and the UI/UX follows the site's theme:

### Homepage
- **Hero**: Scaled heading 35px→24px mobile, stacked footer elements vertically, reduced icon sizes to 10px mobile/12px desktop, adjusted padding to px-4 on mobile
- **Projects**: Vertical header stack on mobile, heading 5xl→3xl, description 25px→18px, added responsive padding throughout
- **Let's Chat**: Single-column layout on mobile with centered content, heading 5xl→3xl, paragraph 25px→18px, constrained clover to 400px mobile width

### Footer
- Stacked layout on mobile (centered), reduced text 20px→16px, icons 17px→14px, adjusted spacing for compact view

### About Page  
- Top padding pt-40→pt-24 mobile, portrait card scaled 420px→300px mobile, all headings/text responsive (Claire: 48px→36px, bio: 22px→18px, Tools/Dev labels: 18px→14px, badges: 17px→14px)
- Behind the Screen heading 38px→28px, paragraph 25px→18px, photo cards with tighter spacing
- Let's Chat heading 38px→28px, paragraph 20px→18px, clover 420px→320px mobile

### Contact Page
- Top padding pt-40→pt-24 mobile, heading 48px→36px, paragraph 20px→18px, clover image 520px→340px mobile, icons 12px→10px, tighter spacing throughout

### Project Detail Pages
- Hero image 500px→280px height mobile, detail card padding p-12→p-6, title 50px→32px, description 25px→18px
- Detail labels 25px→18px, values 25px→16px, single-column grid on mobile
- Table of Contents heading 50px→32px, list items 25px→18px, reduced padding
- View More cards 260px→200px height mobile, tighter spacing
- Footer text reduced, icons 5px→4px mobile

### ProjectContentSections (Case Study Content)
- All headings responsive: xl 40px→28px, accent/default 25px→20px mobile
- Paragraphs 25px→18px mobile, lists same treatment
- Image grids stack to single column on mobile (grid-cols-2→grid-cols-1)
- Sticky section titles hidden on mobile (desktop-only with `hidden md:block`)
- Placeholder blocks 600px→400px mobile
- Reduced spacing throughout (mb-8→mb-6 mobile, gap-6→gap-4)

All changes maintain the Irish/Celtic theme with proper hierarchy, breathing room, and touch-friendly targets on mobile devices.

### Mobile Hero Enhancement
- Created `MobileFlowingReveal.js` component for mobile-only organic blur animation
- Implements flowing blur circle that moves organically in the bottom half of the hero using layered sine waves
- Ripple effect expands outward from the blur circle, revealing the flower background (`hero-after.png`)
- Desktop keeps the original triangle cursor-follow effect unchanged
- Mobile detection at 768px breakpoint automatically switches between desktop triangle and mobile flowing ripple
- Blur circle uses white transparent glow with Gaussian blur filter for modern tech aesthetic
- Continuous gentle pulsing animation on both the core circle and ripple for organic, dreamy movement
- Added tap interaction: pointer/touch events animate the blob toward the tap target with a slick ripple burst, pause the auto-flow for ~1.5s, then ease the blob back onto its ambient path so there’s no harsh snap when the autopilot resumes.

