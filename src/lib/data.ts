import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Nebula',
    description: 'A full-stack web application for visualizing space exploration data, built with modern web technologies.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    githubUrl: 'https://github.com/MagaTech',
    imageUrl: PlaceHolderImages[0].imageUrl,
    imageHint: PlaceHolderImages[0].imageHint,
  },
  {
    id: '2',
    title: 'QuantumLeap AI',
    description: 'An AI-powered platform for predictive analytics in the financial sector, offering real-time insights.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
    githubUrl: 'https://github.com/MagaTech',
    imageUrl: PlaceHolderImages[1].imageUrl,
    imageHint: PlaceHolderImages[1].imageHint,
  },
  {
    id: '3',
    title: 'CyberGuard VPN',
    description: 'A decentralized VPN service ensuring user privacy and security through blockchain technology.',
    techStack: ['Go', 'Solidity', 'Web3.js', 'Node.js', 'Kubernetes'],
    githubUrl: 'https://github.com/MagaTech',
    imageUrl: PlaceHolderImages[2].imageUrl,
    imageHint: PlaceHolderImages[2].imageHint,
  },
  {
    id: '4',
    title: 'EcoTrack',
    description: 'A mobile app for tracking and reducing carbon footprint, promoting sustainable living practices.',
    techStack: ['React Native', 'Firebase', 'Google Maps API', 'Chart.js'],
    githubUrl: 'https://github.com/MagaTech',
    imageUrl: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
  },
];

export const bio =
  "As a passionate software developer, I thrive on building innovative solutions that leverage cutting-edge technology. My journey in the tech world is driven by a relentless curiosity and a desire to solve complex problems. From developing scalable web applications to exploring the frontiers of artificial intelligence, I am committed to creating software that is not only functional but also elegant and user-centric. I believe in the power of code to transform ideas into reality and am always eager to embrace new challenges and technologies.";

export const contact = {
  email: 'your-email@magatech.com',
  whatsapp: '+1234567890',
  github: 'https://github.com/MagaTech',
};
