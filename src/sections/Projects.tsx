import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Tag } from "lucide-react";
import { GitHubIcon } from "../components/SocialIcons";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data";

type Project = (typeof projects)[number];

const categories = ["All", "AI", "Full-Stack", "Mobile & Games"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects" className="bg-[#0A0A0A]/80">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D9FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Projects"
          subtitle="Engineering solutions that span AI, Full-Stack, and enterprise systems"
        >
          Featured Work
        </SectionTitle>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/25"
                  : "glass border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(project)}
                className={`group relative glass rounded-2xl border border-white/5 overflow-hidden card-hover cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                        >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/30 text-[#00D9FF] text-xs font-semibold">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </div>
                )}

                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: project.color + "15", border: `1px solid ${project.color}25` }}
                    >
                      {project.category === "AI" ? "🤖" : "💻"}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHubIcon size={14} />
                        </a>
                      )}
                      <button className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={11} style={{ color: project.color }} />
                    <span className="text-xs font-mono font-semibold" style={{ color: project.color }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.features.slice(0, 4).map((f, fi) => (
                        <div
                          key={fi}
                          className="flex items-center gap-1.5 text-xs text-[#A1A1AA]"
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: project.color }}
                          />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          background: project.color + "10",
                          color: project.color + "CC",
                          border: `1px solid ${project.color}20`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  );
}
