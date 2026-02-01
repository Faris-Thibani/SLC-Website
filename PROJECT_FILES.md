# SLC Manufacturing Website - File Structure & Guide

## 📁 Complete File Structure

```
SLC-Website/
│
├── 📄 Core App Files
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata & HTML setup
│   │   ├── page.tsx                # Home page component (renders SmoothScrollHero)
│   │   └── globals.css             # Global Tailwind CSS imports
│   │
│   └── components/
│       └── ui/
│           └── modern-hero.tsx     # ⭐ Main customized hero component
│
├── ⚙️ Configuration Files
│   ├── tsconfig.json               # TypeScript configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration  
│   ├── postcss.config.js           # PostCSS with Tailwind plugin
│   ├── next.config.js              # Next.js configuration
│   └── package.json                # Dependencies and scripts
│
├── 📚 Documentation Files
│   ├── README.md                   # Project overview
│   ├── SETUP_GUIDE.md              # Complete setup instructions
│   ├── CUSTOMIZATION_GUIDE.md      # How to modify components
│   ├── IMPLEMENTATION_SUMMARY.md   # What was accomplished
│   ├── GETTING_STARTED.md          # Quick start guide
│   └── PROJECT_FILES.md            # This file
│
├── 📦 Package Files
│   ├── package.json                # NPM configuration
│   ├── package-lock.json           # Locked dependency versions
│   └── node_modules/               # Installed packages
│
├── 🎨 Static Files
│   ├── public/                     # Static assets (images, fonts)
│   └── next-env.d.ts               # TypeScript Next.js types
│
└── .gitignore                      # Git ignore rules
```

## 📋 File Descriptions

### Core Application Files

| File | Purpose | Modified? |
|------|---------|-----------|
| `app/layout.tsx` | Root layout wrapper | ✅ Created |
| `app/page.tsx` | Home page entry point | ✅ Created |
| `app/globals.css` | Global Tailwind imports | ✅ Created |
| `components/ui/modern-hero.tsx` | Main hero component | ✅ Customized |

### Configuration Files

| File | Purpose | Modified? |
|------|---------|-----------|
| `tsconfig.json` | TypeScript config with path aliases | ✅ Created |
| `tailwind.config.js` | Tailwind CSS settings | ✅ Created |
| `postcss.config.js` | PostCSS pipeline config | ✅ Created |
| `next.config.js` | Next.js settings | ✅ Created |
| `package.json` | NPM dependencies & scripts | ✅ Created |

### Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| `README.md` | Project overview | 2 min |
| `SETUP_GUIDE.md` | Complete setup guide | 10 min |
| `CUSTOMIZATION_GUIDE.md` | How to modify | 8 min |
| `IMPLEMENTATION_SUMMARY.md` | What was done | 5 min |
| `GETTING_STARTED.md` | Quick start | 3 min |
| `PROJECT_FILES.md` | This file | 3 min |

## 🎯 Which Files to Edit for Customization?

### Change Product Items
**File**: `components/ui/modern-hero.tsx`
- Look for `<ProductItem ... />` components in the `Products` function
- Each ProductItem has: `title`, `specs`, `location`

### Change Colors
**File**: `components/ui/modern-hero.tsx`
- Replace Tailwind color classes (e.g., `slate-950` → `blue-950`)
- Update: `bg-`, `text-`, `border-` classes

### Change Images
**File**: `components/ui/modern-hero.tsx`
- Find `backgroundImage` in `CenterImage` component
- Find all `<ParallaxImg src="..."` tags

### Change Company Name/Logo
**File**: `components/ui/modern-hero.tsx`
- Find `Nav` component
- Change company name and icon

### Change Tailwind Settings
**File**: `tailwind.config.js`
- Customize colors, fonts, spacing, etc.

### Add Global Styles
**File**: `app/globals.css`
- Add custom CSS rules here

## 🔍 File Statistics

### Size Analysis
```
Components:
- modern-hero.tsx: ~6.8 KB (main component)

Configuration:
- tsconfig.json: ~1.2 KB
- tailwind.config.js: ~0.4 KB
- postcss.config.js: ~0.2 KB
- next.config.js: ~0.3 KB

Styles:
- globals.css: ~0.2 KB

Total (excluding node_modules): ~9 KB
```

### Dependencies
```
Total Packages: 66
Direct Dependencies: 9
- next
- react
- react-dom
- typescript
- tailwindcss
- @tailwindcss/postcss
- postcss
- framer-motion
- lenis
- react-icons
- autoprefixer
```

## 🚀 Important Files to Keep Updated

