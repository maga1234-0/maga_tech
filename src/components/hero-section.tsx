"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { contact } from "@/lib/data";

const HeroSection = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] animate-gradient">
            MagaTech
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 font-body">
            Crafting Tomorrow's Technology, Today. Innovative full-stack solutions for the digital age, powered by modern frameworks and a passion for clean code.
            </p>
        </motion.div>

        <motion.div
            className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <Button size="lg" onClick={() => scrollToSection('projects')}>
            View Projects <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" /> GitHub
            </a>
            </Button>
        </motion.div>
        </div>
    </div>
  );
};

export default HeroSection;
