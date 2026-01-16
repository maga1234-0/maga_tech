import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectImage = PlaceHolderImages.find(p => p.id === 'project-1');

export const projects: Project[] = [
  {
    id: '1',
    title: 'MagaTech Portfolio',
    description: 'A dynamic and responsive personal portfolio website to showcase my projects and skills, built with Next.js and Firebase. It features an interactive background, AI-powered content analysis, and a modal to capture GitHub follower interest.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Genkit'],
    githubUrl: 'https://github.com/maga1234-0/protefolio',
    imageUrl: projectImage?.imageUrl || 'https://picsum.photos/seed/project1/600/400',
    imageHint: projectImage?.imageHint || 'code laptop',
  }
];

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'Go',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Tailwind CSS',
  'Firebase',
  'Docker',
  'Kubernetes',
  'Solidity',
  'Web3.js',
  'TensorFlow',
];

export const bio =
  "I am AUBIN MAGA, a software engineer graduated from KIGALI INDEPENDENT UNIVERSITY (ULK). As a passionate software developer, I thrive on building innovative solutions that leverage cutting-edge technology. My journey in the tech world is driven by a relentless curiosity and a desire to solve complex problems. From developing scalable web applications to exploring the frontiers of artificial intelligence, I am committed to creating software that is not only functional but also elegant and user-centric. I believe in the power of code to transform ideas into reality and am always eager to embrace new challenges and technologies.";

export const contact = {
  email: 'aubinmaga@gmail.com',
  whatsapp: '+243980453932',
  github: 'https://github.com/maga1234-0/protefolio',
};
