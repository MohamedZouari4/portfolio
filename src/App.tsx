import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import NotFound from "./sections/NotFound";

function HashScroller() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    // Wait for sections to render then scroll
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Retry once after sections paint
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [location.hash]);
  return null;
}

function PortfolioPage() {
  return (
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
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LangProvider>
        <div className="min-h-screen bg-[#0A0A0A] text-white font-body">
          <TopProgressBar />
          <CursorSpotlight />
          <div className="scan-line" />

          {/* Global particle background — fixed behind entire page */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <HeroBackground />
          </div>

          <HashScroller />
          <Navbar />

          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <BackToTop />
          <HireMe />
          <NowPlaying />
          <SectionDots />
        </div>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
