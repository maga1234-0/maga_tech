import { contact } from "@/lib/data";
import { Github, Mail, Code2, Phone } from "lucide-react";
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
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
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
