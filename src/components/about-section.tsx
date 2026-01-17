import Image from 'next/image';
import { bio } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">About Me</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-8 md:p-10 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/profile.jpg"
                alt="Aubin Maga"
                width={96}
                height={96}
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              {bio}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
