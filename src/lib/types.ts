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
  author: string;
  text: string;
  createdAt: any; // Using `any` for Firebase Timestamp flexibility
  projectId: string;
};
