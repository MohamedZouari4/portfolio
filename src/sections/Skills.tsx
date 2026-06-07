import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { skills } from "../data";
import { useLang } from "../lib/LangContext";

const deviconMap: Record<string, string> = {
  "Python": "python",
  "Java": "java",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "C#": "csharp",
  "PHP": "php",
  "C": "c",
  "React": "react",
  "HTML/CSS": "html5",
  "FastAPI": "fastapi",
  "Spring Boot": "spring",
  "Django": "django",
  ".NET": "dot-net",
  "PostgreSQL / pgvector": "postgresql",
  "MySQL": "mysql",
  "SQL Server": "microsoftsqlserver",
  "Oracle": "oracle",
  "Docker": "docker",
  "AWS": "amazonwebservices",
  "Linux": "linux",
  "Git / GitHub": "github",
  "Tailwind CSS": "tailwindcss",
  "SQL": "postgresql",
};

const tabLabels: Record<string, string> = {
  "All": "All",
  "Programming Languages": "Languages",
  "Frontend": "Frontend",
  "Backend": "Backend",
  "AI & Machine Learning": "AI / ML",
  "Databases": "Databases",
  "Cloud & DevOps": "DevOps",
};

const tabIcons: Record<string, string> = {
  "All": "✦",
  "Programming Languages": "⌨️",
  "Frontend": "🎨",
  "Backend": "⚙️",
  "AI & Machine Learning": "🤖",
  "Databases": "🗄️",
  "Cloud & DevOps": "☁️",
};

function SkillIcon({ name, color }: { name: string; color: string }) {
  const slug = deviconMap[name];
  if (!slug) {
    return (
      <span
        className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
        style={{ background: color + "25", color }}
      >
        {name[0]}
      </span>
    );
  }
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
      alt={name}
      className="w-5 h-5 flex-shrink-0 object-contain"
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.style.display = "none";
        el.parentElement?.querySelector(".fallback")?.classList.remove("hidden");
      }}
    />
  );
}

export default function SkillsSection() {
  const { t } = useLang();
  const [active, setActive] = useState("All");

  const categories = ["All", ...Object.keys(skills)];

  type SkillItem = { name: string; level: number; color: string; category: string };

  const allSkills: SkillItem[] = Object.entries(skills).flatMap(([cat, { color, items }]) =>
    items.map((item) => ({ ...item, color, category: cat }))
  );

  const displayed: SkillItem[] =
    active === "All"
      ? allSkills
      : (skills[active as keyof typeof skills]?.items ?? []).map((item) => ({
          ...item,
          color: skills[active as keyof typeof skills].color,
          category: active,
        }));

  const activeColor = active === "All" ? "#00D9FF" : skills[active as keyof typeof skills]?.color ?? "#00D9FF";

  return (
    <SectionWrapper id="skills" className="bg-[#080808]/80">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionTitle badge="Skills" subtitle={t("skills.subtitle")}>
          {t("skills.title")}
        </SectionTitle>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const color = cat === "All" ? "#00D9FF" : skills[cat as keyof typeof skills]?.color ?? "#00D9FF";
            const isActive = active === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  isActive
                    ? { background: color + "20", color, border: `1px solid ${color}50` }
                    : { background: "rgba(255,255,255,0.04)", color: "#A1A1AA", border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                <span>{tabIcons[cat] ?? "•"}</span>
                <span>{tabLabels[cat] ?? cat}</span>
                {isActive && (
                  <span
                    className="ml-1 text-xs px-1.5 py-0.5 rounded-full font-mono"
                    style={{ background: color + "30", color }}
                  >
                    {displayed.length}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skill pills */}
        <motion.div layout className="flex flex-wrap justify-center gap-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((skill) => (
              <motion.div
                key={skill.name + skill.category}
                layout
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-default group"
                style={{
                  background: skill.color + "0D",
                  border: `1px solid ${skill.color}25`,
                }}
              >
                <SkillIcon name={skill.name} color={skill.color} />
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Divider + count */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-10 text-xs font-mono"
          style={{ color: activeColor + "80" }}
        >
          // {displayed.length} {active === "All" ? "total skills" : `${tabLabels[active] ?? active} skills`}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}