### Before Deployment
1. ✅ `app/layout.tsx` - Update metadata (title, description)
2. ✅ `components/ui/modern-hero.tsx` - Verify all content is correct
3. ✅ `public/` - Add company logo/favicon
4. ✅ `.gitignore` - Already configured

### For SEO
1. `app/layout.tsx` - Add Open Graph tags
2. `app/layout.tsx` - Add structured data (JSON-LD)

### For Analytics
1. `app/layout.tsx` - Add analytics script
2. `components/ui/modern-hero.tsx` - Add event tracking if needed

## 📊 Code Organization

### Component Hierarchy
```
app/page.tsx
└── SmoothScrollHero (from modern-hero.tsx)
    ├── Nav
    ├── Hero
    │   ├── CenterImage
    │   └── ParallaxImages
    │       ├── ParallaxImg (×4)
    └── Products
        └── ProductItem (×7)
```

### Style Organization
```
Tailwind Classes
├── Layout (w-, h-, flex, grid)
├── Colors (bg-, text-, border-)
├── Typography (text-, font-)
├── Spacing (p-, m-, gap-)
├── Effects (shadow-, rounded-, opacity-)
└── Animations (via Framer Motion)
```

## ✨ Key File Features

### modern-hero.tsx
- **Lines**: ~200
- **Components**: 8 sub-components
- **Features**: Smooth scroll, parallax, animations
- **Customizable**: Products, images, colors, text

### tsconfig.json
- **Target**: ES2020
- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` → root directory
- **React**: JSX support enabled

### tailwind.config.js
- **Content Scanning**: app/**, components/**
- **Theme**: Extends default (no breaking changes)
- **Plugins**: None (can be added)

### globals.css
- **Import**: Tailwind CSS (v4 syntax)
- **Custom**: Base styles for * selector and html

## 🔗 File Dependencies

```
app/page.tsx
├── app/layout.tsx
│   └── app/globals.css (imports Tailwind)
├── components/ui/modern-hero.tsx
│   ├── framer-motion
│   ├── lenis
│   ├── react-icons
│   └── React hooks (useRef, useScroll, etc.)

tailwind.config.js
└── Used by PostCSS
    └── PostCSS processes app/globals.css
        └── Tailwind generates utility classes
```

## 📝 File Editing Guidelines

### Safe to Edit
✅ `components/ui/modern-hero.tsx` - Main customization file
✅ `app/page.tsx` - Can add more components
✅ `tailwind.config.js` - Customize theme
✅ `app/globals.css` - Add custom styles

### Be Careful With
⚠️ `tsconfig.json` - Can break TypeScript if misconfigured
⚠️ `next.config.js` - Can break build if misconfigured
⚠️ `postcss.config.js` - Can break CSS if misconfigured

### Don't Edit
❌ `app/layout.tsx` - Only change metadata
❌ `next-env.d.ts` - Auto-generated
❌ `package-lock.json` - Auto-generated

## 🎨 File Naming Conventions

- **Components**: PascalCase (`SmoothScrollHero.tsx`)
- **Functions**: camelCase (`useScroll()`)
- **Variables**: camelCase (`heroHeight`)
- **Constants**: UPPER_SNAKE_CASE (`SECTION_HEIGHT`)
- **CSS Classes**: kebab-case (`bg-slate-950`)

## 📦 Dependencies by File

### modern-hero.tsx requires
```
import { ReactLenis } from "lenis/react"          # Smooth scrolling
import { motion, ... } from "framer-motion"        # Animations
import { FiArrowRight, ... } from "react-icons"    # Icons
import { MdOutlineLightbulb } from "react-icons"   # Logo icon
import { useRef } from "react"                      # React hook
```

### Tailwind requires (in CSS)
```
@import "tailwindcss"                      # v4 syntax
```

### No dependencies needed for
```
app/layout.tsx
app/page.tsx
app/globals.css (except @import)
```

## 🔄 File Update Workflow

When making changes:
1. Edit the file
2. Save (Auto-save in VS Code)
3. Dev server hot-reloads automatically
4. View changes in browser

Example:
```
Edit: components/ui/modern-hero.tsx
Wait: ~1 second for hot-reload
View: http://localhost:3000 refreshes automatically
```

## 📚 Documentation Reading Order

For first-time setup:
1. **GETTING_STARTED.md** (Start here!)
2. **SETUP_GUIDE.md** (If issues occur)
3. **CUSTOMIZATION_GUIDE.md** (When making changes)
4. **IMPLEMENTATION_SUMMARY.md** (For details)

For reference:
- **PROJECT_FILES.md** (This file - file locations)
- **README.md** (Project overview)

---

**Last Updated**: February 1, 2026
**Framework**: Next.js 16.1.6
**Status**: ✅ Complete
