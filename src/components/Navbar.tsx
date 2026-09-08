import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cvFile from "../assets/Mohamed_ZOUARI_CV_.pdf";
import { useScrollProgress, useActiveSection } from "../hooks/useCounter";
import { cn } from "../lib/utils";
import { useLang, Lang } from "../lib/LangContext";

const navIds = ["home","about","journey","education","experience","projects","skills","ieee","awards","testimonials","uses","contact"];
const primaryNavIds = ["home", "about", "journey", "projects", "contact"];
const moreNavIds = navIds.filter((id) => !primaryNavIds.includes(id));
const langOptions: { code: Lang; flag: string }[] = [
  { code: "en", flag: "🇬🇧" },
  { code: "fr", flag: "🇫🇷" },
  { code: "ar", flag: "🇹🇳" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const progress = useScrollProgress();
  const active = useActiveSection(navIds);
  const { lang, setLang, t } = useLang();

  const navLinks = navIds.map((id) => ({ id, label: t(`nav.${id}`) }));
  const primaryLinks = primaryNavIds.map((id) => ({ id, label: t(`nav.${id}`) }));
  const moreLinks = moreNavIds.map((id) => ({ id, label: t(`nav.${id}`) }));
  const moreActive = moreNavIds.includes(active ?? "");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #00D9FF, #7C3AED, #00FFB2)",
        }}
      />

      {/* Nav bar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        style={scrolled ? { background: "var(--bg)", borderBottomColor: "rgba(255,255,255,0.06)" } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="font-display font-black text-xl tracking-tight flex items-end gap-0.5 group"
          >
            <span className="text-white group-hover:text-[#00D9FF] transition-colors duration-200">MZ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] mb-1 group-hover:scale-125 transition-transform duration-200" />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0">
            {primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                  active === link.id
                    ? "text-white"
                    : "text-[#666] hover:text-[#A1A1AA]"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#00D9FF]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                {link.label}
              </button>
            ))}

            <div ref={moreMenuRef} className="relative">
              <button
                onClick={() => setMoreOpen((open) => !open)}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                  moreActive
                    ? "text-white"
                    : "text-[#666] hover:text-[#A1A1AA]"
                )}
              >
                {moreActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#00D9FF]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                More
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 min-w-44 rounded-xl border border-white/10 bg-[#111]/95 p-2 shadow-2xl backdrop-blur-xl z-50"
                  >
                    {moreLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollTo(link.id)}
                        className={cn(
                          "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200",
                          active === link.id
                            ? "bg-white/6 text-white"
                            : "text-[#A1A1AA] hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/locali"
              className={cn(
                "group ml-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                location.pathname === "/locali"
                  ? "border-[#00FFB2]/50 bg-[#00FFB2]/10 text-[#00FFB2]"
                  : "border-[#00FFB2]/25 bg-[#00FFB2]/5 text-[#00FFB2] hover:border-[#00FFB2]/50 hover:bg-[#00FFB2]/10"
              )}
            >
              <Sparkles size={12} />
              Locali
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/revision"
              className={cn(
                "group ml-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                location.pathname === "/revision"
                  ? "border-[#C084FC]/60 bg-[#8B5CF6]/20 text-[#D8B4FE]"
                  : "border-[#A78BFA]/30 bg-[#8B5CF6]/10 text-[#C4B5FD] hover:border-[#C084FC]/60 hover:bg-[#8B5CF6]/20"
              )}
            >
              <Sparkles size={12} />
              Revision.TN
              <span className="rounded bg-[#C084FC]/20 px-1 py-0.5 text-[8px] tracking-wider text-[#E9D5FF]">NEW</span>
            </Link>
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Switch language"
              >
                {langOptions.find(l => l.code === lang)?.flag}
                <span className="font-mono text-xs uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl z-50"
                  >
                    {langOptions.map(({ code, flag }) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className={cn(
                          "flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-white/5 transition-colors",
                          lang === code ? "text-[#00D9FF]" : "text-[#A1A1AA]"
                        )}
                      >
                        {flag} <span className="font-mono uppercase text-xs">{code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={cvFile}
              download="Mohamed_Zouari_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A0A0A] transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#A1A1AA] hover:text-white p-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[99] bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              <Link
                to="/locali"
                onClick={() => setMobileOpen(false)}
                className="mb-2 flex items-center justify-between rounded-xl border border-[#00FFB2]/25 bg-[#00FFB2]/[0.06] px-4 py-3 text-sm font-semibold text-[#00FFB2]"
              >
                <span className="flex items-center gap-2"><Sparkles size={14} /> Explore Locali</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/revision"
                onClick={() => setMobileOpen(false)}
                className="mb-2 flex items-center justify-between rounded-xl border border-[#A78BFA]/30 bg-[#8B5CF6]/[0.10] px-4 py-3 text-sm font-semibold text-[#D8B4FE]"
              >
                <span className="flex items-center gap-2"><Sparkles size={14} /> Explore Revision.TN</span>
                <span className="rounded bg-[#C084FC]/20 px-1.5 py-0.5 text-[9px] tracking-wider text-[#E9D5FF]">NEW</span>
              </Link>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    active === link.id
                      ? "text-white bg-white/[0.06]"
                      : "text-[#666] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={cvFile}
                download="Mohamed_Zouari_CV.pdf"
                className="mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#00D9FF] border border-[#00D9FF]/30 hover:bg-[#00D9FF]/10 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
