# Design Document (DD.MD)

## Project Overview
A minimalist personal portfolio website built with **React**, **TypeScript**, **Vue**, and **TailwindCSS**, showcasing achievements, projects, and educational background in **game development** and **web development**. The design emphasizes simplicity, elegance, and a glassmorphism aesthetic with limited color usage (black, white, and one accent color). A dark mode version will be available.

The website will be hosted on **GitHub Pages** for easy public access and maintenance.

---

## Design Goals
- **Aesthetic**: Minimalist, clean, and balanced use of negative space.
- **Color Scheme**: Black, white, and one accent color (e.g., soft cyan or amber).
- **Typography**: Simple, readable sans-serif font (e.g., Inter or Manrope).
- **Glassmorphism**: Subtle transparency and blur effects for panels and cards.
- **Dark Mode**: Smooth toggle with preserved readability and depth.
- **Responsiveness**: Optimized for mobile, tablet, and desktop screens.
- **Performance**: Lightweight, fast-loading assets.

---

## Structure
### 1. Header
- Minimal navigation bar.
- Logo or initials (text only).
- Theme toggle (light/dark).

### 2. Hero Section
- Brief personal introduction (name, title, short tagline).
- Minimal animated background (optional gradient or particle effect).
- Links to GitHub, LinkedIn, and Itch.io.

### 3. Game Development Projects
- Grid layout of cards with:
  - Project title
  - Thumbnail image
  - Short description
  - Technologies used
  - Link to demo or repository
  - Date of completion

### 4. Web Development Projects
- Similar card structure as Game Dev section.
- Emphasis on frontend design, UX/UI, and functionality.
- Links to live websites or GitHub repos.

### 5. Competitions & Achievements
- Timeline or card layout displaying:
  - Event name
  - Role or award
  - Short description
  - Date
  - Optional logo or photo

### 6. Education
- Compact list with:
  - Institution name
  - Degree or field
  - Duration
  - Notable achievements or GPA (optional)

### 7. Footer
- Minimal copyright.
- Social media icons.
- Subtle gradient or glass panel background.

---

## Technical Stack
- **Frontend Framework**: React (TypeScript)
- **Styling**: TailwindCSS with custom theme and glassmorphism utilities
- **Dark Mode**: Tailwind `dark:` variants and local storage state persistence
- **Routing**: React Router
- **Deployment**: GitHub Pages
- **Image Optimization**: Next-gen formats (WebP/AVIF)
- **Build Tool**: Vite or Create React App with TypeScript template


## Example Data Structure
```ts
// gameProjects.ts
// gameProjects.ts
export const gameProjects = [
  {
    title: "Chicklet",
    description: "A pixel-art puzzle platformer set inside a multidimensional machine.",
    images: [
      "/assets/chicklet_1.png",
      "/assets/chicklet_2.png"
    ],
    links: [
      { type: "itchio", url: "https://itch.io/chicklet" },
      { type: "github", url: "https://github.com/latifyilmaz/chicklet" },
      { type: "video", url: "https://youtu.be/example" }
    ],
    technologies: ["Unity", "C#", "Pixel Art"],
    date: "2024-08"
  },
  {
    title: "Neon Trail",
    description: "A minimalist endless runner with dynamic lighting and dynamic color transitions.",
    images: [
      "/assets/neontrail_1.png",
      "/assets/neontrail_2.png"
    ],
    links: [
      { type: "itchio", url: "https://itch.io/neontrail" },
      { type: "github", url: "https://github.com/latifyilmaz/neontrail" }
    ],
    technologies: ["Godot", "GDScript"],
    date: "2023-05"
  }
];

### Animation & Interaction

Smooth fade-in transitions using Framer Motion.
Hover effects: light glow and slight glass blur intensification.
Theme toggle with animated sun/moon icons.
Lazy-loaded images for performance.

### Deployment
Continuous deployment via GitHub Actions.
Custom domain optional via CNAME.
Automatic build with Vite → GitHub Pages.



