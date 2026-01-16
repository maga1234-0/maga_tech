"use client";

import { skills } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">My Skills</h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
          A look at the technologies and tools I'm proficient in.
        </p>
      </div>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <motion.div key={skill} variants={itemVariants}>
              <Badge
                variant="secondary"
                className="text-base font-medium px-4 py-2 transition-all hover:scale-105 hover:shadow-md"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
