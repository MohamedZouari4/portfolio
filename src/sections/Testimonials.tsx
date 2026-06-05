import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";

const testimonials = [
  {
    name: "Mohamed Anouar Abid",
    role: "CEO @ ADVISING LTD",
    linkedin: "https://www.linkedin.com/in/mohamedzouari202/",
    text: "Mohamed demonstrated exceptional ability to architect and deliver complex AI systems. His RAG implementation and FastAPI backend were production-quality from day one. A rare combination of technical depth and communication skills.",
    color: "#00D9FF",
    initials: "MA",
  },
  {
    name: "Dr. Said Taktak",
    role: "IT Director @ International Institute of Technology",
    linkedin: "https://www.linkedin.com/in/said-taktak/",
    text: "Mohamed stood out as one of the most driven students in our program. During his internship at IIT, he delivered clean, well-structured web solutions and showed a strong grasp of both frontend and backend development. A highly motivated engineer with great potential.",
    color: "#7C3AED",
    initials: "ST",
  },
  {
    name: "Sirine Ben Hassena",
    role: "Tech Lead @ CliniSys ERP",
    linkedin: "https://www.linkedin.com/company/clinisys/",
    text: "Mohamed delivered a full pharmacy inventory system within the internship period — clean architecture, solid Spring Boot APIs, and a polished React frontend. Impressive work ethic and code quality.",
    color: "#00FFB2",
    initials: "SB",
  },
  {
    name: "Abdul Halik M I",
    role: "Operations Lead @ Forte Consulting | IEEE Day 2025 Chair",
    linkedin: "https://www.linkedin.com/in/abdulhalikmohamed/",
    text: "I had the pleasure of working with Mohamed during IEEEXtreme 19.0, where he was an integral part of our Social Media and Graphic Design team. He consistently brought fresh design ideas that elevated our event's online presence. His dedication and reliability stood out — no matter how tight the deadlines, he always delivered high-quality work on time.",
    color: "#00D9FF",
    initials: "AH",
  },
  {
    name: "Aya Chokri",
    role: "Vice Chair IEEE CS ENICarthage SBC",
    linkedin: "https://www.linkedin.com/in/aya-chokri/",
    text: "Mohamed is not only a highly skilled and driven individual but also someone with an exceptional sense of initiative and leadership. His communication and coordination skills made working with him a seamless and enriching experience. A perfectionist in the best sense — always aiming for the highest standards while remaining approachable, respectful, and collaborative.",
    color: "#7C3AED",
    initials: "AC",
  },
  {
    name: "Amira Henaien",
    role: "CS Assistant Professor | AI & IoT Researcher",
    linkedin: "https://www.linkedin.com/in/amira-henaien/",
    text: "I highly recommend Mohamed Zouari, a talented Computer Science student I taught in Algorithms and Data Structures. As Webmaster & Media Manager for IEEE WIE Affinity Group, he consistently meets deadlines and brings innovative, creative ideas. Mohamed is a valuable asset in any team and I believe he has a bright future ahead.",
    color: "#00FFB2",
    initials: "AM",
  },
  {
    name: "Hamada AbuRjela",
    role: "Chairperson, IEEE Student Branch Gaza",
    linkedin: "https://www.linkedin.com/in/hamada-aburjela/",
    text: "Mohamed has been an instrumental part of our initiative, particularly in social media, where his expertise and creativity have led to remarkable successes. His ability to strategize, execute, and analyze social media campaigns has been nothing short of outstanding. I wholeheartedly recommend him for any opportunity where creativity and a results-driven mindset are valued.",
    color: "#00D9FF",
    initials: "HA",
  },
  {
    name: "Alaa Taha El Maria",
    role: "Teaching Assistant | IEEE Member | Kaggle Expert",
    linkedin: "https://www.linkedin.com/in/alaa-taha-el-maria/",
    text: "Mohamed has a natural eye for design — blending creativity with smart, clean execution. His work speaks clearly, with every detail showing intention and creativity. It's rare to see someone still studying, especially in AI, who can deliver such strong design work. He's a future star combining tech and design in a way that's truly inspiring.",
    color: "#7C3AED",
    initials: "AT",
  },
  {
    name: "Taieb Jemal",
    role: "IEEE WIE IIT Student Branch",
    linkedin: "https://www.linkedin.com/in/taieb-jemal/",
    text: "Mohamed showcased exceptional technical skills as our Webmaster & Media Manager. He adeptly managed our website ensuring it was visually appealing and easy to navigate, while also crafting compelling media campaigns that significantly boosted our online presence. Their blend of technical prowess, creativity, and leadership makes them stand out.",
    color: "#00FFB2",
    initials: "TJ",
  },
  {
    name: "Eya Fersi",
    role: "Computer Science Student | Intern @ ADVISING LTD",
    linkedin: "https://www.linkedin.com/in/eya-fersi/",
    text: "Mohamed is a hardworking and motivated team player. During our internship at Advising LTD, he showed excellent collaboration skills and strong commitment to his work.",
    color: "#00D9FF",
    initials: "EF",
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
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-[#A1A1AA] text-xs">{t.role}</p>
                    </div>
                    {t.linkedin && (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} on LinkedIn`}
                        className="flex-shrink-0 w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-colors duration-200"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
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
