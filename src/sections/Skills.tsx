import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { skills } from "../data";

// Map skill names → devicon slug (only where icons exist)
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
};

function DeviconImg({ name, color }: { name: string; color: string }) {
  const slug = deviconMap[name];
  if (!slug) return <span className="w-4 h-4 rounded-sm flex-shrink-0" style={{ background: color + "40" }} />;
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
      alt={name}
      className="w-4 h-4 flex-shrink-0 object-contain"
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
    />
  );
}

function SkillBar({ name, level, color, index }: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
          <DeviconImg name={name} color={color} />
          {name}
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: animated ? level / 100 : 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.keys(skills)];

  const filteredSkills = Object.entries(skills).filter(([cat]) =>
    activeCategory === "All" || cat === activeCategory
  );

  return (
    <SectionWrapper id="skills" className="bg-[#080808]/80">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle badge="Skills" subtitle="A comprehensive tech stack spanning AI, frontend, backend, and cloud">
          Technical Expertise
        </SectionTitle>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]" />
            <input
              type="text"
              placeholder="Search skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl glass border border-white/10 text-sm text-white placeholder:text-[#A1A1AA] bg-transparent focus:outline-none focus:border-[#00D9FF]/40 transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30"
                    : "glass border border-white/8 text-[#A1A1AA] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(([category, { color, items }], ci) => {
            const filtered = items.filter((item) =>
              item.name.toLowerCase().includes(query.toLowerCase())
            );
            if (filtered.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 border border-white/5 card-hover"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ background: color }}
                  />
                  <div>
                    <h3 className="font-display font-bold text-white text-sm">
                      {category}
                    </h3>
                    <p className="text-[#A1A1AA] text-xs">{filtered.length} skills</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {filtered.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={color}
                      index={si}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 border border-white/5"
        >
          <p className="text-center text-[#A1A1AA] text-sm mb-5 font-mono">
            // Full technology radar
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Python","React","FastAPI","TypeScript","Spring Boot","Docker","PostgreSQL",
              "pgvector","Ollama","Qwen","LLMs","RAG","NLP","Hugging Face","AWS",
              "Django",".NET","Java","C#","MySQL","Linux","Git","CI/CD","Scrum","REST APIs",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium glass border border-white/8 text-[#A1A1AA] hover:text-white hover:border-[#00D9FF]/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
