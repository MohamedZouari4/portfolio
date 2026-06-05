import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Tag } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data";
import { useEffect } from "react";

type Project = (typeof projects)[number];

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed inset-0 z-[160] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#111] shadow-2xl pointer-events-auto"
              style={{ boxShadow: `0 0 60px ${project.color}20` }}
            >
              {/* Top accent line */}
              <div className="h-1 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Tag size={12} style={{ color: project.color }} />
                      <span className="text-xs font-mono font-semibold" style={{ color: project.color }}>
                        {project.category}
                      </span>
                    </div>
                    <h2 className="font-display font-black text-2xl text-white">{project.title}</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all duration-200"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded-full" style={{ background: project.color }} />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="mb-6">
                  <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded-full" style={{ background: project.color }} />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                        style={{ background: project.color + "15", color: project.color, border: `1px solid ${project.color}25` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-5 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all duration-200 bg-white/[0.03]"
                    >
                      <GitHubIcon size={15} />
                      View on GitHub
                    </a>
                  )}
                  <a
                    href={project.github ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: project.color }}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
