import { skills } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">My Skills</h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
          A look at the technologies and tools I'm proficient in.
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-base font-medium px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
