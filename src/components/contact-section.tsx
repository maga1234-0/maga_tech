"use client";

import { contact } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Mail, Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactSection = () => {
  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;
  const emailLink = `mailto:${contact.email}`;

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
          Have a project in mind or just want to say hi? Reach out via Phone
          or Email.
        </p>
      </div>
      <TooltipProvider>
        <div className="flex justify-center items-center gap-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-secondary hover:bg-primary/10 rounded-full transition-colors duration-300"
                aria-label="Contact via Phone"
              >
                <Phone className="w-10 h-10 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Phone</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={emailLink}
                className="group p-5 bg-secondary hover:bg-primary/10 rounded-full transition-colors duration-300"
                aria-label="Send an Email"
              >
                <Mail className="w-10 h-10 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </SectionWrapper>
  );
};

export default ContactSection;
