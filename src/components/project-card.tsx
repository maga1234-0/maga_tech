"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { GitHubFollowModal } from "./github-follow-modal";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:border-primary/50 group">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <CardHeader>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden border">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
        </a>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end items-center mt-auto pt-4 gap-2">
          <GitHubFollowModal githubUrl={project.githubUrl}>
            <Button
              variant="ghost"
              size="icon"
              aria-label={`GitHub for ${project.title}`}
            >
              <Github />
            </Button>
          </GitHubFollowModal>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
