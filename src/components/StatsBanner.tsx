import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 3, suffix: "+", label: "Years Programming", color: "#00D9FF" },
  { value: 3, suffix: "+", label: "Internships", color: "#7C3AED" },
  { value: 15, suffix: "+", label: "IEEE Roles", color: "#00D9FF" },
  { value: 7, suffix: "+", label: "Projects", color: "#7C3AED" },
  { value: 4, suffix: "", label: "Languages Spoken", color: "#00FFB2" },
  { value: 10, suffix: "+", label: "Events Organized", color: "#00FFB2" },
];

export default function StatsBanner() {
  return (
    <section className="relative z-10 py-6 overflow-hidden">
      {/* Top / bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/[0.03] via-[#7C3AED]/[0.03] to-[#00FFB2]/[0.03]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 divide-x divide-white/[0.06]">
          {stats.map(({ value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center justify-center py-4 px-3 text-center group"
            >
              <AnimatedCounter
                value={value}
                suffix={suffix}
                className="font-display font-black text-2xl sm:text-3xl mb-0.5"
                style={{ color }}
              />
              <p className="text-[#555] text-[10px] sm:text-xs font-mono uppercase tracking-wider group-hover:text-[#A1A1AA] transition-colors duration-200">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
