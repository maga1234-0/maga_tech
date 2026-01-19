import type { Timestamp } from 'firebase/firestore';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
};

export type Comment = {
  id: string;
  projectId: string;
  author: string;
  text: string;
  createdAt: Timestamp;
};
