import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";

const testimonials = [
  {
    name: "Internship Supervisor",
    role: "Senior Engineer @ ADVISING LTD",
    text: "Mohamed demonstrated exceptional ability to architect and deliver complex AI systems. His RAG implementation and FastAPI backend were production-quality from day one. A rare combination of technical depth and communication skills.",
    color: "#00D9FF",
    initials: "AS",
  },
  {
    name: "IEEE Chapter Member",
    role: "IEEE CS IIT Student Branch Chapter",
    text: "As Chair, Mohamed transformed our chapter's impact. He organized major events, led a passionate team, and brought a strategic vision that earned us the Outstanding Chapter of the Month award across Region 8.",
    color: "#7C3AED",
    initials: "IC",
  },
  {
    name: "CliniSys Project Lead",
    role: "Tech Lead @ CliniSys ERP",
    text: "Mohamed delivered a full pharmacy inventory system within the internship period — clean architecture, solid Spring Boot APIs, and a polished React frontend. Impressive work ethic and code quality.",
    color: "#00FFB2",
    initials: "CL",
  },
];

const INTERVAL = 5000;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setActive((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(active + 1, 1), INTERVAL);
    return () => clearInterval(t);
  }, [active, paused]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[active];

  return (
    <SectionWrapper id="testimonials" className="bg-[#0A0A0A]/80">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Testimonials"
          subtitle="What colleagues and supervisors say about working with me"
        >
          Kind Words
        </SectionTitle>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden relative min-h-[260px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="glass rounded-2xl p-8 border border-white/5 max-w-2xl mx-auto flex flex-col gap-5">
                  <Quote size={32} style={{ color: t.color }} className="opacity-60" />
                  <p className="text-[#A1A1AA] text-base leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{ background: t.color + "20", color: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-[#A1A1AA] text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => go(active - 1, -1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-9 h-9 rounded-xl border border-white/10 bg-[#0A0A0A]/80 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(active + 1, 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-9 h-9 rounded-xl border border-white/10 bg-[#0A0A0A]/80 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                background: i === active ? testimonials[i].color : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
