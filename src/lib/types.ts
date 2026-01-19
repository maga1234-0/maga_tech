
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
  name: string;
  message: string;
  createdAt: any;
};
