# SLC-Website Setup Guide

## Project Overview
This is a Next.js-based website for SLC Manufacturing, featuring a modern hero component with smooth scroll animations for showcasing street light pole products and manufacturing capabilities.

## Technology Stack
- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with @tailwindcss/postcss)
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: React Icons (specifically MdOutlineLightbulb, FiArrowRight, FiMapPin)
- **Package Manager**: npm

## Project Structure

```
SLC-Website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global Tailwind CSS imports
├── components/
│   └── ui/
│       └── modern-hero.tsx # Main animated hero component
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Installed Dependencies

### Core Dependencies
```bash
npm install next@latest react@latest react-dom@latest
npm install typescript@latest
npm install tailwindcss@latest @tailwindcss/postcss
npm install framer-motion lenis react-icons
npm install postcss@latest autoprefixer@latest
```

### Dev Dependencies
```bash
npm install -D @types/react @types/node
```

## Component Details

### SmoothScrollHero Component
Located at: `components/ui/modern-hero.tsx`

#### Features:
1. **Navigation Bar** - Fixed top navigation with:
   - SLC Manufacturing logo with lightbulb icon
   - Smooth scroll button to products section
   - Responsive design

2. **Hero Section** - Parallax scrolling with:
   - Animated clipping effect on center image
   - Multiple parallax images revealing as you scroll
   - Gradient fade-out at bottom

3. **Products Section** - Showcase of offerings:
   - Standard Steel Poles
   - High-Performance LED Fixtures
   - Solar-Powered Street Lights
   - Smart Traffic Control Systems
   - Decorative Architectural Poles
   - Concrete Foundation Solutions
   - Custom Maintenance Services

#### Props & State:
- No props required - component is self-contained
- Uses Framer Motion hooks: `useScroll()`, `useTransform()`, `useMotionTemplate()`
- Uses Lenis for smooth scrolling

#### Images Used (from Unsplash):
1. Industrial street lighting installation
2. Street light pole infrastructure
3. Industrial manufacturing process
4. Quality street lighting poles

## Running the Project

### Development Mode
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Customization Guide

### Changing Colors
All colors use Tailwind's color system. Edit `tailwind.config.js` to customize:
- `bg-slate-950` → Background color
- `text-amber-400` → Accent color (lightbulb)
- `text-slate-50` → Primary text
- `text-slate-400` → Secondary text

### Updating Images
In `components/ui/modern-hero.tsx`, replace the image URLs in:
1. `CenterImage` component - main hero background
2. `ParallaxImages` component - four parallax images

### Changing Product Data
Edit the `Products` section in `components/ui/modern-hero.tsx`:
- Modify `ProductItem` components to change product details
- Update title, specs, and location for each item

### Navigation Customization
Edit the `Nav` component to:
- Change company name/branding
- Modify navigation links
- Adjust button text and colors

## Key Implementation Details

### Smooth Scrolling
The component uses Lenis wrapped in a `ReactLenis` provider for smooth scroll behavior across the entire page.

### Parallax Effect
The parallax images use:
- `useScroll()` to track scroll progress
- `useTransform()` to map scroll values to position/scale
- `useMotionTemplate()` to create dynamic CSS values

### Responsive Images
All images use:
- `rounded-lg` for rounded corners
- `shadow-lg` for depth
- Different widths (1/3, 2/3, 1/2) for layout variety

## Important Notes

### Why `/components/ui` Folder Structure
- **Industry Standard**: This structure follows shadcn/ui conventions
- **Organization**: Keeps UI components separate from business logic
- **Scalability**: Easy to add more components as the project grows
- **Re-usability**: Components in `/ui` are typically reusable across the app

### TypeScript Configuration
- **Strict Mode**: Enabled for better type safety
- **Path Aliases**: `@/*` maps to root directory for cleaner imports
- **Target**: ES2020 for modern browser support

### Tailwind CSS v4
- Uses new `@import "tailwindcss"` syntax in CSS files
- Automatically optimizes CSS delivery
- Better performance than v3

## Troubleshooting

### Build Errors
If you encounter build errors:
1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `npm install`
3. Run build again: `npm run build`

### TypeScript Errors
- Ensure all imported modules have type definitions
- Check `tsconfig.json` is properly configured
- Run TypeScript check: `npx tsc --noEmit`

### Styling Issues
- Verify Tailwind CSS is processing correctly
- Check `globals.css` imports `@import "tailwindcss"`
- Clear browser cache if styles don't update

## Performance Optimizations

1. **Image Optimization**: Next.js automatically optimizes images
2. **Code Splitting**: Framer Motion animations are tree-shakeable
3. **CSS**: Tailwind CSS only includes used styles in production
4. **Smooth Scrolling**: Lenis uses GPU acceleration for better performance

## Next Steps

1. **Connect to CMS**: Consider integrating a headless CMS for product data
2. **Add More Pages**: Create additional pages for testimonials, about, contact
3. **SEO Optimization**: Add meta tags and structured data
4. **Analytics**: Integrate Google Analytics or similar
5. **Contact Form**: Add a contact form section
6. **Dark Mode**: Implement dark mode toggle if needed

## Git Commands

Initialize and commit the project:
```bash
git add .
git commit -m "Initial SLC Manufacturing website setup"
git push origin cv
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Created**: February 1, 2026
**Framework**: Next.js 16.1.6
**Status**: Production Ready ✓
