import { motion } from "framer-motion";
import { ArrowLeft, Check, FileText, Folder, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import { localiContent, localiProgress } from "../data/locali";
import localiLogo from "../assets/locali-logo.svg";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const progressPct = Math.round((localiProgress.done / localiProgress.total) * 100);

export default function Locali() {
  const { t, lang } = useLang();
  const c = localiContent[lang];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(0,217,255,0.12),transparent_28%),radial-gradient(circle_at_15%_70%,rgba(0,255,178,0.06),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-10 md:pt-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#00D9FF] transition-colors"
          >
            <ArrowLeft size={15} className="rtl:rotate-180" />
            {t("product.back")}
          </Link>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-center mt-14 md:mt-20">
            <div>
              <img src={localiLogo} alt="Locali logo" className="h-16 w-16 mb-8" />
              <div className="flex items-center gap-3 mb-7">
                <span className="flex h-2 w-2 rounded-full bg-[#00FFB2] shadow-[0_0_14px_#00FFB2]" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00FFB2]">{c.status}</span>
              </div>

              <p className="font-mono text-sm text-[#00D9FF] mb-4">01 / {c.eyebrow}</p>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
                Locali<span className="text-[#00D9FF]">.</span>
              </h1>
              <p className="font-display text-2xl sm:text-3xl text-[#D4D4D8] mt-7">{c.tagline}</p>
              <p className="max-w-xl text-[#A1A1AA] text-base md:text-lg leading-relaxed mt-7">{c.description}</p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFB2]/25 bg-[#00FFB2]/8 px-4 py-2 text-sm text-[#00FFB2]">
                  <Sparkles size={15} />
                  {c.role}
                </span>
                <span className="font-mono text-xs text-[#71717A]">{c.byline}</span>
              </div>
            </div>

            <WorkspaceMockup />
          </div>
        </motion.div>

        {/* LOCALI Professional */}
        <motion.section {...reveal} id="professional" className="border-t border-white/10 mt-24 md:mt-32 pt-10 md:pt-14">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">{c.pro.label}</p>
            <span className="rounded-full border border-[#00FFB2]/30 bg-[#00FFB2]/10 px-3 py-1 text-xs text-[#00FFB2]">
              {c.pro.subtitle}
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">{c.pro.title}</h2>
          <p className="max-w-3xl text-[#D4D4D8] text-lg md:text-xl leading-relaxed mt-5">{c.pro.role}</p>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6 mt-10">
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#00D9FF]/20 bg-[#00D9FF]/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00D9FF]">{c.pro.exampleLabel}</p>
                <p className="text-[#D4D4D8] leading-relaxed mt-3">{c.pro.example}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display font-semibold text-lg text-white">{c.pro.doesTitle}</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-5">
                  {c.pro.does.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#A1A1AA] leading-relaxed">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#00FFB2]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm text-[#A1A1AA]">{c.pro.progressLabel}</span>
                  <span className="font-mono text-sm text-white">
                    <span className="font-display font-bold text-2xl text-[#00FFB2]">{progressPct}%</span> · {c.pro.progressValue}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#00FFB2]"
                  />
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mt-4">{c.pro.progressStep}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525B] mt-4">{c.pro.snapshot}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
                <div>
                  <h3 className="font-display font-semibold text-white">{c.pro.whoTitle}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mt-2">{c.pro.who}</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">{c.pro.whyTitle}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mt-2">{c.pro.why}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display font-semibold text-white">{c.pro.launchTitle}</h3>
                <ol className="space-y-2.5 mt-4">
                  {c.pro.launch.map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm text-[#A1A1AA] leading-relaxed">
                      <span className="font-mono text-xs text-[#00D9FF] mt-0.5 shrink-0">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ecosystem roadmap */}
        <motion.section {...reveal} className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20 border-t border-white/10 mt-24 pt-10 md:pt-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">{c.roadmap.label}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4">{c.roadmap.title}</h2>
            <p className="text-[#A1A1AA] leading-relaxed mt-5">{c.roadmap.intro}</p>
          </div>
          <ol className="space-y-2">
            {c.roadmap.phases.map((phase, i) => {
              const active = i === 0;
              return (
                <li
                  key={phase.name}
                  className={`grid grid-cols-[2.5rem_1fr] gap-4 items-start rounded-xl px-4 py-3.5 ${
                    active ? "border border-[#00FFB2]/30 bg-[#00FFB2]/[0.06]" : "border border-transparent"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-display font-bold ${
                      active ? "bg-[#00FFB2] text-[#0A0A0A]" : "bg-white/5 text-[#71717A]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-display font-semibold ${active ? "text-white" : "text-[#D4D4D8]"}`}>
                        LOCALI {phase.name}
                      </span>
                      {active && (
                        <span className="rounded-full bg-[#00FFB2]/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#00FFB2]">
                          {c.roadmap.now}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#71717A] leading-relaxed mt-1">{phase.objective}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </motion.section>

        {/* Vision & mission */}
        <motion.section {...reveal} className="border-t border-white/10 mt-24 pt-10 md:pt-14">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">{c.vision.label}</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4">{c.vision.title}</h2>
              <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed mt-5">{c.vision.text}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">{c.vision.missionTitle}</p>
              <p className="text-[#D4D4D8] text-base md:text-lg leading-relaxed mt-4">{c.vision.mission}</p>
              <p className="font-display text-xl md:text-2xl text-white mt-8">“{c.quote}”</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {c.vision.promise.map((p) => (
              <div key={p.title} className="border-t-2 border-[#00FFB2]/60 pt-4">
                <p className="font-display font-semibold text-white">{p.title}</p>
                <p className="text-sm text-[#71717A] leading-relaxed mt-1.5">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="flex gap-2 text-xs text-[#71717A] leading-relaxed mt-10 max-w-3xl">
            <LockKeyhole size={13} className="mt-0.5 shrink-0" />
            {c.vision.note}
          </p>
        </motion.section>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-6 border-t border-white/5 text-xs font-mono uppercase tracking-[0.16em] text-[#71717A]">
          {c.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
}

function WorkspaceMockup() {
  const { lang } = useLang();
  const m = localiContent[lang].mock;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[2rem] bg-[#00D9FF]/10 blur-3xl" />
      <div className="relative rounded-2xl border border-white/10 bg-[#101313]/90 shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <img src={localiLogo} alt="" className="h-7 w-7" />
            <span className="font-display font-semibold text-sm text-white">locali professional</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFB2]" />
            <span className="font-mono text-[10px] text-[#71717A]">{m.privateLabel}</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-[0.7fr_1.3fr] min-h-[330px]">
          <aside className="hidden sm:block border-e border-white/8 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525B] mb-5">{m.projectsLabel}</p>
            <div className="space-y-2 text-xs text-[#A1A1AA]">
              {m.projects.map((p, i) => (
                <div
                  key={p}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${i === 0 ? "bg-white/6 text-white" : ""}`}
                >
                  <Folder size={13} className={i === 0 ? "text-[#00D9FF]" : ""} /> {p}
                </div>
              ))}
            </div>
          </aside>
          <div className="p-5 md:p-7 flex flex-col gap-4">
            <div className="self-end max-w-[85%] rounded-2xl rounded-ee-sm bg-[#00D9FF]/15 border border-[#00D9FF]/25 px-4 py-3 text-sm text-white">
              {m.question}
            </div>
            <div className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
              <div className="flex items-center gap-2 text-xs text-[#00FFB2]">
                <Sparkles size={13} /> Locali
              </div>
              <p className="text-sm text-[#D4D4D8] leading-relaxed mt-2.5">{m.answer}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {m.sources.map((s) => (
                  <span
                    key={s}
                    dir="ltr"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-[#A1A1AA]"
                  >
                    <FileText size={11} className="text-[#F6C85F]" /> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-white/8 px-5 py-3">
          <LockKeyhole size={12} className="text-[#52525B]" />
          <span className="font-mono text-[10px] text-[#52525B]">{m.footer}</span>
        </div>
      </div>
    </motion.div>
  );
}
