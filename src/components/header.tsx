"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary">
            <Code2 className="w-8 h-8" />
            MagaTech
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-foreground/80 hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">Contact</button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-16 text-center">
                <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-primary transition-colors">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-foreground/80 hover:text-primary transition-colors">Skills</button>
                <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">Contact</button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
