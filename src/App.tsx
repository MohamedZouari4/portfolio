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
import HeroBackground from "./components/HeroBackground";
import NotFound from "./sections/NotFound";
import StatsBanner from "./components/StatsBanner";
import Locali from "./sections/Locali";
import Revision from "./sections/Revision";

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
      <StatsBanner />
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

function AppContent() {
  const location = useLocation();
  const routePath = location.pathname.replace(/\/+$/, "") || "/";
  const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const isPortfolioPage = routePath === "/" || routePath === basePath;

  useEffect(() => {
    const page = routePath.endsWith("/locali")
      ? {
          title: "Locali | Your Personal AI Workspace",
          description: "Locali is a private, local-first AI workspace for your files, projects, and knowledge.",
        }
      : routePath.endsWith("/revision")
        ? {
            title: "Revision.TN | A New Way to Learn",
            description: "Revision.TN is a Tunisian education project currently being built for students and the learning community.",
          }
        : {
            title: "Mohamed Zouari | AI Engineer & Full-Stack Developer",
            description: "Computer Science student passionate about AI, Full-Stack Development, and building intelligent systems.",
          };

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", page.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", window.location.href.split("#")[0]);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", window.location.href.split("#")[0]);
  }, [routePath]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-body">
      <TopProgressBar />
      <CursorSpotlight />
      <div className="scan-line" />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <HashScroller />
      <Navbar />

      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/locali" element={<Locali />} />
        <Route path="/revision" element={<Revision />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
      {isPortfolioPage && <HireMe />}
      {isPortfolioPage && <SectionDots />}
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
