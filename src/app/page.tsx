import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background/0">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
