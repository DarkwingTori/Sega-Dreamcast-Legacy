# 🎮 Sega Dreamcast Legacy

> A premium, Apple-inspired product showcase celebrating the legendary Sega Dreamcast console through modern web design

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[📚 Full Documentation](projectspecifications.md)

---

## 📋 Overview

A historically accurate, production-quality web application that brings the Sega Dreamcast console to life through **11+ interactive pages**, featuring iconic games like Sonic Adventure and Jet Set Radio, a **3D CoverFlow music player** with YouTube integration, and a comprehensive gallery of **150+ optimized images**.

Built with modern web technologies (React 18.3, TypeScript, Vite 6) and designed with Apple's premium aesthetic in mind, this project showcases advanced frontend development techniques including **3D CSS transforms**, **YouTube IFrame API integration**, and **scroll-triggered animations**.

### ✨ Key Highlights

- 🎵 **Interactive 3D Music Player** - Apple CoverFlow-inspired carousel with drag interactions and YouTube API integration
- 🎮 **4 Game Showcase Pages** - Dedicated pages for Sonic Adventure, Jet Set Radio, Tony Hawk's Pro Skater 2, and Marvel vs. Capcom
- 📱 **Fully Responsive** - Mobile-first design with touch-optimized interactions across all breakpoints
- ⚡ **Performance Optimized** - AVIF/WebP images (60%+ compression), Vite code-splitting, hardware-accelerated 3D transforms
- 🎨 **Custom Design System** - Authentic Dreamcast colors (#F97308, #093D90) with game-specific palettes
- 🔍 **Advanced Search** - Debounced search (500ms) with keyboard navigation across 70+ items
- 🎬 **Smooth Animations** - Scroll-triggered animations via Motion library with staggered entrance sequences

---

## 🎯 Features

### 🎵 Interactive Music Player
A technically sophisticated music streaming experience featuring:
- **3D CoverFlow Carousel** - Apple-inspired album art display with 55° perspective transforms and dynamic z-index stacking
- **YouTube API Integration** - Real-time playback control with comprehensive error handling (5 error code handlers)
- **Drag Interactions** - Mouse and touch gesture support with 50px threshold detection
- **Progress Tracking** - Live playback position with formatted time display (M:SS)
- **Smart Search** - Debounced filtering across 18+ game soundtracks (Jet Set Radio, Sonic Adventure, Crazy Taxi, and more)
- **Auto-Advance** - Seamless track progression with auto-skip for restricted content

### 🎮 Game Showcase Pages
Four dedicated pages celebrating Dreamcast's legendary titles:
- **Rich Media Galleries** - Character artwork, gameplay screenshots, 3D renders
- **Product Packaging** - Front covers, back covers, disc art, and unboxing visuals
- **Story & Gameplay** - Comprehensive game overviews and features
- **Custom Color Schemes** - Unique palettes honoring each game's visual identity
  - Sonic Adventure: Blues (#0C1E65) and Reds (#E50308)
  - Jet Set Radio: Vibrant purples (#583EAD) and yellows (#EEEE00)
  - Tony Hawk's Pro Skater 2: Gritty blacks and rust tones (#C36124)
  - Marvel vs. Capcom: Comic-inspired reds (#AF271D) and blues (#373C8C)

### 🕹️ VMU (Visual Memory Unit) Experience
- **VMU Overview Page** - Save data management, LCD screen, portability features
- **Mini-Games Showcase** - 10+ VMU mini-games with descriptions and controls
- **Technical Specifications** - Storage capacity, dimensions, battery life

### 🖼️ Responsive Gallery
- **Masonry Layout** - Adaptive grid system with React Responsive Masonry
- **Lightbox Modal** - Full-screen viewing with keyboard shortcuts (Escape to close)
- **Category Filtering** - Filter by console, games, accessories
- **150+ Optimized Images** - AVIF (63 files) and WebP formats for fast loading

### 🌐 Global Navigation & Search
- **Multi-Level Dropdowns** - Category-organized navigation (Games, Media, Online)
- **Advanced Search** - Real-time filtering with debouncing to prevent excessive re-renders
- **Keyboard Shortcuts** - Arrow key navigation, Enter to select, Escape to close
- **Mobile Menu** - Collapsible accordion with touch-optimized hit areas
- **Sticky Header** - Fixed positioning with backdrop blur effect

### 📜 Historical Content
- **Dreamcast Timeline** - Console history from announcement to discontinuation
- **SegaNet Documentation** - Online gaming service, connected games, hardware setup
- **Technical Specifications** - CPU, GPU, memory, storage, and connectivity details

---

## 🚀 Tech Stack

### Core Technologies
- **React 18.3.1** - Modern hooks-based architecture with Context API for state management
- **TypeScript** - Full type safety across **83 TypeScript files** (~15,000 lines of code)
- **Vite 6.3.5** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS 4.1.12** - Utility-first CSS framework with custom theme variables
- **Motion 12.23.24** - Advanced animation library (successor to Framer Motion)

### UI Component Libraries
- **Radix UI** - 40+ accessible, unstyled primitive components (Accordion, Dialog, Dropdown, Tabs, Slider, Select, Navigation Menu)
- **Shadcn UI** - 46 pre-built custom components with Tailwind styling
- **Lucide React 0.487.0** - Modern icon library with 1000+ SVG icons
- **Embla Carousel 8.6.0** - Touch-friendly carousel with native feel

### Additional Libraries
- **React Hook Form 7.55.0** - Performant form validation and state management
- **Sonner 2.0.3** - Beautiful toast notification system
- **Class Variance Authority 0.7.1** - Component variant management
- **Tailwind Merge 3.2.0** - Intelligent Tailwind class merging utility
- **clsx 2.1.1** - Conditional className utility
- **next-themes 0.4.6** - Theme management system

### APIs & Integration
- **YouTube IFrame API** - Music streaming with error handling and state management
- **Intersection Observer API** - Scroll-triggered animations and lazy loading

---

## 🎨 Design System

### Color Palette

**Authentic Dreamcast Branding:**
- **Dreamcast Orange** - `#F97308` (Primary CTAs, highlights, icons)
- **Dreamcast Blue** - `#093D90` (Secondary accents, headers, navigation)
- **Pure White** - `#FFFFFF` (Primary background, content areas)

**Game-Specific Themes:**
Each game page features a custom color palette inspired by the game's visual identity, creating distinct atmospheres while maintaining cohesive navigation.

### Typography
- **Responsive Scaling** - `clamp()` function for fluid typography (e.g., `clamp(48px, 7vw, 96px)`)
- **Clear Hierarchy** - Consistent font weights (500, 600, 700, 800) and letter spacing
- **Custom Variables** - Controlled via `theme.css` for consistency across components

### Visual Effects
- **Glass Morphism** - Backdrop blur effects on modals and search interfaces
- **3D Transforms** - Hardware-accelerated CSS transforms with `preserve-3d`
- **Gradient Overlays** - Subtle gradients for depth and visual interest
- **Smooth Transitions** - Cubic-bezier easing for natural motion

---

## 🏗️ Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Main routing and navigation context
│   │   ├── components/
│   │   │   ├── GlobalHeader.tsx         # Site navigation with search (571 lines)
│   │   │   ├── HeroSection.tsx          # Landing page hero
│   │   │   ├── DesignSection.tsx        # Console design showcase
│   │   │   ├── PerformanceSection.tsx   # Technical capabilities
│   │   │   ├── VMUSection.tsx           # Visual Memory Unit features
│   │   │   ├── TimelineSection.tsx      # Dreamcast history
│   │   │   ├── seganet/                 # SegaNet-specific components (6 files)
│   │   │   └── ui/                      # Shadcn UI components (46 files)
│   │   ├── pages/
│   │   │   ├── MusicPlayer.tsx          # 3D CoverFlow music player (725 lines)
│   │   │   ├── Gallery.tsx              # Masonry gallery with lightbox (394 lines)
│   │   │   ├── SonicAdventure.tsx       # Sonic Adventure game page (27KB)
│   │   │   ├── JetSetRadio.tsx          # Jet Set Radio game page (39KB)
│   │   │   ├── MarvelVsCapcom.tsx       # Marvel vs. Capcom page (44KB)
│   │   │   ├── TonyHawk.tsx             # Tony Hawk's Pro Skater 2 page (37KB)
│   │   │   ├── VMU.tsx                  # VMU dedicated page
│   │   │   ├── VMUMiniGames.tsx         # VMU mini-games showcase
│   │   │   ├── Accessories.tsx          # Accessories catalog
│   │   │   ├── SegaNet.tsx              # SegaNet dedicated page
│   │   │   └── Online.tsx               # Online gaming page
│   │   └── data/
│   │       └── soundtracks.ts           # Game soundtrack metadata with YouTube IDs
│   └── styles/
│       ├── theme.css                    # CSS custom properties & color tokens
│       ├── index.css                    # Global styles & scrollbar customization
│       ├── tailwind.css                 # Tailwind directives
│       └── fonts.css                    # Font definitions
├── guidelines/
│   └── Guidelines.md                    # Design system documentation
├── projectspecifications.md             # Comprehensive technical documentation
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite configuration
└── postcss.config.mjs                   # PostCSS configuration
```

### Key Statistics
- **83 TypeScript files** - ~15,000 lines of code
- **11 pages** - Complete multi-page application experience
- **80+ components** - Modular, reusable component architecture
- **153 image assets** - AVIF, WebP, PNG optimized formats

---

## 💡 Technical Highlights

### 3D CoverFlow Algorithm
**Location:** `src/app/pages/MusicPlayer.tsx`

Implements Apple-inspired 3D carousel using advanced CSS transforms:

```typescript
// Perspective transform calculations
const offset = index - currentIndex + (isDragging ? dragOffset / 100 : 0)
const distance = Math.abs(offset)
const scale = Math.max(0.8, 1.15 - (distance * 0.04))
const zIndex = offset === 0 ? 1000 : 1000 - distance * 10

// 3D rotation and translation
transform: `
  rotateY(${offset * 55}deg)
  translateZ(${offset === 0 ? 80 : -distance * 50}px)
  scale(${scale})
`
```

**Features:**
- 55° rotation angle per card offset
- Dynamic scaling based on distance from center (0.8 - 1.15)
- Z-index layering algorithm (1000 for center, decreasing by distance)
- 1500px perspective depth for realistic 3D effect

### YouTube API Integration
**Location:** `src/app/pages/MusicPlayer.tsx`

Comprehensive YouTube IFrame API integration with robust error handling:

**State Management:**
- 7 critical states: `isReady`, `isPlaying`, `isLoading`, `currentTime`, `duration`, `error`, `selectedTrack`
- Player instance stored in `useRef` for lifecycle management
- 500ms interval for real-time progress tracking

**Error Handling:**
```typescript
case 2:   // Invalid video ID → Auto-skip
case 100: // Video not found → Auto-skip
case 101: // Embedding disabled (owner) → Auto-skip with message
case 150: // Embedding disabled (request) → Auto-skip with message
case 5:   // HTML5 player error → Display error
```

**API Methods:**
- `playVideo()`, `pauseVideo()`, `stopVideo()` - Playback control
- `loadVideoById(videoId)` - Dynamic track loading
- `getCurrentTime()`, `getDuration()` - Progress tracking
- State detection: `PLAYING`, `PAUSED`, `ENDED`, `BUFFERING`, `CUED`

### Performance Optimizations

1. **Modern Image Formats**
   - AVIF (63 files) - 50-80% smaller than JPEG/PNG
   - WebP fallbacks for browser compatibility
   - Optimized asset pipeline via Vite

2. **Code Splitting**
   - Automatic route-based splitting via Vite
   - Lazy component loading
   - Tree-shaking for unused code elimination

3. **Debounced Event Handlers**
   - Search: 500ms delay prevents excessive filtering
   - Scroll: Throttled for smooth performance
   - Drag: 50px threshold prevents accidental swipes

4. **Hardware-Accelerated Transforms**
   - CSS 3D transforms with `transform: translate3d()`
   - GPU acceleration via `preserve-3d`
   - Smooth 60fps animations

5. **Single Player Instance**
   - YouTube player initialized once
   - Videos swapped via `loadVideoById()` vs recreation
   - Cleanup functions for intervals/timeouts

### Responsive Design Strategy

**Breakpoints:**
- **Mobile**: < 768px (stacked layouts, touch-optimized)
- **Tablet**: 768px - 1024px (hybrid layouts)
- **Desktop**: > 1024px (full grid layouts, hover states)

**Mobile Optimizations:**
- Touch event handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`)
- Conditional rendering based on viewport width
- Album size reduction: 200px → 170px on mobile
- Spacing adjustments: 160px → 120px gap on mobile
- Collapsible navigation with accordion sections

### Navigation System

**Hash-Based Routing:**
Custom implementation using `window.location.hash` with React Context:

```typescript
export const NavigationContext = createContext({
  navigate: (path: string) => {},
});
```

**11 Routes:**
- `#home` - Main Dreamcast landing page
- `#sonic-adventure` - Sonic Adventure game page
- `#jet-set-radio` - Jet Set Radio game page
- `#tony-hawk` - Tony Hawk's Pro Skater 2 page
- `#marvel-vs-capcom` - Marvel vs. Capcom page
- `#vmu` - VMU dedicated page
- `#vmu-mini-games` - VMU mini-games page
- `#accessories` - Accessories catalog
- `#online-seganet` - Online gaming page
- `#music-player` - Interactive music player
- `#gallery` - Media gallery

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sega-dreamcast-legacy.git

# Navigate to project directory
cd sega-dreamcast-legacy

# Install dependencies
npm install
```

### Development

```bash
# Start development server (default: http://localhost:5173)
npm run dev
```

The application will open with Hot Module Replacement (HMR) enabled. Changes to source files will automatically reload in the browser.

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The production build will be output to the `dist/` directory, optimized with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Compressed assets (AVIF/WebP)
- Tree-shaking for minimal bundle size

---

## 📱 Responsive Design

The application is fully responsive with a mobile-first approach:

### Features by Breakpoint

**Mobile (< 768px):**
- Collapsible hamburger navigation
- Stacked content layouts
- Touch-optimized interactions (50px minimum hit areas)
- Reduced album art size (170px)
- Single-column galleries

**Tablet (768px - 1024px):**
- Hybrid layouts with selective stacking
- Dropdown navigation menus
- Two-column galleries
- Optimized spacing

**Desktop (> 1024px):**
- Full multi-column layouts
- Hover states and transitions
- Large album art (200px)
- Maximum width constraints (980px - 1400px)
- Multi-column galleries with masonry

### Touch Optimizations
- Touch event handlers for drag interactions
- Prevent default scroll during swipe
- Visual feedback for touch actions
- Larger tap targets for mobile devices

---

## 📚 Documentation

For detailed technical documentation, architecture decisions, and implementation details, see:

- **[Project Specifications](projectspecifications.md)** - Comprehensive technical documentation
- **[Design Guidelines](guidelines/Guidelines.md)** - Design system and color guidelines

---

## 🎓 Learning Highlights

This project demonstrates proficiency in:

### Frontend Development
- Modern React patterns (hooks, context, functional components)
- TypeScript for type-safe development
- Component-driven architecture
- State management strategies

### UI/UX Design
- Responsive design principles
- Mobile-first development
- Accessibility considerations (ARIA, keyboard navigation)
- Design system implementation

### Performance Engineering
- Image optimization strategies
- Code splitting and lazy loading
- Debouncing and throttling
- Hardware-accelerated animations

### API Integration
- YouTube IFrame API
- Error handling and recovery
- Asynchronous state management
- External service integration

### Build Tools & DevOps
- Vite configuration and optimization
- Modern CSS (Tailwind, CSS Variables, 3D Transforms)
- Asset pipeline management
- Production build optimization

---

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

---

## 👨‍💻 Author

**Torien Mitchell**

A passionate frontend developer with expertise in React, TypeScript, and modern web technologies. This project showcases advanced UI/UX implementation, performance optimization, and attention to detail in recreating premium product experiences.

---

<div align="center">

**Built with ❤️ for the Sega Dreamcast community**

⭐ Star this repo if you found it interesting!

</div>
