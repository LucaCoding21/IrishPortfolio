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

