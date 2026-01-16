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

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.22 15.2c-.24-.13-1.44-.71-1.66-.79-.22-.08-.38-.13-.54.13-.16.26-.63.79-.77.95-.14.16-.28.18-.52.05-.24-.12-1.02-.38-1.94-1.2-1.2-1.09-1.48-1.84-1.66-2.14-.18-.3-.02-.46.12-.61l.55-.63c.06-.07.13-.18.19-.29.07-.12.04-.23-.02-.36-.06-.13-.54-1.3-.74-1.78-.2-.48-.4-.42-.55-.42h-.48c-.16 0-.42.06-.63.3.22.26-.84 1.01-.84 2.46s.86 2.86.98 3.06c.12.2.68 1.09 2.37 1.9.39.19.7.3.94.38.48.16.91.13 1.26.08.38-.05 1.18-.48 1.34-.94.16-.46.16-.86.11-.94s-.19-.13-.42-.26z" />
    </svg>
);


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
                aria-label="Contact via WhatsApp"
              >
                <WhatsAppIcon className="w-10 h-10 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
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
