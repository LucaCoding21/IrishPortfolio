# iclaire Portfolio

A modern portfolio website with an Irish/Celtic theme, featuring a unique triangle flashlight cursor effect in the hero section.

## Features

- **Triangle Flashlight Hero**: Interactive cursor effect that reveals Irish landscape through a triangle cutout
- **Project Showcase**: Swappable project preview with card-based selection
- **Irish Theme**: Celtic-inspired design with green landscape imagery
- **Smooth Animations**: Powered by Framer Motion with tasteful transitions
- **Dark Theme**: Clean, minimal dark design that highlights content

## Tech Stack

- **Next.js 15** - React framework with App Router
- **JavaScript** - For simplicity and flexibility
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and interactions
- **SVG Masks** - For the custom triangle flashlight effect

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/            # Navbar, Footer, Container
│   ├── hero/              # Hero section with triangle effect
│   ├── projects/          # Projects showcase components
│   ├── sections/          # About and Contact sections
│   └── ui/                # Reusable UI components
└── lib/                   # Utilities and data
    ├── cn.js             # Class name utility
    └── projects.js       # Project data

public/
└── images/               # All image assets
```

## Key Components

### Hero Section

The hero features a unique triangle flashlight effect that follows your cursor, revealing the Irish landscape background through an SVG mask.

### Projects Section

Interactive project showcase where clicking project cards updates the main preview frame.

### About & Contact

Clean sections with Irish-themed imagery and social media integration.

## Customization

### Replace Placeholder Images

Replace images in `/public/images/` with your own:

- `hero-bg.jpg` - Main hero background (1920x1080)
- Project images - See `/public/images/README.md` for full list

### Update Content

- Project data: Edit `/src/lib/projects.js`
- Section text: Update component files in `/src/components/`
- Theme colors: Modify `/tailwind.config.js`

### Adjust Triangle Effect

In `/src/components/hero/TriangleMask.js`:

- `BASE` - Width of triangle base (default: 320)
- `TRI_H` - Height of triangle (default: 380)
- Spring parameters for different cursor feel

## Design Principles

- Simple, non-overengineered solutions
- Subtle animations that suit the vibe (no flashy effects)
- Dark theme with clean typography
- Irish/Celtic theme with nature imagery
- Mobile-first responsive design

## Performance

- Next.js Image optimization
- Priority loading for hero image
- Optimized spring animations
- Minimal JavaScript bundle

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- SVG masks supported in all modern browsers
- Fallbacks for older browsers where needed

## Development Log

See `DEVELOPMENT_LOG.md` for detailed progress tracking and technical notes.

## License

Private portfolio project.

---

Built with love & care 🍀
