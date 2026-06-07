import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Cpu, Users, Globe } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import AnimatedCounter from "../components/AnimatedCounter";
import GitHubStats from "../components/GitHubStats";
import { personal, stats, languages, softSkills } from "../data";
import { useLang } from "../lib/LangContext";

const interests = [
  { icon: Brain, label: "Artificial Intelligence", color: "#00D9FF" },
  { icon: Cpu, label: "Generative & Agentic AI", color: "#7C3AED" },
  { icon: Code2, label: "Software Engineering", color: "#00FFB2" },
  { icon: Cloud, label: "Cloud Computing", color: "#00D9FF" },
  { icon: Users, label: "RAG Systems", color: "#7C3AED" },
  { icon: Globe, label: "Automation Systems", color: "#00FFB2" },
];

export default function AboutSection() {
  const { t } = useLang();
  return (
    <SectionWrapper id="about" className="bg-[#0A0A0A]/80 backdrop-blur-none">
      <div className="max-w-6xl mx-auto">
        <SectionTitle badge="About Me" subtitle={t("about.subtitle")}>
          {t("about.title")}
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center">
                  <span className="text-lg">👋</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Mohamed Zouari</p>
                  <p className="text-[#A1A1AA] text-sm">IIT, Sfax, Tunisia</p>
                </div>
              </div>

              <p className="text-[#A1A1AA] leading-relaxed mb-6">{personal.about}</p>

              <p className="text-[#A1A1AA] leading-relaxed mb-8">
                I thrive at the intersection of AI research and practical engineering — building 
                systems that combine large language models, retrieval-augmented generation, and 
                modern web technologies into impactful, real-world applications.
              </p>

              {/* Interests grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {interests.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                    style={{ background: `${color}08`, border: `1px solid ${color}20` }}
                  >
                    <Icon size={14} style={{ color }} />
                    <span className="text-xs font-medium text-white/80">{label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Soft Skills */}
              <div className="mb-8">
                <p className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest mb-3">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map(({ label, icon }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 border border-white/10 bg-white/[0.03] hover:border-[#00FFB2]/30 hover:text-[#00FFB2] transition-colors duration-200"
                    >
                      <span>{icon}</span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <p className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest mb-3">Languages</p>
                <div className="space-y-2.5">
                  {languages.map(({ name, level, label, flag, color }) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className="text-base w-6 text-center">{flag}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-white/80">{name}</span>
                          <span className="text-xs font-mono" style={{ color }}>{label}</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{ background: color }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 border border-white/5 card-hover text-center ${
                  i === stats.length - 1 && stats.length % 2 === 1
                    ? "col-span-2"
                    : ""
                }`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display font-black text-4xl text-gradient-primary mb-2"
                />
                <p className="text-[#A1A1AA] text-sm">{stat.label}</p>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-2 glass-primary rounded-2xl p-6 border border-[#00D9FF]/15"
            >
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-[#00D9FF]" />
                <div>
                  <p className="text-white font-semibold">Open to Opportunities</p>
                  <p className="text-[#A1A1AA] text-sm">
                    International internships · Graduate programs · Global tech roles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-2 glass rounded-2xl p-5 border border-white/5"
            >
              <p className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest mb-4">
                GitHub Activity
              </p>
              <GitHubStats />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
