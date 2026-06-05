import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, CalendarDays } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { experience } from "../data";

// Clearbit logo API for known companies; fallback to initials avatar
const companyLogoMap: Record<string, string> = {
  "ADVISING LTD": "https://logo.clearbit.com/advising.co",
  "CliniSys ERP": "https://logo.clearbit.com/clinisys.com",
  "International Institute of Technology": "https://logo.clearbit.com/iit.tn",
};

function CompanyLogo({ company, color }: { company: string; color: string }) {
  const src = companyLogoMap[company];
  if (src) {
    return (
      <img
        src={src}
        alt={company}
        className="w-8 h-8 rounded-lg object-contain bg-white/5 p-0.5"
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          const next = t.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
    );
  }
  return null;
}

function CompanyInitials({ company, color }: { company: string; color: string }) {
  const initials = company.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
      style={{ background: color + "20", color }}
    >
      {initials}
    </div>
  );
}

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <SectionWrapper id="experience" className="bg-[#080808]/80">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          badge="Experience"
          subtitle="Professional internships and engineering roles"
        >
          Work Experience
        </SectionTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-20 sm:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 sm:left-8 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                  style={{
                    borderColor: exp.color,
                    background: "#0A0A0A",
                    boxShadow: `0 0 12px ${exp.color}60`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  layout
                  className="glass rounded-2xl border border-white/5 overflow-hidden card-hover"
                  style={{
                    borderColor: expanded === exp.id ? exp.color + "30" : undefined,
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                    className="w-full text-left px-6 py-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <div className="relative flex-shrink-0">
                            <CompanyLogo company={exp.company} color={exp.color} />
                            <CompanyInitials company={exp.company} color={exp.color} />
                          </div>
                          <h3 className="font-display font-bold text-white text-lg">
                            {exp.role}
                          </h3>
                          {exp.type === "current" && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/20">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 ml-11">
                          <span className="font-semibold text-[#A1A1AA]">{exp.company}</span>
                          <div className="flex items-center gap-1.5 text-[#A1A1AA] text-sm">
                            <CalendarDays size={12} />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#A1A1AA] flex-shrink-0 mt-1"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    <p className="mt-3 text-[#A1A1AA] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </button>

                  {/* Expanded */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6 pt-0"
                          style={{
                            borderTop: `1px solid ${exp.color}20`,
                          }}
                        >
                          <div className="pt-4 grid sm:grid-cols-2 gap-6">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                                <span
                                  className="w-1.5 h-4 rounded-full"
                                  style={{ background: exp.color }}
                                />
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((r, ri) => (
                                  <motion.li
                                    key={ri}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: ri * 0.05 }}
                                    className="flex items-start gap-2 text-sm text-[#A1A1AA]"
                                  >
                                    <span
                                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                      style={{ background: exp.color }}
                                    />
                                    {r}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Tech */}
                            <div>
                              <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                                <span
                                  className="w-1.5 h-4 rounded-full"
                                  style={{ background: exp.color }}
                                />
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                                    style={{
                                      background: exp.color + "12",
                                      color: exp.color,
                                      border: `1px solid ${exp.color}25`,
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
