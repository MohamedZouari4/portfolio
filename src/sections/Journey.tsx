import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";

const milestones = [
  {
    year: "2020",
    icon: "💡",
    title: "First Line of Code",
    desc: "Wrote my first Python script. Instantly obsessed with making computers do things.",
    color: "#00FFB2",
  },
  {
    year: "2022",
    icon: "🎓",
    title: "High School Baccalaureate",
    desc: "Graduated in Technological Sciences from Lycée November 1955, Sfax.",
    color: "#7C3AED",
  },
  {
    year: "2023",
    icon: "🏛️",
    title: "Started CS at IIT",
    desc: "Enrolled in the Bachelor of Computer Science Work-Study program at the International Institute of Technology.",
    color: "#00D9FF",
  },
  {
    year: "2024",
    icon: "🌍",
    title: "Joined IEEE",
    desc: "Started volunteering with IEEE, becoming a designer for IEEEXtreme global and winning Best Ambassador.",
    color: "#F59E0B",
  },
  {
    year: "Jul 2024",
    icon: "💼",
    title: "First Web Dev Internship",
    desc: "Interned at IIT building Django web applications and improving accessibility for institutional platforms.",
    color: "#00FFB2",
  },
  {
    year: "2025",
    icon: "👑",
    title: "IEEE CS Chapter Chair",
    desc: "Led the IEEE Computer Society IIT Student Branch Chapter — earning Outstanding Chapter of the Month (Region 8).",
    color: "#7C3AED",
  },
  {
    year: "Jul 2025",
    icon: "🏥",
    title: "Software Dev Internship @ CliniSys",
    desc: "Built a full pharmacy inventory management system with Spring Boot + React.",
    color: "#00D9FF",
  },
  {
    year: "Jan 2026",
    icon: "🚀",
    title: "AI Engineer @ ADVISING LTD",
    desc: "Building enterprise-grade AI content automation with RAG, FastAPI, and multi-model LLM integration.",
    color: "#00D9FF",
  },
  {
    year: "Mar 2026",
    icon: "📄",
    title: "First IEEE Research Paper Published",
    desc: "Co-authored and published research on AI-driven adaptive battery optimization in smartphones at IEEE ADACIS 2025.",
    color: "#7C3AED",
  },
  {
    year: "Now",
    icon: "⚡",
    title: "What's Next",
    desc: "Seeking global AI Engineering opportunities, graduate programs, and building impactful open-source tools.",
    color: "#00FFB2",
    isNow: true,
  },
];

export default function JourneySection() {
  return (
    <SectionWrapper id="journey" className="bg-[#080808]/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <SectionTitle
          badge="Journey"
          subtitle="The story behind the code — milestones that shaped who I am"
        >
          My Story
        </SectionTitle>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D9FF]/40 via-[#7C3AED]/30 to-transparent" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex gap-6 pl-16"
              >
                {/* Icon dot */}
                <div
                  className="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border"
                  style={{ background: m.color + "15", borderColor: m.color + "30" }}
                >
                  {m.icon}
                </div>

                {/* Content */}
                <div className={`flex-1 glass rounded-xl p-5 border transition-all duration-300 hover:border-white/10 ${(m as { isNow?: boolean }).isNow ? "border-[#00FFB2]/30 bg-[#00FFB2]/[0.03]" : "border-white/5"}`}>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ background: m.color + "15", color: m.color }}
                    >
                      {m.year}
                    </span>
                    <h3 className="font-display font-bold text-white">{m.title}</h3>
                    {(m as { isNow?: boolean }).isNow && (
                      <span className="flex items-center gap-1.5 text-[#00FFB2] text-xs font-mono">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFB2]" />
                        </span>
                        present
                      </span>
                    )}
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
