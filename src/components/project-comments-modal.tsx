'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProjectComments from './project-comments';

type ProjectCommentsModalProps = {
  children: React.ReactNode;
  projectId: string;
  projectTitle: string;
};

export function ProjectCommentsModal({ children, projectId, projectTitle }: ProjectCommentsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Comments for {projectTitle}</DialogTitle>
          <DialogDescription>
            Read what others are saying and share your thoughts.
          </DialogDescription>
        </DialogHeader>
        <ProjectComments projectId={projectId} />
      </DialogContent>
    </Dialog>
  );
}
