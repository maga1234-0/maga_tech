"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectComments } from "./project-comments";

type ProjectCommentsModalProps = {
  children: React.ReactNode;
  projectId: string;
};

export function ProjectCommentsModal({ children, projectId }: ProjectCommentsModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          <DialogDescription>
            Leave a comment or see what others are saying.
          </DialogDescription>
        </DialogHeader>
        <ProjectComments projectId={projectId} />
      </DialogContent>
    </Dialog>
  );
}
