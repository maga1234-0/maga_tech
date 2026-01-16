import { contact } from "@/lib/data";
import { Github, Mail, Code2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
  const emailLink = `mailto:${contact.email}`;

  return (
    <footer className="bg-background/50 border-t border-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
                <Code2 className="w-7 h-7" />
                MagaTech
            </Link>
          <div className="flex gap-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M12 2.031c-5.523 0-10 4.477-10 10 0 1.768.459 3.45 1.318 4.928l-1.318 4.844 5.010-1.252c1.443.833 3.091 1.318 4.828 1.318 5.523 0 10-4.477 10-10s-4.477-10-10-10zM17.219 14.875c-0.125-0.219-0.438-0.344-0.938-0.625-0.5-0.281-2.938-1.438-3.375-1.625s-0.75-0.281-1.063 0.281c-0.313 0.563-1.25 1.563-1.531 1.875s-0.531 0.344-1 0.125c-0.469-0.219-1.938-0.719-3.688-2.281-1.375-1.219-2.281-2.719-2.563-3.188-0.25-0.469-0.031-0.719 0.219-0.938 0.219-0.188 0.469-0.531 0.688-0.781s0.281-0.438 0.438-0.75c0.156-0.313 0.094-0.563-0.031-0.781s-1.063-2.563-1.469-3.5c-0.375-0.875-0.781-0.75-1.063-0.75s-0.563-0.031-0.875-0.031c-0.313 0-0.813 0.125-1.25 0.625-0.438 0.5-1.656 1.625-1.656 3.969 0 2.344 1.688 4.594 1.938 4.906s3.281 5.25 8.125 7.156c1.125 0.438 2.125 0.688 2.844 0.875 1.156 0.313 2.188 0.25 2.969-0.156 0.875-0.438 2.531-1.031 2.875-2.031s0.344-1.844 0.25-2.031c-0.094-0.188-0.344-0.281-0.688-0.5z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href={emailLink} className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} MagaTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
