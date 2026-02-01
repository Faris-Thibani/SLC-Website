# Street Light Manufacturing Hero Component - Customization Guide

## What Was Customized

### 1. **Theme & Branding**
- Changed from space theme (SpaceX) to street light manufacturing
- Updated color scheme from zinc to slate (professional industrial look)
- Added lightbulb icon (MdOutlineLightbulb) as company symbol

### 2. **Navigation**
- **Before**: SpaceX logo + Launch Schedule button
- **After**: SLC Manufacturing logo + lightbulb icon + "OUR PRODUCTS" button

### 3. **Hero Section**
- Maintained smooth scroll parallax effect
- Updated center image to show industrial street lighting installation
- Changed background to slate-950 for professional appearance

### 4. **Product Showcase (replacing Launch Schedule)**
- **Before**: Rocket launch schedule (NG-21, Starlink, Turksat, NROL-186, etc.)
- **After**: Street light manufacturing products:
  - Standard Steel Poles
  - High-Performance LED Fixtures
  - Solar-Powered Street Lights
  - Smart Traffic Control Systems
  - Decorative Architectural Poles
  - Concrete Foundation Solutions
  - Custom Maintenance Services

### 5. **Images**
All four parallax images were updated to manufacturing-related content from Unsplash:
1. **Hero Background**: Industrial street lighting installation
2. **Parallax Image 1**: Modern street lighting installation (1/3 width)
3. **Parallax Image 2**: Street light pole infrastructure (2/3 width)
4. **Parallax Image 3**: Industrial manufacturing process (1/3 width)
5. **Parallax Image 4**: Quality street lighting poles (5/12 width)

### 6. **Color Accents**
- **Primary Accent**: Changed from zinc to amber (gold) for the lightbulb icon
- **Hover Effects**: Added transition colors to product items
- **Border Colors**: Updated from zinc-800 to slate-700

### 7. **Interactive Elements**
- Added hover effects on product items (border color transitions)
- Maintained smooth scroll animations
- Icon colors updated to match new theme

## File Structure

```
components/ui/modern-hero.tsx
├── SmoothScrollHero (main export)
├── Nav (navigation component)
├── Hero (hero section with parallax)
├── CenterImage (animated clipping effect)
├── ParallaxImages (four parallax images)
├── ParallaxImg (individual image component with motion)
├── Products (product showcase section)
└── ProductItem (individual product item)
```

## Key Components & Their Purpose

### `SmoothScrollHero`
Main export component that wraps everything in `ReactLenis` for smooth scrolling.

### `Nav`
Fixed navigation bar with:
- Company logo with lightbulb icon
- Smooth scroll button to products section

### `CenterImage`
Animated hero image with:
- Clip-path animation that reveals image as user scrolls
- Background size transformation
- Opacity fade-out effect

### `ParallaxImages`
Container for four parallax images with different scroll speeds to create depth effect.

### `ParallaxImg`
Individual image component that:
- Tracks scroll progress
- Transforms based on scroll position
- Creates parallax effect by moving at different speeds

### `Products` & `ProductItem`
Section showcasing 7 product offerings with:
- Fade-in animation on scroll (whileInView)
- Hover effects
- Location information with map pin icon

## How to Modify Further

### Change Product Items
Edit the `Products` component and modify `ProductItem` calls:
```tsx
<ProductItem
  title="Your Product Name"
  specs="Your specifications"
  location="Your location"
/>
```

### Update Images
Replace image URLs in:
1. `CenterImage` - backgroundImage URL
2. `ParallaxImages` - all four `ParallaxImg` src URLs

### Adjust Colors
Search and replace color classes:
- `slate-950` → background
- `slate-50` → headings
- `slate-400` → secondary text
- `slate-700` → borders
- `amber-400` → accents

### Modify Animation Timings
Look for `useTransform` calls and adjust animation values:
```tsx
useTransform(scrollY, [0, 1500], [25, 0])  // [startValue, endValue] at [scrollStart, scrollEnd]
```

## Performance Notes

- All animations use GPU acceleration via Framer Motion
- Images are lazy-loaded by browser
- Smooth scrolling (Lenis) uses requestAnimationFrame
- TypeScript ensures type safety during future modifications

## Browser Support

Works on all modern browsers supporting:
- ES2020 JavaScript
- CSS Grid/Flexbox
- CSS Variables
- requestAnimationFrame

## Future Enhancement Ideas

1. Add product filtering/categories
2. Implement product detail modal
3. Add testimonials section below products
4. Integrate with CMS for dynamic product data
5. Add animation prefers-reduced-motion support
6. Add product image gallery
7. Create product comparison view

---

**Component File**: [components/ui/modern-hero.tsx](../components/ui/modern-hero.tsx)
**Last Updated**: February 1, 2026
