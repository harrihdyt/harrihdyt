import HeroSection from "./components/HeroSection";
import SelectedProjects from "./components/SelectedProjects";
import WhyHireMe from "./components/WhyHireMe";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SelectedProjects />
      <WhyHireMe />
      <ContactSection />
    </main>
  );
}


