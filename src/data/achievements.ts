import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: '1',
    eventName: 'Magara Jam #23',
    role: 'Participant',
    description: 'Created a puzzle game in 48 hours with a team of 4 developers.',
    date: '2024-02',
    links: [
      { type: 'project', url: 'https://globalgamejam.org/2024', label: 'View Project' },
      { type: 'video', url: 'https://youtube.com/example', label: 'Watch Video' }
    ]
  },
  {
    id: '2',
    eventName: 'Turkcell Hackathon',
    role: 'Winner - 1st Place 🥇',
    description: 'Developed a Roaming Assistant web application for Turkcell, winning first place.',
    date: '2025-08',
    links: [
      { type: 'website', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7363930550539051009/', label: 'LinkedIn' },
      { type: 'website', url: 'https://hackathon-istanbul.com', label: 'Event Website' }
    ]
  }
];
