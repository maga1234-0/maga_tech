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
import { PortfolioOptimizerModal } from "./portfolio-optimizer-modal";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:border-primary/50">
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
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center mt-auto pt-4">
            <PortfolioOptimizerModal 
                projectDescription={project.description}
                techStack={project.techStack.join(', ')}
            />
          <Button variant="ghost" size="icon" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
              <Github />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
