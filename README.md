# Personal Portfolio

A minimalist personal portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion. Features a glassmorphism aesthetic with dark mode support.

## 🚀 Features

- ✨ Minimalist glassmorphism design
- 🌓 Dark/Light mode toggle with system preference detection
- 🎨 Gradient accents and smooth animations
- 📱 Fully responsive layout
- ⚡ Built with Vite for optimal performance
- 🎮 Separate sections for Game and Web Development projects
- 🏆 Achievements and Education showcase
- 🔗 Social media integration

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/latifyilmaz/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `gameProjects.ts` - Add your game development projects
- `webProjects.ts` - Add your web development projects
- `achievements.ts` - Update your achievements and awards
- `education.ts` - Update your educational background
- `socialLinks.ts` - Update your social media links

### Change Accent Color

Edit `tailwind.config.js` to change the accent color:
```js
colors: {
  accent: {
    DEFAULT: '#06b6d4', // Change this
    light: '#22d3ee',
    dark: '#0891b2',
  }
}
```

### Add Project Images

Place your project images in `public/assets/` and reference them in the data files.

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── ProjectCard.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── GameProjects.tsx
│   ├── WebProjects.tsx
│   ├── Achievements.tsx
│   └── Education.tsx
├── data/            # Data files
│   ├── gameProjects.ts
│   ├── webProjects.ts
│   ├── achievements.ts
│   ├── education.ts
│   └── socialLinks.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── hooks/           # Custom React hooks
│   └── useTheme.ts
├── App.tsx          # Main App component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io`

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Latif Yılmaz**

- GitHub: [@latifyilmaz](https://github.com/latifyilmaz)
- LinkedIn: [latifyilmaz](https://linkedin.com/in/latifyilmaz)
- Itch.io: [latifyilmaz](https://latifyilmaz.itch.io)

---

Made with ❤️ using React + TypeScript + TailwindCSS
