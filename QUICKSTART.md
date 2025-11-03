# Quick Start Guide

## 🎉 Your Portfolio is Ready!

The development server should now be running at:
**http://localhost:3000**

Open that URL in your browser to see your portfolio in action!

## ✨ What to Try

1. **Move your mouse over the hero section** - Watch the triangle flashlight effect reveal the Irish landscape!

2. **Click on different project cards** - See how the main preview updates

3. **Scroll through the page** - Check out all the sections (Works, About, Contact)

## 📝 Next Steps

### 1. Replace Images (Priority)

The site currently uses placeholder images. Replace these with real photos:

```
public/images/
├── hero-bg.jpg          ← Main hero background (Irish landscape)
├── emdep-thumb.jpg      ← Project thumbnails
├── emdep-hero.jpg       ← Project full images
├── about-clover.jpg     ← About section
├── contact-bg.jpg       ← Contact background
└── ... (see public/images/README.md for full list)
```

**Tip**: Use images with ~20% quality drop (JPEG quality 80) for web optimization.

### 2. Update Content

Edit these files to add your real content:

- **Projects**: `src/lib/projects.js` - Add your real projects
- **Hero text**: `src/components/hero/Hero.js` - Update your tagline
- **About**: `src/components/sections/About.js` - Add your bio
- **Contact**: `src/components/sections/Contact.js` - Add contact info

### 3. Customize Links

Update social media links in:

- `src/components/layout/Footer.js`
- `src/components/sections/About.js`
- `src/components/sections/Contact.js`

### 4. Fine-tune Triangle Effect

In `src/components/hero/TriangleMask.js`:

```javascript
const BASE = 320; // Triangle width
const TRI_H = 380; // Triangle height
```

Adjust these numbers to change the triangle size!

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Pages (layout.js, page.js)
├── components/
│   ├── hero/              # Triangle flashlight effect
│   ├── projects/          # Project showcase
│   ├── sections/          # About & Contact
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable components
└── lib/                   # Data & utilities

public/
└── images/                # All images go here
```

## 🎨 Design Features

- **Triangle Flashlight**: SVG mask that follows cursor
- **Irish Theme**: Celtic-inspired with green landscapes
- **Dark Mode**: Clean dark theme (#0B0B0C)
- **Smooth Animations**: Framer Motion springs
- **Simple Code**: JavaScript (not TypeScript)
- **No Flashy Effects**: Subtle, tasteful animations

## 📚 Documentation

- `README.md` - Full project overview
- `DEVELOPMENT_LOG.md` - Detailed build notes
- `BUILD_COMPLETE.md` - Feature checklist
- `public/images/README.md` - Image requirements

## 🚀 Deploy to Vercel

When ready to deploy:

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then connect to Vercel:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Deploy! (Vercel auto-detects Next.js)
```

## ⚡ Tips

- Images are auto-optimized by Next.js
- Hero image loads with priority for fast display
- All animations are GPU-accelerated
- Code is simple and easy to modify

## 🐛 Troubleshooting

**Triangle not appearing?**

- Check console for errors
- Make sure `public/images/hero-bg.jpg` exists
- Try refreshing the page

**Images not loading?**

- Verify files exist in `public/images/`
- Check image filenames match exactly
- Restart dev server

**Styles not applying?**

- Make sure Tailwind is running
- Check for typos in className
- Clear browser cache

---

## Need Help?

Check `DEVELOPMENT_LOG.md` for technical details and design decisions.

**Have fun building! 🍀**
