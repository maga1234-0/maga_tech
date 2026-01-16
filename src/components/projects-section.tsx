import { projects } from "@/lib/data";
import SectionWrapper from "@/components/section-wrapper";
import ProjectCard from "@/components/project-card";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">My Work</h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
