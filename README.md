# SLC Manufacturing - Street Light Pole Production Website

A modern, high-performance website showcasing street light pole manufacturing products with smooth parallax scrolling animations.

## 🚀 Quick Start

```bash
# Start development server
npm run dev

# Build for production
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## ✨ Features

- ✅ **Smooth Scroll Parallax** - Animated hero section with depth effect
- ✅ **TypeScript** - Full type safety across the codebase
- ✅ **Tailwind CSS** - Modern utility-first styling
- ✅ **Framer Motion** - GPU-accelerated animations
- ✅ **Responsive Design** - Works on all devices
- ✅ **Production Ready** - Optimized build and deployment

## 📋 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.1.6 | React framework |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | Latest | Animations |
| Lenis | 1.3.17 | Smooth scrolling |
| React Icons | Latest | Icon library |

## 📁 Project Structure

```
SLC-Website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   └── ui/
│       └── modern-hero.tsx      # Main component ⭐
├── Configuration Files
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── next.config.js
└── Documentation
    ├── GETTING_STARTED.md       # 👈 Start here!
    ├── SETUP_GUIDE.md
    ├── CUSTOMIZATION_GUIDE.md
    └── IMPLEMENTATION_SUMMARY.md
```

## 🎨 Component Overview

### SmoothScrollHero
The main component featuring:
- **Navigation Bar** - Fixed header with company branding
- **Hero Section** - Parallax scrolling with animated clipping
- **Products Section** - 7 customizable product listings

### Features
- 4 parallax images with different scroll speeds
- Smooth fade-out effects
- Animated product reveals on scroll
- Hover interactions on product items
- Responsive image sizing

## 🔧 Customization

### Change Product Items
**File**: `components/ui/modern-hero.tsx`

```tsx
<ProductItem
  title="Your Product Name"
  specs="Your specifications"
  location="Your location"
/>
```

### Update Images
Find and replace Unsplash URLs in:
- `CenterImage` component (hero background)
- `ParallaxImages` component (4 parallax images)

### Modify Colors
Replace Tailwind classes:
- `slate-950` → Background
- `slate-50` → Headings
- `amber-400` → Accents

### Change Company Name
In `Nav` component:
```tsx
<span className="text-xl font-bold">Your Company Name</span>
```

## 📚 Documentation

| Guide | Purpose | Time |
|-------|---------|------|
| [GETTING_STARTED.md](GETTING_STARTED.md) | Quick start guide | 3 min |
| [SETUP_GUIDE.md](SETUP_GUIDE.md) | Complete setup | 10 min |
| [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) | Modification tips | 8 min |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | Technical details | 5 min |
| [PROJECT_FILES.md](PROJECT_FILES.md) | File reference | 3 min |

## 🚀 Available Scripts

```bash
npm run dev       # Start development server (port 3000)
npm run build     # Create production build
npm start         # Run production server
npm run lint      # Run ESLint
```

## 🌐 Deployment

Ready to deploy to:
- **Vercel** (Recommended) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **Docker** - Containerized deployment
- **Any Node.js Server** - Self-hosted options

### Deploy to Vercel (1 minute)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy

## 📊 Performance

- **Build Time**: ~8 seconds
- **Dev Server Start**: ~725ms
- **Mobile Optimized**: ✅
- **Type Safe**: ✅ Full TypeScript coverage
- **GPU Accelerated**: ✅ Animations

## 🔍 Key Features Explained

### Smooth Scrolling
Uses [Lenis](https://github.com/studio-freight/lenis) for native smooth scrolling that respects browser behavior.

### Parallax Effect
Four images move at different speeds based on scroll position, creating depth:
```
Scroll Progress: 0% ──────────── 100%
Image 1:         0px ────────── 200px
Image 2:         200px ────── -250px  
Image 3:         -200px ────── 200px
Image 4:         0px ────── -500px
```

### Animations
All animations use Framer Motion for:
- Smooth, 60fps performance
- GPU acceleration
- Mobile-friendly motion
- Zero layout shifts

## ❓ FAQ

**Q: How do I add more products?**
A: Add more `<ProductItem>` components in the `Products` section of `modern-hero.tsx`

**Q: Can I change the color scheme?**
A: Yes! Replace Tailwind color classes throughout the component. See CUSTOMIZATION_GUIDE.md

**Q: Is it mobile-friendly?**
A: Yes! All animations and layouts are responsive and optimized for mobile devices.

**Q: How do I deploy?**
A: Run `npm run build` then deploy the `.next` folder, or push to Vercel for one-click deployment.

**Q: Can I add more sections?**
A: Absolutely! Create new components following the same pattern and add them to `app/page.tsx`

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Dev server won't start?**
```bash
npm run dev -- -p 3001  # Use different port
```

**Styles not applying?**
```bash
npm run build  # Build CSS
```

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for more troubleshooting.

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility CSS
- `@tailwindcss/postcss` - Tailwind v4
- `postcss` - CSS processing

### Animation & UI
- `framer-motion` - Animations
- `lenis` - Smooth scrolling
- `react-icons` - Icon library

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## 📞 Support

- Check the documentation files first
- Review [GETTING_STARTED.md](GETTING_STARTED.md) for quick help
- See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed configuration

## 🎯 Next Steps

1. ✅ Run `npm run dev`
2. ✅ View at http://localhost:3000
3. ✅ Customize with your content
4. ✅ Deploy to production

## ✅ Checklist

- [x] Next.js configured
- [x] TypeScript setup
- [x] Tailwind CSS integrated
- [x] Component created and customized
- [x] All dependencies installed
- [x] Development server working
- [x] Production build successful
- [x] Documentation complete

---

**Status**: ✅ Production Ready

**Last Updated**: February 1, 2026

**Framework**: Next.js 16.1.6

**Made with ❤️ for SLC Manufacturing**
