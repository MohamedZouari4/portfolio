import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import AnimatedCounter from "../components/AnimatedCounter";
import { ieeeRoles, ieeeStats, aiesec } from "../data";

const tabData = [
  { key: "leadership", label: "🎯 Leadership" },
  { key: "international", label: "🌍 International" },
  { key: "events", label: "🎪 Events" },
];

import { useState } from "react";

export default function IeeeSection() {
  const [tab, setTab] = useState("leadership");

  const currentRoles =
    tab === "leadership"
      ? ieeeRoles.leadership
      : tab === "international"
      ? ieeeRoles.international
      : ieeeRoles.events;

  return (
    <SectionWrapper id="ieee" className="bg-[#0A0A0A]/80">
      {/* BG effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#00D9FF]/4 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C3AED]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="IEEE Journey"
          subtitle="Leadership, Innovation, Global Impact & Community Building"
        >
          IEEE Leadership
        </SectionTitle>

        {/* IEEE intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-primary rounded-2xl p-6 border border-[#00D9FF]/15 mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="text-4xl mb-3">⚡</div>
          <p className="text-[#A1A1AA] leading-relaxed">
            Since joining IEEE in 2023, Mohamed has contributed to local, regional, and 
            international initiatives across Artificial Intelligence, Computer Science, 
            leadership, event management, media strategy, mentoring, and volunteer engagement.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {ieeeStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 border border-white/5 text-center relative overflow-hidden group card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display font-black text-3xl text-gradient-primary mb-1 relative z-10"
              />
              <p className="text-[#A1A1AA] text-xs relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabData.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === key
                  ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/25"
                  : "glass border border-white/10 text-[#A1A1AA] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {currentRoles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-2xl p-5 border border-white/5 group overflow-hidden relative"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${role.color}08, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div className="flex items-start gap-3 mb-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: role.color + "15",
                    border: `1px solid ${role.color}25`,
                  }}
                >
                  {role.icon}
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-sm"
                    style={{ color: role.color }}
                  >
                    {role.role}
                  </h3>
                  {("period" in role) && (
                    <p className="text-[#A1A1AA] text-xs font-mono">{String((role as Record<string,unknown>)["period"] ?? "")}</p>
                  )}
                </div>
              </div>

              <p className="font-semibold text-white text-sm mb-2 relative z-10">
                {role.org}
              </p>
              <p className="text-[#A1A1AA] text-xs leading-relaxed relative z-10">
                {role.description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: role.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* AIESEC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest text-center mb-5">Other Organisations</p>
          <div className="max-w-xl mx-auto">
            <div
              className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00FFB2]/25 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${aiesec.color}08, transparent 60%)` }} />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: aiesec.color + "15", border: `1px solid ${aiesec.color}25` }}
              >
                {aiesec.icon}
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-display font-bold text-white">{aiesec.org}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-mono border"
                    style={{ color: aiesec.color, borderColor: aiesec.color + "40", background: aiesec.color + "10" }}
                  >
                    {aiesec.period}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: aiesec.color }}>{aiesec.role}</p>
                <p className="text-[#A1A1AA] text-xs leading-relaxed">{aiesec.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
