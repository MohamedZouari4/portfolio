import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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

export default function TestimonialsSection() {
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/5 card-hover flex flex-col gap-5"
            >
              {/* Quote icon */}
              <Quote size={28} style={{ color: t.color }} className="opacity-60" />

              {/* Text */}
              <p className="text-[#A1A1AA] text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
