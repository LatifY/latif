import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'magara25',
    eventName: 'Magara Jam #25',
    role: 'Participant',
    description: 'A rhythm-based action game developed in 72 hours at Bahçeşehir University’s Galata Campus for Magara Jam 25, created by a team of five and placed among the top 50 games.',
    date: '2025-09"',
    links: [
      { type: 'website', url: 'https://mrinin.itch.io/on-time', label: 'Itch.io' },
    ]
  },
  {
    id: 'turkcell-hackathon',
    eventName: 'Turkcell Hackathon',
    role: 'Winner - 1st Place 🥇',
    description: 'Developed a Roaming Assistant web application for Turkcell, winning first place.',
    date: '2025-08',
    links: [
      { type: 'website', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7363930550539051009/', label: 'LinkedIn' },
    ]
  },
  {
    id: 'magara23',
    eventName: 'Magara Jam #23',
    role: 'Participant',
    description: 'Developed on-site at the Istanbul StartGate office for Magara Jam 23 — a puzzle game created in 72 hours by a team of two, selected among the top 15 games.',
    date: '2023-11',
    links: [
      { type: 'project', url: 'https://store.steampowered.com/app/2887400/Chicklet/', label: 'Steam Page' },
      { type: 'video', url: 'https://youtu.be/tr73-ToqQE0?si=qXEvXIpA2y8WKcuq&t=352', label: 'Watch Video' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=yuvWZZ8vjQo', label: 'Vlog' }
    ]
  },

];
