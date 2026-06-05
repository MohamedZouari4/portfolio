import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, MapPin, Briefcase, Zap } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import TypingEffect from "../components/TypingEffect";
import { personal } from "../data";
import heroImage from "../assets/hero.png";
import cvFile from "../assets/Mohamed_ZOUARI_CV_.pdf";

const techStack = ["Python", "FastAPI", "React", "TypeScript", "Docker", "LLMs", "RAG", "PostgreSQL"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00D9FF]/5 blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/8 blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 min-w-0 max-w-xl">

            {/* Open-to-work pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#00FFB2]/30 bg-[#00FFB2]/5 text-[#00FFB2] text-sm font-medium"
            >
              <Briefcase size={14} />
              Seeking Work-Study Program · Open to Opportunities
            </motion.div>

            {/* Greeting + Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[#A1A1AA] text-lg font-mono mb-1 tracking-wide">
                Hey there, I'm
              </p>
              <h1 className="font-display font-black leading-none mb-2">
                <span className="block text-white text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  Mohamed
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-[#00D9FF] via-[#7C3AED] to-[#00FFB2] bg-clip-text text-transparent">
                  Zouari
                </span>
              </h1>

              {/* Availability badge */}
              <div className="flex items-center gap-2 mt-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFB2]" />
                </span>
                <span className="text-[#00FFB2] text-sm font-mono font-medium tracking-wide">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="origin-left h-px w-48 bg-gradient-to-r from-[#00D9FF] to-transparent my-6"
            />

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-1.5 h-6 rounded-full bg-[#00D9FF]" />
              <TypingEffect
                words={personal.taglines}
                className="text-xl sm:text-2xl font-semibold text-white font-mono"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-[#A1A1AA] text-base leading-relaxed mb-8"
            >
              {personal.summary}
            </motion.p>

            {/* Tech stack chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium text-[#A1A1AA] border border-white/10 bg-white/[0.03] hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href={cvFile}
                download="Mohamed_Zouari_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0A0A] bg-[#00D9FF] hover:bg-white transition-all duration-200 hover:shadow-xl hover:shadow-[#00D9FF]/25 hover:-translate-y-0.5 text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/15 hover:border-[#00D9FF]/50 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 text-sm"
                style={{ color: "var(--text)" }}
              >
                View Projects
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: GitHubIcon, href: personal.github, label: "GitHub" },
                { icon: LinkedInIcon, href: personal.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#A1A1AA] hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
              <span className="mx-2 h-px w-12 bg-white/10" />
              <span className="flex items-center gap-1.5 text-[#A1A1AA] text-xs font-mono">
                <MapPin size={12} className="text-[#00D9FF]" />
                Sfax, Tunisia
              </span>
            </motion.div>

            {/* Currently Building */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="mt-8 flex items-center gap-3 px-4 py-3 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 w-fit"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]" />
              </span>
              <Zap size={13} className="text-[#7C3AED]" />
              <span className="text-xs font-mono text-[#A1A1AA]">
                Currently building:{" "}
                <span className="text-[#7C3AED] font-semibold">AI Content Automation Platform</span>
                <span className="text-[#A1A1AA]"> @ ADVISING LTD</span>
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Offset accent border */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#00D9FF]/30 via-[#7C3AED]/20 to-[#00FFB2]/20 blur-xl opacity-70" />
            <div
              className="absolute top-4 left-4 w-full h-full rounded-2xl border border-[#00D9FF]/20"
              style={{ background: "transparent" }}
            />

            {/* Photo card */}
            <div className="relative w-72 sm:w-80 lg:w-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={heroImage}
                alt="Mohamed Zouari"
                className="w-full object-cover"
                style={{ height: "480px", objectPosition: "50% 15%", filter: "brightness(0.85) saturate(0.7)" }}
              />
              {/* Dark overlay to dim background */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 mix-blend-multiply" />
              {/* Subtle bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />

              {/* Name card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight">Mohamed Zouari</p>
                <p className="text-[#00D9FF] text-sm font-mono">AI Engineer · Full-Stack Dev</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
