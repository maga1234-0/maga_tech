import type { Project } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export const projects: Project[] = [
  {
    id: 'magatech-portfolio',
    title: 'MagaTech Portfolio',
    description: 'My personal portfolio site to showcase my skills and projects. Built with Next.js, Tailwind, and Firebase.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    githubUrl: 'https://github.com/maga1234-0/maga_tech.git',
    liveUrl: 'https://github.com/maga1234-0/maga_tech',
    imageUrl: getImage('project-1')?.imageUrl || '',
    imageHint: getImage('project-1')?.imageHint || 'code laptop',
  },
  {
    id: 'goma-alerte',
    title: 'GomaAlerte',
    description: 'A real-time alert system for Goma, providing critical information and updates to residents.',
    techStack: ['Next.js', 'Firebase', 'PWA', 'Tailwind CSS'],
    githubUrl: 'https://github.com/maga1234-0/gomaalerte003',
    liveUrl: 'https://github.com/maga1234-0/gomaalerte003',
    imageUrl: getImage('project-3')?.imageUrl || '',
    imageHint: getImage('project-3')?.imageHint || 'futuristic city',
  },
  {
    id: 'data-net',
    title: 'DataNet',
    description: 'A conceptual data visualization tool for analyzing complex network graphs and discovering insights.',
    techStack: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    githubUrl: 'https://github.com/maga1234-0/maga_tech.git',
    liveUrl: 'https://github.com/maga1234-0/maga_tech',
    imageUrl: getImage('project-2')?.imageUrl || '',
    imageHint: getImage('project-2')?.imageHint || 'abstract network',
  },
];


export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'Node.js',
  'Tailwind CSS',
  'Firebase',
  'Docker',
  'Kubernetes',
];

export const bio =
  "I am AUBIN MAGA, a software engineer graduated from KIGALI INDEPENDEANT UNIVERSITY (ULK). As a passionate software developer, I thrive on building innovative solutions that leverage cutting-edge technology. My journey in the tech world is driven by a relentless curiosity and a desire to solve complex problems. From developing scalable web applications to exploring the frontiers of artificial intelligence, I am committed to creating software that is not only functional but also elegant and user-centric. I believe in the power of code to transform ideas into reality and am always eager to embrace new challenges and technologies.";

export const contact = {
  email: 'aubinmaga@gmail.com',
  whatsapp: '+243980453932',
  github: 'https://github.com/maga1234-0/maga_tech.git',
};
