"use client";

import { contact } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Mail } from "lucide-react";
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
          Have a project in mind or just want to say hi? Reach out via WhatsApp
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
                aria-label="Contact on WhatsApp"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-foreground/80 group-hover:text-primary transition-colors duration-300"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-.758-.372-1.03-.464-.272-.092-.57-.149-.972.092c-.39.24-.636.758-.823 1.03-.187.272-.372.329-.69.232-.32-.092-1.32-.464-2.5-1.518-1.18-.94-1.962-2.088-2.32-2.44-.187-.187-.046-.372.092-.518.122-.122.272-.21.39-.329.122-.122.187-.232.272-.39.092-.149.046-.272-.046-.418-.092-.149-.972-2.32-1.32-3.156-.34-.823-.69-1.03-.94-1.03-.232 0-.518.046-.758.046-.24 0-.636.092-1.03.464-.39.372-.636.92-.636 1.472 0 .54.21 1.03.24 1.122.046.092.636 1.62.636 1.62s1.045 2.56 2.5 3.5a5.53 5.53 0 0 0 1.71 1.03c.272.122.518.187.758.187.329 0 .972-.122 1.32-.464.34-.329.34-.636.34-.972s-.046-.636-.092-.69zM20.57 3.43A10.01 10.01 0 0 0 12.04 2c-5.48 0-9.91 4.43-9.91 9.91 0 1.75.46 3.48 1.32 4.94L2 22l5.25-1.38c1.47.83 3.15 1.32 4.79 1.32h.01c5.48 0 9.91-4.43 9.91-9.91 0-2.72-1.09-5.25-3.01-7.17z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>WhatsApp</p>
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
