import { bio } from "@/lib/data";
import SectionWrapper from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

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
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
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
