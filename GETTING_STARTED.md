# Getting Started with SLC Manufacturing Website

## 🎯 Quick Start (2 minutes)

### Step 1: Install Dependencies (if not already done)
```bash
cd /workspaces/SLC-Website
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: View Your Website
Open your browser to: **http://localhost:3000**

You should see:
- Fixed navigation bar with SLC Manufacturing logo
- Smooth parallax scroll effect
- Animated hero image
- 7 street light products in the products section

## ✨ What You'll See

### Navigation Bar (Top)
- 💡 SLC Manufacturing logo with lightbulb icon
- "OUR PRODUCTS" button that scrolls to products section
- Fixed at top, visible while scrolling

### Hero Section (Scroll Down)
- Animated background image revealing with parallax effect
- 4 additional images moving at different speeds as you scroll
- Creates impressive depth effect
- Gradient fade at bottom

### Products Section (Keep Scrolling)
- 7 products with fade-in animation:
  1. Standard Steel Poles
  2. High-Performance LED Fixtures
  3. Solar-Powered Street Lights
  4. Smart Traffic Control Systems
  5. Decorative Architectural Poles
  6. Concrete Foundation Solutions
  7. Custom Maintenance Services
- Each has specifications and location info
- Hover effects for interactivity

## 🔧 Making Your First Changes

### Change the Company Name
**File**: `components/ui/modern-hero.tsx`
**Find**: `<span className="text-xl font-bold">SLC Manufacturing</span>`
**Change to**: Your company name

### Add a New Product
**File**: `components/ui/modern-hero.tsx`
**Find**: The `Products` section with `<ProductItem>` components
**Add**: A new line like:
```tsx
<ProductItem
  title="Your New Product"
  specs="Your specifications"
  location="Your location"
/>
```

### Change Colors
**File**: `components/ui/modern-hero.tsx`
**Replace all**:
- `slate-950` → Any Tailwind color for background
- `slate-50` → Any Tailwind color for text
- `amber-400` → Any Tailwind color for accents

## 📸 Updating Images

All images use Unsplash URLs. To change them:

1. Go to [unsplash.com](https://unsplash.com)
2. Search for your image (e.g., "street light", "manufacturing")
3. Copy the image URL
4. Replace URLs in `components/ui/modern-hero.tsx`

**Image Locations in Code**:
- Hero background: `CenterImage` component, `backgroundImage` property
- Parallax images: `ParallaxImages` component, 4 `ParallaxImg` components

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## 🌐 Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel will automatically detect Next.js and deploy!

## 📚 Documentation

- **SETUP_GUIDE.md** - Complete technical setup
- **CUSTOMIZATION_GUIDE.md** - Detailed modification instructions
- **IMPLEMENTATION_SUMMARY.md** - Project overview and features

## ❓ Frequently Asked Questions

**Q: How do I change the smooth scroll speed?**
A: Edit the Lenis configuration in the `SmoothScrollHero` component

**Q: Can I add more sections?**
A: Yes! Add new components following the same pattern as `Products`

**Q: How do I add a contact form?**
A: Create a new component in `components/ui/` and add it to `app/page.tsx`

**Q: Can I use different fonts?**
A: Yes, modify `tailwind.config.js` or add `@import` in `globals.css`

**Q: How do I add dark mode?**
A: Add `darkMode: 'class'` to `tailwind.config.js` and implement toggle logic

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Lazy Load**: Images load as needed during scroll
3. **Animations**: Already GPU-accelerated via Framer Motion
4. **CSS**: Tailwind only includes used styles in production

## 🆘 Troubleshooting

**Dev server won't start?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Styles not showing?**
```bash
npm run build
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

## 📞 Need Help?

- Check **SETUP_GUIDE.md** for detailed setup
- Review **CUSTOMIZATION_GUIDE.md** for code changes
- Read **IMPLEMENTATION_SUMMARY.md** for project structure

## 🎉 You're All Set!

Your street light manufacturing website is ready to go!

**Next Steps**:
1. Start dev server: `npm run dev`
2. View at: http://localhost:3000
3. Make customizations
4. Deploy when ready

Happy coding! 🚀

---

**Framework**: Next.js 16.1.6
**Styling**: Tailwind CSS v4
**Language**: TypeScript
**Status**: Production Ready ✅
