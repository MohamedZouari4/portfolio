import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { awards, certifications, exploring } from "../data";

export default function AwardsSection() {
  return (
    <SectionWrapper id="awards" className="bg-[#080808]/80">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle badge="Recognition" subtitle="Awards, certifications, and achievements">
          Awards & Honors
        </SectionTitle>

        {/* Awards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: award.color + "20" }}
              />

              <div
                className={`relative glass rounded-2xl p-7 border border-white/5 bg-gradient-to-br ${award.gradient} overflow-hidden`}
              >
                {/* Emoji */}
                <motion.div
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: i * 1.5 }}
                  className="text-5xl mb-5 block"
                >
                  {award.emoji}
                </motion.div>

                {/* Year badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-mono font-bold"
                    style={{
                      background: award.color + "20",
                      color: award.color,
                      border: `1px solid ${award.color}30`,
                    }}
                  >
                    {award.year}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-white text-lg mb-2 leading-tight">
                  {award.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm font-semibold mb-3">
                  {award.event}
                </p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {award.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-40"
                  style={{ background: `linear-gradient(90deg, ${award.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: cert.color + "15",
                    border: `1px solid ${cert.color}25`,
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{cert.name}</p>
                  <p className="text-[#A1A1AA] text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold text-2xl text-white text-center mb-3">
            Currently Exploring
          </h3>
          <p className="text-[#A1A1AA] text-center mb-8">
            Technologies and concepts I'm actively researching
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {exploring.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-white/5 group cursor-default"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className="text-sm font-semibold transition-colors duration-300"
                  style={{ color: "#A1A1AA" }}
                >
                  {item.topic}
                </span>
                {/* Animated dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
