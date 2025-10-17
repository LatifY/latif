import { Project } from '../types';

export const webProjects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A minimalist portfolio website with glassmorphism design and dark mode.',
    images: ['/assets/portfolio_1.png'],
    links: [
      { type: 'live', url: 'https://latifyilmaz.github.io' },
      { type: 'github', url: 'https://github.com/latifyilmaz/portfolio' }
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    date: '2025-10',
    category: 'web'
  }
];
