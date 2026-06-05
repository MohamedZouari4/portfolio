import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";

const setup = [
  {
    category: "Editor & Terminal",
    color: "#00D9FF",
    items: [
      { name: "VS Code", desc: "Primary editor, heavily customised", icon: "💙" },
      { name: "PowerShell / Bash", desc: "Terminal of choice", icon: "🖥️" },
      { name: "GitHub Copilot", desc: "AI pair programming", icon: "🤖" },
    ],
  },
  {
    category: "Languages & Runtimes",
    color: "#7C3AED",
    items: [
      { name: "Python 3.12", desc: "AI, scripts, FastAPI", icon: "🐍" },
      { name: "Node.js / TypeScript", desc: "React, Vite, tooling", icon: "💛" },
      { name: "Java 21", desc: "Spring Boot projects", icon: "☕" },
    ],
  },
  {
    category: "AI & LLM Tools",
    color: "#00FFB2",
    items: [
      { name: "Ollama", desc: "Local LLM inference", icon: "🦙" },
      { name: "Hugging Face", desc: "Models & datasets", icon: "🤗" },
      { name: "LangChain / custom RAG", desc: "Agentic pipelines", icon: "⛓️" },
    ],
  },
  {
    category: "Productivity",
    color: "#F59E0B",
    items: [
      { name: "Notion", desc: "Notes, projects, planning", icon: "📓" },
      { name: "Figma", desc: "UI mockups & design", icon: "🎨" },
      { name: "Docker Desktop", desc: "Container everything", icon: "🐳" },
    ],
  },
  {
    category: "Hardware",
    color: "#00D9FF",
    items: [
      { name: "Windows 11 PC", desc: "Daily driver", icon: "🖱️" },
      { name: "Dual monitors", desc: "For maximum chaos", icon: "🖥️" },
    ],
  },
];

export default function UsesSection() {
  return (
    <SectionWrapper id="uses" className="bg-[#0A0A0A]/80">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="Uses"
          subtitle="Tools, apps and gear that power my daily workflow"
        >
          My Setup
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {setup.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/5 card-hover"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 rounded-full" style={{ background: group.color }} />
                <h3 className="font-display font-bold text-white text-sm">{group.category}</h3>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-[#A1A1AA] text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
