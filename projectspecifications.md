# Sega Dreamcast - Premium Landing Page

A premium, Apple-inspired product landing page for the legendary Sega Dreamcast console that bridges late-90s nostalgia with modern web design aesthetics. Built with React, TypeScript, and Tailwind CSS, this project showcases the Dreamcast's revolutionary features, iconic games, and lasting legacy through immersive storytelling and interactive experiences.

[![Live Demo](#)](#) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)

---

## 🎮 Overview

The Sega Dreamcast Landing Page is a historical and design tribute to one of gaming's most innovative consoles. This project recreates the premium feel of modern Apple product pages while celebrating the unique identity of the Dreamcast and its legendary game library. The site features smooth scrolling sections, cinematic animations, comprehensive game showcases, and detailed technical specifications—all presented with pixel-perfect attention to detail.

### Key Features

- **Multi-Page Architecture**: Comprehensive navigation system with 11+ dedicated pages
- **Iconic Game Showcases**: Individual landing pages for Sonic Adventure, Jet Set Radio, Tony Hawk's Pro Skater 2, and Marvel vs. Capcom
- **Interactive Media Experiences**: Built-in music player, gallery system, and VMU simulator
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Motion (formerly Framer Motion) for fluid transitions
- **Custom Color Palettes**: Game-specific color schemes that honor each title's unique aesthetic
- **Historical Accuracy**: Authentic imagery, specifications, and marketing materials

---

## 🚀 Tech Stack

### Core Technologies

- **React 18.3.1** - Modern React with hooks and context API
- **TypeScript** - Type-safe component architecture
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework with custom theme
- **Motion 12.23.24** - Advanced animation library (successor to Framer Motion)

### UI Component Libraries

- **Radix UI** - Unstyled, accessible component primitives
  - Accordion, Dialog, Dropdown Menu, Navigation Menu, Tabs, and 15+ more
- **Lucide React 0.487.0** - Modern icon library with 1000+ icons
- **Material-UI 7.3.5** - Select Material Design components
- **Recharts 2.15.2** - Composable charting library
- **React Slick 0.31.0** - Carousel/slider component
- **Embla Carousel 8.6.0** - Advanced carousel with native feel

### Additional Libraries

- **React Hook Form 7.55.0** - Performant form validation
- **React DnD 16.0.1** - Drag-and-drop interactions
- **React Responsive Masonry 2.7.1** - Responsive masonry layouts
- **Sonner 2.0.3** - Toast notification system
- **Class Variance Authority 0.7.1** - Component variant management
- **Tailwind Merge 3.2.0** - Intelligent class merging utility

---

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Main app with routing logic
│   │   ├── components/
│   │   │   ├── GlobalHeader.tsx         # Site-wide navigation header
│   │   │   ├── GameFooter.tsx           # Reusable footer component
│   │   │   ├── HeroSection.tsx          # Landing page hero
│   │   │   ├── DesignSection.tsx        # Console design showcase
│   │   │   ├── PackagingSection.tsx     # Product packaging display
│   │   │   ├── PerformanceSection.tsx   # Technical performance metrics
│   │   │   ├── GraphicsSection.tsx      # Graphics capabilities
│   │   │   ├── OnlineSection.tsx        # Online gaming features
│   │   │   ├── VMUSection.tsx           # Visual Memory Unit info
│   │   │   ├── SpecsSection.tsx         # Technical specifications
│   │   │   ├── TimelineSection.tsx      # Dreamcast history timeline
│   │   │   ├── GameNavigation.tsx       # Game page navigation
│   │   │   ├── seganet/                 # SegaNet-specific components
│   │   │   │   ├── SegaNetHero.tsx
│   │   │   │   ├── WhatIsSegaNet.tsx
│   │   │   │   ├── HowItWorked.tsx
│   │   │   │   ├── ConnectedGames.tsx
│   │   │   │   ├── HardwareSetup.tsx
│   │   │   │   └── LegacyImpact.tsx
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx # Image component for production
│   │   │   └── ui/                      # Shadcn UI components (40+ files)
│   │   ├── pages/
│   │   │   ├── SonicAdventure.tsx       # Sonic Adventure game page
│   │   │   ├── JetSetRadio.tsx          # Jet Set Radio game page
│   │   │   ├── TonyHawk.tsx             # Tony Hawk's Pro Skater 2 page
│   │   │   ├── MarvelVsCapcom.tsx       # Marvel vs. Capcom page
│   │   │   ├── VMU.tsx                  # VMU dedicated page
│   │   │   ├── VMUMiniGames.tsx         # VMU mini-games showcase
│   │   │   ├── Online.tsx               # Online gaming page
│   │   │   ├── SegaNet.tsx              # SegaNet dedicated page
│   │   │   ├── MusicPlayer.tsx          # Interactive music player
│   │   │   ├── Accessories.tsx          # Accessories catalog
│   │   │   └── Gallery.tsx              # Media gallery
│   │   └── data/
│   │       └── soundtracks.ts           # Game soundtrack metadata
│   └── styles/
│       ├── index.css                    # Main CSS entry point
│       ├── theme.css                    # Custom CSS variables & tokens
│       ├── fonts.css                    # Font imports
│       └── tailwind.css                 # Tailwind imports
├── guidelines/
│   └── Guidelines.md                    # Design system & color guidelines
├── ATTRIBUTIONS.md                      # Image & asset credits
├── projectspecifications.md             # This file
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite configuration
└── postcss.config.mjs                   # PostCSS configuration
```

---

## 🎨 Design System

### Global Color Palette

The site uses authentic Dreamcast brand colors as its foundation:

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Pure White** | `#FFFFFF` | Primary background, content areas |
| **Dreamcast Orange** | `#F97308` | Primary CTA buttons, icons, highlights |
| **Dreamcast Blue** | `#093D90` | Secondary accents, headers, navigation |

### Game-Specific Palettes

Each game page features a custom color palette inspired by the game's visual identity:

#### Sonic Adventure
- White/Off-White: `#FEFEFE`
- Deep Blue: `#0C1E65`
- Red: `#E50308`
- Light Blue: `#7FBFFF`

*Aesthetic: Bright, clean, adventurous tones reflecting optimism and energy*

#### Jet Set Radio
- Purple: `#583EAD`
- Yellow: `#EEEE00`
- Lime Green: `#8DBB2E`
- Orange: `#EDB916`

*Aesthetic: High-contrast street-art palette reflecting rebellion and urban culture*

#### Tony Hawk's Pro Skater 2
- Black: `#000000`
- Brown/Rust: `#C36124`
- Off-White: `#FBFBFB`
- Blue: `#6CA1D5`

*Aesthetic: Muted, gritty tones reflecting skate culture and late-90s realism*

#### Marvel vs. Capcom
- Red: `#AF271D`
- Blue: `#373C8C`
- Purple: `#581D75`

*Aesthetic: High-energy dramatic colors inspired by comic book contrast*

### Typography Principles

- **No Tailwind Typography Classes by Default**: Font sizes, weights, and line-heights are controlled via `/src/styles/theme.css` to maintain consistency
- **Explicit Overrides Only**: Typography utilities only used when explicitly requested
- **Hierarchy**: Clear visual hierarchy with responsive scaling

---

## 🏗️ Architecture & Patterns

### Navigation System

The app uses a custom hash-based routing system with React Context:

```typescript
export const NavigationContext = createContext({
  navigate: (path: string) => {},
});
```

**Routes:**
- `#home` - Main Dreamcast landing page
- `#sonic-adventure` - Sonic Adventure game page
- `#jet-set-radio` - Jet Set Radio game page
- `#tony-hawk` - Tony Hawk's Pro Skater 2 page
- `#marvel-vs-capcom` - Marvel vs. Capcom page
- `#vmu` - VMU dedicated page
- `#vmu-mini-games` - VMU mini-games page
- `#seganet` - SegaNet page
- `#online` - Online gaming page
- `#music-player` - Music player page
- `#accessories` - Accessories page
- `#gallery` - Media gallery page

### Image Handling

**Development vs. Production:**

Images are imported using Figma's special `figma:asset` scheme:

```typescript
import image from "figma:asset/HASH.png";
```

For production builds, all `<img>` tags must use the `ImageWithFallback` component:

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={image} 
  alt="Description"
  className="..."
/>
```

**SVG Handling:**

SVGs are stored as files in `/src/imports/` and imported via relative paths:

```typescript
import svgPaths from "../imports/svg-HASH";
```

### Component Patterns

- **Composable Sections**: Each landing page section is a self-contained component
- **Shared Components**: `GlobalHeader` and `GameFooter` provide consistent navigation
- **Context for State**: Navigation context provides routing throughout the app
- **Mobile-First Responsive**: Conditional rendering and responsive classes for all screen sizes

---

## 🎯 Key Features Breakdown

### 1. Global Navigation Header
- Dropdown menus for Games, Media, and Online categories
- Sticky positioning with background blur
- Seamless routing between all pages
- Mobile-responsive hamburger menu

### 2. Main Landing Page (Home)
- Hero section with cinematic product photography
- Design showcase highlighting console aesthetics
- Packaging presentation with 3D-style interactions
- Performance metrics and graphics capabilities
- Online gaming features (SegaNet)
- VMU showcase with interactive elements
- Comprehensive technical specifications
- Historical timeline from announcement to discontinuation

### 3. Game Pages
Each game page includes:
- Full-screen hero with gameplay footage aesthetics
- Story and gameplay overview
- Character showcases and galleries
- Music/soundtrack players
- Media galleries (screenshots, concept art)
- Packaging displays (front cover, back cover, disc)
- Game-specific color themes and typography

### 4. Interactive Features
- **Music Player**: Stream soundtracks from Dreamcast games with album art and controls
- **Gallery System**: Categorized media library with lightbox functionality
- **VMU Simulator**: Interactive VMU interface with mini-game information
- **Smooth Scrolling**: Parallax effects and scroll-triggered animations

### 5. Responsive Design
- Desktop-optimized primary experience
- Tablet layouts with adjusted spacing
- Mobile-friendly navigation and content reflow
- Touch-optimized interactions

---

---

## 🛠️ Development Guidelines

### Adding New Images

All images must follow the Figma asset import pattern:

```typescript
// ✅ Correct - Raster images
import img from "figma:asset/abc123.png";

// ✅ Correct - SVG vectors
import svgPaths from "../imports/svg-abc123";

// ❌ Incorrect - Never use relative paths for figma:asset
import img from "../imports/figma:asset/abc123.png";
```

See `/HOW_TO_ADD_IMAGES.md` for detailed instructions.

### Image Component Usage

Always use `ImageWithFallback` for production:

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={imageSrc}
  alt="Descriptive alt text"
  className="w-full h-auto"
/>
```

### Adding New Routes

1. Create page component in `/src/app/pages/`
2. Import in `/src/app/App.tsx`
3. Add route condition in App component
4. Update navigation mappings in `GlobalHeader.tsx` and `GameFooter.tsx`

### Styling Guidelines

- Use Tailwind utilities for layout, spacing, and positioning
- Avoid typography utilities (text-xl, font-bold, etc.) unless explicitly overriding
- Reference theme tokens from `/src/styles/theme.css`
- Game pages can override colors with inline styles or custom CSS
- Maintain accessibility with sufficient color contrast

---

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation menu on mobile
- Stacked layouts for narrow viewports
- Touch-optimized interactive elements
- Optimized image sizes for performance

---

## 🧩 Component Library

The project includes 40+ pre-built UI components from Shadcn UI and Radix:

- Accordion, Alert, Alert Dialog
- Avatar, Badge, Breadcrumb
- Button, Calendar, Card
- Carousel, Chart, Checkbox
- Collapsible, Command, Context Menu
- Dialog, Drawer, Dropdown Menu
- Form, Hover Card, Input, Label
- Menubar, Navigation Menu, Pagination
- Popover, Progress, Radio Group
- Resizable, Scroll Area, Select
- Separator, Sheet, Sidebar, Skeleton
- Slider, Switch, Table, Tabs
- Textarea, Toggle, Tooltip

All components are fully typed with TypeScript and customizable via Tailwind classes.

---

## 🎵 Music Player - Technical Deep Dive

The Music Player is one of the most technically sophisticated features of the Dreamcast landing page, combining the YouTube IFrame API, 3D CSS transforms, custom state management, and Apple CoverFlow-inspired UI to create an immersive audio streaming experience.

### Architecture Overview

**Component Location**: `/src/app/pages/MusicPlayer.tsx`  
**Data Source**: `/src/app/data/soundtracks.ts`  
**Primary Dependencies**:
- YouTube IFrame API (dynamically loaded)
- Motion/React (animations)
- Lucide React (icons)
- React hooks (useState, useEffect, useRef, useContext)

### Data Structure

**Track Interface**:
```typescript
interface Track {
  id: string;              // Unique identifier (e.g., "jsr-1")
  gameTitle: string;       // Game name (e.g., "Jet Set Radio")
  trackName: string;       // Song title (e.g., "Let Mom Sleep")
  youtubeId: string;       // YouTube video ID for streaming
  coverArt: string;        // Figma asset hash for album art
}
```

**Current Library**: 18 tracks across 7 games:
- Jet Set Radio (4 tracks)
- Sonic Adventure (3 tracks)
- Crazy Taxi (2 tracks)
- Tony Hawk's Pro Skater 2 (2 tracks)
- Skies of Arcadia (2 tracks)
- Marvel vs. Capcom (2 tracks)
- Shenmue (2 tracks)

### YouTube IFrame API Integration

#### Dynamic API Loading
The player dynamically loads the YouTube IFrame API on component mount:

```javascript
useEffect(() => {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }
  
  window.onYouTubeIframeAPIReady = () => {
    initializePlayer();
  };
}, []);
```

#### Player Initialization
```javascript
playerRef.current = new window.YT.Player('youtube-player', {
  height: '0',           // Hidden player (audio-only)
  width: '0',
  videoId: selectedTrack.youtubeId,
  playerVars: {
    autoplay: 0,         // Manual playback control
    controls: 0,         // Hide YouTube controls
    modestbranding: 1,   // Minimal YouTube branding
    rel: 0,              // Don't show related videos
    showinfo: 0,         // Hide video info
    iv_load_policy: 3,   // Hide annotations
    fs: 0,               // Disable fullscreen
    playsinline: 1,      // Inline playback on mobile
  },
  events: {
    onReady: handlePlayerReady,
    onStateChange: handlePlayerStateChange,
    onError: handlePlayerError,
  },
});
```

#### State Management

The player tracks 7 critical states:

1. **isReady** - YouTube API loaded and player initialized
2. **isPlaying** - Current playback status
3. **isLoading** - Buffering/loading state
4. **currentTime** - Playback position (updated every 500ms)
5. **duration** - Total track length
6. **error** - Error messages (e.g., embedding blocked)
7. **selectedTrack** - Currently selected track object

#### Player State Handling

**Play States** (YouTube PlayerState enum):
- `PLAYING` (1) → Start progress tracking, show pause button
- `PAUSED` (2) → Stop progress tracking, show play button
- `ENDED` (0) → Auto-advance to next track
- `BUFFERING` (3) → Show loading spinner
- `CUED` (5) → Video loaded and ready

**Error Handling**:
```javascript
switch (errorCode) {
  case 2:   // Invalid video ID
  case 100: // Video not found
  case 101: // Embedding disabled by uploader
  case 150: // Same as 101
    // Auto-skip to next track after 2 seconds
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSelectedTrack(filteredTracks[currentIndex + 1]);
    }, 2000);
    break;
}
```

#### Progress Tracking
Real-time progress updates using interval polling:

```javascript
const startProgressTracking = () => {
  progressIntervalRef.current = window.setInterval(() => {
    if (playerRef.current && playerRef.current.getCurrentTime) {
      const time = playerRef.current.getCurrentTime();
      setCurrentTime(time);
    }
  }, 500); // Update every 500ms
};
```

### User Interface Components

#### 1. Apple CoverFlow 3D Carousel

**Technology**: CSS 3D Transforms + React State

**Key Features**:
- Perspective projection: `perspective: 1500px`
- Individual card transforms with rotation, translation, and scaling
- Dynamic z-index stacking based on position
- Smooth transitions with cubic-bezier easing

**Transform Calculations**:
```javascript
const getTransform = (index: number) => {
  const offset = index - currentIndex + (isDragging ? dragOffset / 100 : 0);
  const ROTATION = 55; // degrees
  
  if (Math.abs(offset) < 0.1) {
    // Center card
    return `translateX(0px) translateZ(300px) rotateY(0deg) scale(1.3)`;
  } else if (offset < 0) {
    // Left cards
    const distance = Math.abs(offset);
    const x = -spacing * distance;      // Horizontal position
    const z = -80 * distance;           // Depth (further back)
    const scale = Math.max(0.8, 1.15 - (distance * 0.04));
    return `translateX(${x}px) translateZ(${z}px) rotateY(${ROTATION}deg) scale(${scale})`;
  } else {
    // Right cards (mirror of left)
    // ... similar logic
  }
};
```

**Visual Effects**:
- **Glass reflection**: Gradient overlay simulating glass surface
- **iOS-style reflection**: Mirrored album art below each card with mask gradient
- **Floor highlight**: Subtle glow beneath center card
- **Active indicator**: Orange border + pulsing dot on selected track

#### 2. Touch & Mouse Interactions

**Drag Detection**:
- Mouse: `onMouseDown`, `onMouseMove`, `onMouseUp`
- Touch: `onTouchStart`, `onTouchMove`, `onTouchEnd`
- Threshold: 50px drag distance to trigger card change
- Prevents accidental swipes

**Cursor States**:
- Default: `cursor: grab`
- Dragging: `cursor: grabbing`

#### 3. Search & Filtering

**Debounced Search** (500ms delay):
```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    if (searchQuery.trim() === "") {
      setFilteredTracks(dreamcastSoundtracks);
    } else {
      const filtered = dreamcastSoundtracks.filter(track =>
        track.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.trackName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTracks(filtered);
    }
  }, 500);
  return () => clearTimeout(timer);
}, [searchQuery]);
```

**Search Highlights**:
- Border color changes to Dreamcast Orange when active
- Clear button (X icon) appears when text entered
- Auto-selects first result in filtered list

#### 4. Playback Controls

**Control Bar Layout**:
```
┌─────────────────────────────────────┐
│  [Skip Back]  [Play/Pause]  [Skip Forward]  │
└─────────────────────────────────────┘
```

**Play/Pause Button**:
- Large circular button (80x80px on desktop, 64x64px on mobile)
- White background with orange shadow glow
- States: Play icon, Pause icon, or Loading spinner
- Disabled when player not ready

**Skip Buttons**:
- Disabled at list boundaries (opacity: 0.3)
- Hover effects: scale(1.1) + translate animation
- Active state: scale(0.95)

#### 5. Progress Bar

**Features**:
- Real-time position indicator
- Gradient fill (Dreamcast Orange to light orange)
- Glow effect with blur
- Time display: `current / duration` (format: `M:SS`)

**Visual Design**:
```
[0:00] ████████░░░░░░░░░░░░ [3:45]
       ↑ Gradient orange fill with glow
```

#### 6. Responsive Design

**Breakpoint**: 768px (mobile)

**Mobile Optimizations**:
- Album size: 200px → 170px
- Spacing: 160px → 120px
- Smaller control buttons
- Touch-optimized hit areas
- Prevents default scroll during swipe

### Album Art Management

**Cover Mapping System**:
Due to Figma asset imports, a mapping function translates hash strings to imported images:

```javascript
const getCoverImage = (coverArt: string): string => {
  if (coverArt.includes("f0f3d6ee7655874d9a79350dc5032d5b2eb9fed6")) 
    return jsrCover;
  if (coverArt.includes("c66fde0a24fcdb0e9e2dfd720e405f091100aef9")) 
    return sonicCover;
  // ... 8 total game covers
  return placeholderCover; // Fallback
};
```

**Imported Assets**:
- Jet Set Radio cover
- Sonic Adventure cover
- Marvel vs. Capcom cover
- Crazy Taxi cover
- Skies of Arcadia cover
- Tony Hawk's Pro Skater 2 cover
- Shenmue cover
- Placeholder cover (fallback)

### Performance Optimizations

1. **Single Player Instance**: Player initialized once, videos swapped via `loadVideoById()`
2. **Debounced Search**: Prevents excessive filtering on keystroke
3. **Interval Cleanup**: Progress interval cleared on unmount
4. **Conditional Rendering**: Hidden YouTube player (0x0 dimensions)
5. **CSS Transitions**: Hardware-accelerated 3D transforms
6. **Lazy State Updates**: Only update when values change

### API Methods Used

**YouTube IFrame API Methods**:
- `playVideo()` - Start playback
- `pauseVideo()` - Pause playback
- `stopVideo()` - Stop playback
- `loadVideoById()` - Load new track
- `getCurrentTime()` - Get current position
- `getDuration()` - Get total duration

### Visual Effects Stack

**Layered Effects** (bottom to top):
1. Dark gradient background (`#000 → #0d0d1a → #000`)
2. Reflective floor gradient (white overlay from bottom)
3. Album reflections (mirrored images with mask)
4. Floor highlights (white glow beneath cards)
5. Glass reflections (gradient on cards)
6. Active indicators (orange border + dot)
7. Controls overlay (buttons + progress bar)

### Navigation Integration

**Header Elements**:
- Back button → Navigate to home (`navigate('home')`)
- Dreamcast branding (orange dot + text)
- Battery indicator (decorative, 100%)

**Context Usage**:
```javascript
const { navigate } = useContext(NavigationContext);
```

### Future Enhancement Possibilities

**Potential Features**:
- Shuffle & repeat modes
- Volume control slider
- Playlist creation
- Lyrics display
- Equalizer visualization
- Social sharing
- Download to favorites
- Cross-fade between tracks
- Keyboard shortcuts (space, arrow keys)
- Mini-player mode (persistent across pages)

### Known Limitations

1. **YouTube Restrictions**: Some videos may block embedding (handled with auto-skip)
2. **No Offline Playback**: Requires internet connection
3. **Audio-Only**: Video portion hidden (could be toggled on)
4. **No Scrubbing**: Progress bar is display-only (can be made interactive)
5. **Limited Library**: 18 tracks (expandable via `soundtracks.ts`)

---

## 🛠️ Development Guidelines