import HeroSection from "./components/HeroSection";
import SelectedProjects from "./components/SelectedProjects";
import WhyHireMe from "./components/WhyHireMe";
import ResumeSection from "./components/ResumeSection";
import Testimonial from "./components/Testimonial";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <HeroSection />
      <SelectedProjects />
      <WhyHireMe />
      <ResumeSection />
      <Testimonial />
      <ContactSection />
    </main>
  );
}
