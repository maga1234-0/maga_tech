"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={cn("container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
