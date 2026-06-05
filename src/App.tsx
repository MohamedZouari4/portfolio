import { useEffect } from "react";
import { LangProvider } from "./lib/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import IeeeSection from "./sections/Ieee";
import AwardsSection from "./sections/Awards";
import ContactSection from "./sections/Contact";
import EducationSection from "./sections/Education";
import TestimonialsSection from "./sections/Testimonials";
import JourneySection from "./sections/Journey";
import UsesSection from "./sections/Uses";
import BackToTop from "./components/BackToTop";
import SectionDots from "./components/SectionDots";
import HireMe from "./components/HireMe";
import CursorSpotlight from "./components/CursorSpotlight";
import TopProgressBar from "./components/TopProgressBar";
import NowPlaying from "./components/NowPlaying";
import HeroBackground from "./components/HeroBackground";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <LangProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white font-body">
        <TopProgressBar />
        <CursorSpotlight />
        <div className="scan-line" />

        {/* Global particle background — fixed behind entire page */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <HeroBackground />
        </div>

        <Navbar />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <IeeeSection />
          <AwardsSection />
          <TestimonialsSection />
          <UsesSection />
          <ContactSection />
        </main>

        <Footer />
        <BackToTop />
        <HireMe />
        <NowPlaying />
        <SectionDots />
      </div>
    </LangProvider>
  );
}

export default App;
