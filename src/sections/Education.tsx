import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, CheckCircle, Clock } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { education } from "../data";
import { useLang } from "../lib/LangContext";
import lyceelogo from "../assets/logo lycee 15 novembre.jpg";
import iitLogo from "../assets/IIT (2).png";

export default function EducationSection() {
  const { t } = useLang();
  return (
    <SectionWrapper id="education" className="bg-[#080808]/80">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D9FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="Education"
          subtitle={t("education.subtitle")}
        >
          {t("education.title")}
        </SectionTitle>

        {/* Education timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D9FF]/40 via-[#7C3AED]/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border overflow-hidden"
                    style={{
                      background: edu.color + "15",
                      borderColor: edu.color + "30",
                    }}
                  >
                    {edu.id === 2 ? (
                      <img
                        src={lyceelogo}
                        alt="Lycée November 1955"
                        className="w-full h-full object-cover"
                      />
                    ) : edu.id === 1 || edu.id === 3 ? (
                      <img
                        src={iitLogo}
                        alt="IIT"
                        className="w-full h-full object-contain p-1 bg-white rounded-xl"
                      />
                    ) : (
                      <GraduationCap size={26} style={{ color: edu.color }} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 p-6 overflow-hidden">
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${edu.color}08, transparent)`,
                    }}
                  />

                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                    style={{ background: edu.color }}
                  />

                  <div className="relative pl-2">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="font-semibold text-base" style={{ color: edu.color }}>
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                          style={{
                            color: edu.status === "current" ? "#00FFB2" : edu.color,
                            borderColor: edu.status === "current" ? "#00FFB2" + "40" : edu.color + "40",
                            background: edu.status === "current" ? "#00FFB220" : edu.color + "15",
                          }}
                        >
                          {edu.status === "current" ? (
                            <><Clock size={11} />In Progress</>
                          ) : (
                            <><CheckCircle size={11} />Completed</>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#666]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#444]" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#444]" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 rounded-lg text-xs font-medium border"
                          style={{
                            color: edu.color + "CC",
                            borderColor: edu.color + "25",
                            background: edu.color + "0D",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </SectionWrapper>
  );
}
