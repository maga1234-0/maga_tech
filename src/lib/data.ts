import type { Project } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export const projects: Project[] = [
  {
    id: 'pms-123',
    title: 'SafariPMS',
    description: 'A collaborative platform to manage projects, tasks, and teams efficiently.',
    techStack: ['Next.js', 'Firebase', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/maga1234-0/pms_123',
    liveUrl: 'https://pms-123.vercel.app',
    imageUrl: getImage('project-6')?.imageUrl || '',
    imageHint: getImage('project-6')?.imageHint || 'collaborative whiteboard',
  },
  {
    id: 'goma-alerte',
    title: 'GomaAlerte',
    description: 'A real-time alert system for Goma, providing critical information and updates to residents.',
    techStack: ['Next.js', 'Firebase', 'PWA', 'Tailwind CSS'],
    githubUrl: 'https://github.com/maga1234-0/gomaalerte003',
    liveUrl: 'https://gomaalerte003.vercel.app',
    imageUrl: getImage('project-3')?.imageUrl || '',
    imageHint: getImage('project-3')?.imageHint || 'futuristic city',
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
