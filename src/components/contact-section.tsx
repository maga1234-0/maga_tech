import { contact } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
  const emailLink = `mailto:${contact.email}`;

  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2"/> WhatsApp
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <a href={emailLink}>
                    <Mail className="mr-2"/> Email
                </a>
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
