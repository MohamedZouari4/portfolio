import { motion } from "framer-motion";
import { useActiveSection } from "../hooks/useCounter";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "ieee", label: "IEEE" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[80] hidden xl:flex flex-col gap-3">
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <div key={section.id} className="relative group flex items-center justify-end gap-2">
            {/* Tooltip */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-mono text-[#A1A1AA] bg-[#0A0A0A]/90 border border-white/10 px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap">
              {section.label}
            </span>
            {/* Dot */}
            <button
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label={`Go to ${section.label}`}
              className="relative w-2 h-2 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              {isActive ? (
                <motion.span
                  layoutId="activeDot"
                  className="block w-2.5 h-2.5 rounded-full bg-[#00D9FF]"
                  style={{ boxShadow: "0 0 8px #00D9FF88" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : (
                <span className="block w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors duration-200" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
