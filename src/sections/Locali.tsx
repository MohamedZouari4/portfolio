import { useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, FileText, Folder, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import {
  MODULES,
  OVERALL,
  PHASE_MODULES,
  isPhysical,
  localiContent,
  pct,
  type LocaliContent,
  type ModuleId,
  type ModuleMeta,
} from "../data/locali";
import localiLogo from "../assets/locali-logo.svg";

const GREEN = "#00FFB2";
const CYAN = "#00D9FF";
const CORAL = "#FF7A5C";

const NAMES: Record<ModuleId, string> = {
  core: "Core",
  professional: "Professional",
  personal: "Personal",
  connect: "Connect",
  family: "Family",
  enterprise: "Enterprise",
  hardware: "Hardware",
  robotics: "Robotics",
};

const byId = (id: ModuleId) => MODULES.find((m) => m.id === id)!;
const accent = (id: ModuleId) => (isPhysical(id) ? CORAL : GREEN);
const barPct = (m: ModuleMeta) => (m.base ? 100 : pct(m));

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function statusLabel(m: ModuleMeta, c: LocaliContent) {
  if (m.base) return c.labels.insidePro;
  if (!m.total) return c.labels.idea;
  return m.done ? c.labels.inProgress : c.labels.planned;
}

function figure(m: ModuleMeta, c: LocaliContent) {
  if (m.base) return c.labels.baseReady;
  if (!m.total) return c.labels.noTasks;
  return `${pct(m)}% · ${c.labels.tasks(m.done, m.total)}`;
}

export default function Locali() {
  const { t, lang } = useLang();
  const c = localiContent[lang];
  const overallPct = Math.round((OVERALL.done / OVERALL.total) * 100);

  const stats = [
    { value: `${overallPct}%`, label: `${c.stats.overall} (${OVERALL.done})` },
    { value: `${pct(byId("professional"))}%`, label: c.stats.professional },
    { value: c.stats.modulesValue, label: c.stats.modules },
    { value: `${OVERALL.active}`, label: c.stats.active },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_8%,rgba(0,217,255,0.12),transparent_28%),radial-gradient(circle_at_15%_30%,rgba(0,255,178,0.06),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_30%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pt-10 md:pt-20">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#00D9FF] transition-colors">
            <ArrowLeft size={15} className="rtl:rotate-180" />
            {t("product.back")}
          </Link>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-center mt-14 md:mt-20">
            <div>
              <img src={localiLogo} alt="Locali logo" className="h-16 w-16 mb-8" />
              <div className="flex items-center gap-3 mb-7">
                <span className="flex h-2 w-2 rounded-full bg-[#00FFB2] shadow-[0_0_14px_#00FFB2]" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00FFB2]">{c.hero.status}</span>
              </div>
              <p className="font-mono text-sm text-[#00D9FF] mb-4">01 / {c.hero.eyebrow}</p>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
                Locali<span className="text-[#00D9FF]">.</span>
              </h1>
              <p className="font-display text-2xl sm:text-3xl text-[#D4D4D8] mt-7">{c.hero.tagline}</p>
              <p className="max-w-xl text-[#A1A1AA] text-base md:text-lg leading-relaxed mt-7">{c.hero.description}</p>
              <p className="font-display text-lg text-white border-s-2 border-[#00FFB2] ps-4 mt-7">{c.hero.quote}</p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFB2]/25 bg-[#00FFB2]/8 px-4 py-2 text-sm text-[#00FFB2]">
                  <Sparkles size={15} />
                  {c.hero.role}
                </span>
                <span className="font-mono text-xs text-[#71717A]">{c.hero.byline}</span>
              </div>
            </div>
            <WorkspaceMockup c={c} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <p className="font-display font-bold text-3xl text-white">{s.value}</p>
                <p className="text-xs text-[#71717A] leading-relaxed mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Positioning */}
        <Section n="02" label={c.positioning.label} title={c.positioning.title} intro={c.positioning.text}>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {c.positioning.cards.map((card, i) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-6 ${
                  i === 0
                    ? "border-[#00FFB2]/40 bg-[#00FFB2]/[0.07]"
                    : i === 2
                      ? "border-[#FF7A5C]/30 bg-[#FF7A5C]/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: i === 2 ? CORAL : GREEN }}>
                  {card.badge}
                </span>
                <h3 className="font-display font-semibold text-lg text-white mt-3">{card.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Vision & mission */}
        <Section n="03" label={c.vision.label} title={c.vision.title}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-6">
            <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">{c.vision.text}</p>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">{c.vision.missionTitle}</p>
              <p className="text-[#D4D4D8] text-base md:text-lg leading-relaxed mt-3">{c.vision.mission}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
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
        </Section>

        {/* Ecosystem */}
        <Section n="04" label={c.ecosystem.label} title={c.ecosystem.title} intro={c.ecosystem.intro} id="ecosystem">
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {(["foundation", "experience", "physical"] as const).map((g) => (
              <div
                key={g}
                className={`rounded-2xl border p-5 ${
                  g === "foundation"
                    ? "border-[#00FFB2]/40 bg-[#00FFB2]/[0.07]"
                    : g === "physical"
                      ? "border-[#FF7A5C]/30 bg-[#FF7A5C]/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <h3 className="font-display font-semibold text-white">{c.ecosystem.groups[g].title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {MODULES.filter((m) => m.group === g).map((m) => (
                    <span
                      key={m.id}
                      className="rounded-md border px-2 py-0.5 text-xs"
                      style={{ borderColor: `${accent(m.id)}55`, color: accent(m.id) }}
                    >
                      {NAMES[m.id]}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#71717A] mt-3">{c.ecosystem.groups[g].text}</p>
              </div>
            ))}
          </div>

          <ModuleExplorer c={c} />

          <h3 className="font-display font-semibold text-xl text-white mt-16">{c.ecosystem.capsTitle}</h3>
          <p className="text-sm text-[#71717A] mt-1">{c.ecosystem.capsNote}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {c.ecosystem.caps.map((cap) => (
              <span key={cap} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-[#D4D4D8]">
                {cap}
              </span>
            ))}
            {c.ecosystem.capsLater.map((cap) => (
              <span key={cap} className="rounded-lg border border-dashed border-white/15 px-3 py-2 text-sm text-[#A1A1AA]">
                {cap} <span className="text-xs text-[#52525B]">· {c.ecosystem.later}</span>
              </span>
            ))}
          </div>
        </Section>

        {/* Platform */}
        <Section n="05" label={c.platform.label} title={c.platform.title} intro={c.platform.intro}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {c.platform.core.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-display font-semibold text-sm text-white">{cap.title}</p>
                <p className="text-xs text-[#71717A] leading-relaxed mt-1.5">{cap.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <h3 className="font-display font-semibold text-white">{c.platform.interfacesTitle}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mt-2">{c.platform.interfaces}</p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white">{c.platform.extTitle}</h3>
              <p className="text-sm text-[#A1A1AA] mt-2">{c.platform.extIntro}</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3">
                {c.platform.ext.map((e) => (
                  <li key={e} className="flex gap-2 text-sm text-[#A1A1AA]">
                    <Check size={15} className="mt-0.5 shrink-0 text-[#00FFB2]" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-display font-semibold text-xl text-white mt-14">{c.platform.flowTitle}</h3>
          <p className="text-sm text-[#71717A] mt-1">{c.platform.flowNote}</p>
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mt-5">
            {c.platform.flow.map((step, i) => {
              const exec = i === 5;
              return (
                <li
                  key={step.title}
                  className={`rounded-xl border p-3.5 ${exec ? "border-[#FF7A5C]/40 bg-[#FF7A5C]/[0.06]" : "border-white/10 bg-white/[0.02]"}`}
                >
                  <p className="font-display font-semibold text-sm" style={{ color: exec ? CORAL : GREEN }}>
                    {i + 1}. {step.title}
                  </p>
                  <p className="text-xs text-[#71717A] leading-relaxed mt-1">{step.text}</p>
                  {exec && <p className="text-[11px] leading-snug mt-2" style={{ color: CORAL }}>{c.platform.robotsFlow}</p>}
                </li>
              );
            })}
          </ol>
        </Section>

        {/* Principles */}
        <Section n="06" label={c.principles.label} title={c.principles.title}>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mt-10">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {c.principles.items.map((p) => (
                <div key={p.title}>
                  <p className="font-display font-semibold text-white">{p.title}</p>
                  <p className="text-sm text-[#71717A] leading-relaxed mt-1">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#FF7A5C]/30 bg-[#FF7A5C]/[0.04] p-6 self-start">
              <h3 className="flex items-center gap-2 font-display font-semibold" style={{ color: CORAL }}>
                <ShieldCheck size={18} /> {c.principles.robotsTitle}
              </h3>
              <ul className="space-y-2 mt-4">
                {c.principles.robots.map((r) => (
                  <li key={r} className="text-sm text-[#A1A1AA] leading-relaxed">• {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Roadmap */}
        <Section n="07" label={c.roadmap.label} title={c.roadmap.title} intro={c.roadmap.intro}>
          <ol className="mt-10 space-y-3">
            {c.roadmap.phases.map((phase, i) => {
              const id = PHASE_MODULES[i];
              const m = byId(id);
              const now = i === 0;
              const col = accent(id);
              return (
                <li
                  key={phase.name}
                  className={`grid grid-cols-[2.75rem_1fr] gap-4 rounded-2xl border p-5 ${
                    now ? "border-[#00FFB2]/35 bg-[#00FFB2]/[0.05]" : "border-white/8 bg-white/[0.015]"
                  }`}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full font-display font-bold"
                    style={now ? { background: GREEN, color: "#0A0A0A" } : { background: `${col}1A`, color: col }}
                  >
                    {i + 1}
                  </span>
                  <div className="grid md:grid-cols-[1.2fr_1fr] gap-x-8 gap-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-semibold text-white">
                          {c.labels.phase} {i + 1}: {phase.name}
                        </h3>
                        {now && (
                          <span className="rounded-full bg-[#00FFB2]/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#00FFB2]">
                            {c.labels.now}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed mt-1">{phase.objective}</p>
                      <p className="text-sm text-[#71717A] leading-relaxed mt-2 border-s-2 ps-3" style={{ borderColor: `${col}66` }}>
                        <span className="text-[#A1A1AA]">{c.labels.gate}:</span> {phase.gate}
                      </p>
                    </div>
                    <div className="md:pt-1">
                      <Bar value={barPct(m)} color={col} />
                      <p className="font-mono text-[11px] text-[#71717A] mt-2">
                        {figure(m, c)}
                        {id === "family" && ` · Enterprise ${figure(byId("enterprise"), c)}`}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mt-6">
            <h3 className="font-display font-semibold text-white">{c.roadmap.disciplineTitle}</h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
              {c.roadmap.discipline.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-[#A1A1AA] leading-relaxed">
                  <Check size={15} className="mt-0.5 shrink-0 text-[#00FFB2]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Progress */}
        <Section n="08" label={c.progress.label} title={c.progress.title} intro={c.progress.snapshot}>
          <div className="mt-8">
            {["professional", "core", "personal", "connect", "family", "enterprise", "hardware", "robotics"].map((id) => {
              const m = byId(id as ModuleId);
              return (
                <div key={id} className="grid grid-cols-[minmax(0,9rem)_1fr] sm:grid-cols-[10rem_1fr_13rem] gap-x-5 gap-y-2 items-center py-3 border-b border-white/8">
                  <span className="font-display font-semibold text-sm text-white">
                    {NAMES[m.id]}
                    {m.base ? ` ${c.labels.foundation}` : ""}
                  </span>
                  <span className="font-mono text-xs text-[#71717A] sm:order-last">
                    <span className="text-white me-2">{m.base ? "✓" : m.total ? `${pct(m)}%` : "—"}</span>
                    {m.base ? "21 / 21" : m.total ? `${m.done} / ${m.total} · ${statusLabel(m, c)}` : statusLabel(m, c)}
                  </span>
                  <div className="col-span-2 sm:col-span-1">
                    <Bar value={barPct(m)} color={accent(m.id)} />
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-[minmax(0,9rem)_1fr] sm:grid-cols-[10rem_1fr_13rem] gap-x-5 gap-y-2 items-center py-3">
              <span className="font-display font-bold text-sm text-white">{c.labels.overall}</span>
              <span className="font-mono text-xs text-[#71717A] sm:order-last">
                <span className="text-white me-2">{overallPct}%</span>
                {OVERALL.done} / {OVERALL.total}
              </span>
              <div className="col-span-2 sm:col-span-1">
                <Bar value={overallPct} color={CYAN} />
              </div>
            </div>
          </div>
          <p className="text-xs text-[#71717A] leading-relaxed mt-6 max-w-3xl">{c.progress.note}</p>
        </Section>

        {/* Long term */}
        <Section n="09" label={c.longterm.label} title={c.longterm.title} intro={c.longterm.intro}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {c.longterm.items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-display font-semibold text-white">{it.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed mt-2">{it.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Business */}
        <Section n="10" label={c.business.label} title={c.business.title} intro={c.business.intro}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {c.business.items.map((it, i) => (
              <div
                key={it.title}
                className={`rounded-2xl border p-5 ${i > 3 ? "border-[#FF7A5C]/30 bg-[#FF7A5C]/[0.03]" : "border-white/10 bg-white/[0.02]"}`}
              >
                <h3 className="font-display font-semibold text-white">{it.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed mt-2">{it.text}</p>
              </div>
            ))}
          </div>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.02] mt-10">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF] me-3">{c.risks.label}</span>
                <span className="font-display font-semibold text-white">{c.risks.title}</span>
              </span>
              <ChevronDown size={18} className="shrink-0 text-[#71717A] transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-start text-xs text-[#71717A]">
                    {c.risks.cols.map((col) => (
                      <th key={col} className="text-start font-medium py-2 pe-4">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.risks.items.map(([risk, why, validate]) => (
                    <tr key={risk} className="border-t border-white/8 align-top">
                      <td className="py-3 pe-4 font-semibold text-white">{risk}</td>
                      <td className="py-3 pe-4 text-[#A1A1AA]">{why}</td>
                      <td className="py-3 text-[#A1A1AA]">{validate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </Section>

        {/* Closing */}
        <Section n="11" label={c.closing.label} title={c.closing.title}>
          <div className="grid md:grid-cols-[1fr_1fr] gap-10 mt-6">
            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
              {c.closing.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#00FFB2]/15 to-[#00D9FF]/10 border border-[#00FFB2]/25 p-8 self-start">
              <p className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">{c.hero.tagline}</p>
              <p className="font-display text-lg text-[#D4D4D8] mt-5">“{c.closing.quote}”</p>
            </div>
          </div>
        </Section>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-6 border-t border-white/5 text-xs font-mono uppercase tracking-[0.16em] text-[#71717A]">
          {c.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
}

function Section({
  n,
  label,
  title,
  intro,
  id,
  children,
}: {
  n: string;
  label: string;
  title: string;
  intro?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <motion.section {...reveal} id={id} className="border-t border-white/10 mt-24 pt-10 md:pt-14 scroll-mt-24">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">
        {n} / {label}
      </p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 max-w-3xl">{title}</h2>
      {intro && <p className="max-w-3xl text-[#A1A1AA] text-base md:text-lg leading-relaxed mt-5">{intro}</p>}
      {children}
    </motion.section>
  );
}

function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-2 rounded-full bg-white/8 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

/* ---------- Ecosystem map + module detail ---------- */

const MAP_W = 560;
const MAP_H = 440;
const RING_F = [0, 0.44, 0.63, 0.82, 1];
const RX = MAP_W / 2 - 62;
const RY = MAP_H / 2 - 48;

function nodePos(m: ModuleMeta): [number, number] {
  const cx = MAP_W / 2;
  const cy = MAP_H / 2;
  if (!m.ring) return [cx, cy];
  const a = (m.angle * Math.PI) / 180;
  return [cx + Math.cos(a) * RX * RING_F[m.ring], cy + Math.sin(a) * RY * RING_F[m.ring]];
}

function ModuleExplorer({ c }: { c: LocaliContent }) {
  const [sel, setSel] = useState<ModuleId>("professional");
  const m = byId(sel);
  const txt = c.modules[sel];
  const col = accent(sel);
  const physical = isPhysical(sel);

  const onKey = (id: ModuleId) => (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSel(id);
    }
  };

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
        <div className="rounded-2xl border border-white/10 bg-[#0B0F0E]/70 p-2">
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="w-full h-auto" role="img" aria-label={c.ecosystem.mapLabel}>
            {[1, 2, 3, 4].map((r) => (
              <ellipse
                key={r}
                cx={MAP_W / 2}
                cy={MAP_H / 2}
                rx={RX * RING_F[r]}
                ry={RY * RING_F[r]}
                fill="none"
                stroke={r === 4 ? `${CORAL}55` : "rgba(255,255,255,0.09)"}
                strokeWidth={1.5}
                strokeDasharray={r === 4 ? "6 6" : undefined}
              />
            ))}
            {MODULES.filter((n) => n.ring).map((n) => {
              const [x, y] = nodePos(n);
              return (
                <line
                  key={n.id}
                  x1={MAP_W / 2}
                  y1={MAP_H / 2}
                  x2={x}
                  y2={y}
                  stroke={isPhysical(n.id) ? `${CORAL}55` : `${GREEN}33`}
                  strokeDasharray={isPhysical(n.id) ? "4 4" : undefined}
                />
              );
            })}
            {MODULES.map((n) => {
              const [x, y] = nodePos(n);
              const on = sel === n.id;
              const a = accent(n.id);
              if (!n.ring) {
                return (
                  <g
                    key={n.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`LOCALI Core, ${c.labels.baseReady}`}
                    aria-pressed={on}
                    onClick={() => setSel(n.id)}
                    onKeyDown={onKey(n.id)}
                    className="cursor-pointer outline-none"
                  >
                    {on && <circle cx={x} cy={y} r={40} fill="none" stroke="white" strokeWidth={1.5} />}
                    <circle cx={x} cy={y} r={32} fill={GREEN} />
                    <text x={x} y={y + 5} textAnchor="middle" fontSize={15} fontWeight={700} fill="#0A0A0A">
                      Core
                    </text>
                  </g>
                );
              }
              const p = pct(n);
              const R = 15;
              const C = 2 * Math.PI * R;
              const up = n.id === "professional";
              return (
                <g
                  key={n.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`LOCALI ${NAMES[n.id]}, ${c.labels.phase} ${n.phase}, ${figure(n, c)}`}
                  aria-pressed={on}
                  onClick={() => setSel(n.id)}
                  onKeyDown={onKey(n.id)}
                  className="cursor-pointer outline-none"
                >
                  <circle cx={x} cy={y} r={24} fill="transparent" stroke={on ? "white" : "transparent"} strokeWidth={1.5} />
                  <circle cx={x} cy={y} r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={4} />
                  {p > 0 && (
                    <circle
                      cx={x}
                      cy={y}
                      r={R}
                      fill="none"
                      stroke={a}
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeDasharray={`${(C * p) / 100} ${C}`}
                      transform={`rotate(-90 ${x} ${y})`}
                    />
                  )}
                  <circle cx={x} cy={y} r={8} fill={p ? a : "#0B0F0E"} stroke={a} strokeWidth={p ? 0 : 2.5} />
                  <text x={x} y={up ? y - 46 : y + 38} textAnchor="middle" fontSize={15} fontWeight={600} fill="white">
                    {NAMES[n.id]}
                  </text>
                  <text x={x} y={up ? y - 30 : y + 54} textAnchor="middle" fontSize={12} fill="#71717A">
                    {c.labels.phase} {n.phase} · {n.total ? `${p}%` : c.labels.idea}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border p-6 flex flex-col"
            style={{ borderColor: `${col}44`, background: physical ? "rgba(255,122,92,0.04)" : "rgba(255,255,255,0.02)" }}
            aria-live="polite"
          >
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold" style={{ background: `${col}1F`, color: col }}>
                {c.labels.phase} {m.phase}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-[#A1A1AA]">
                {c.ecosystem.groups[m.group].title}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mt-4">LOCALI {NAMES[sel]}</h3>
            <p className="text-sm font-semibold mt-1" style={{ color: col }}>{txt.tag}</p>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mt-3">{txt.role}</p>
            <div className="mt-auto pt-5">
              <div className="flex flex-wrap justify-between gap-2 text-xs mb-2">
                <span className="text-[#A1A1AA]">{statusLabel(m, c)}</span>
                <span className="font-mono text-white">{figure(m, c)}</span>
              </div>
              <Bar value={barPct(m)} color={col} />
              <p className="text-xs text-[#71717A] leading-relaxed mt-3">{txt.status}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label={c.ecosystem.label}>
        {MODULES.map((n) => {
          const on = sel === n.id;
          const a = accent(n.id);
          return (
            <button
              key={n.id}
              type="button"
              aria-pressed={on}
              onClick={() => setSel(n.id)}
              className="min-h-[40px] rounded-lg border px-3.5 text-sm transition-colors"
              style={on ? { background: a, borderColor: a, color: "#0A0A0A" } : { borderColor: "rgba(255,255,255,0.12)", color: "#D4D4D8" }}
            >
              {NAMES[n.id]}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-[#52525B] mt-3">{c.ecosystem.mapNote}</p>

      <AnimatePresence mode="wait">
        <motion.article
          key={sel}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-[1.25fr_1fr] gap-6 mt-8"
        >
          <div className="space-y-6">
            <div className="rounded-2xl border p-6" style={{ borderColor: `${CYAN}33`, background: "rgba(0,217,255,0.04)" }}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00D9FF]">{c.labels.example}</p>
              <p className="text-[#D4D4D8] leading-relaxed mt-3">{txt.example}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-display font-semibold text-white">{txt.doesTitle}</h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-5">
                {txt.does.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-[#A1A1AA] leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: col }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5 self-start">
            <div>
              <h4 className="font-display font-semibold text-white">{c.labels.who}</h4>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mt-1.5">{txt.who}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white">{c.labels.why}</h4>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mt-1.5">{txt.why}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white">{txt.firstTitle ?? c.labels.first}</h4>
              <ol className="space-y-2 mt-2.5">
                {txt.first.map((f, i) => (
                  <li key={f} className="flex gap-3 text-sm text-[#A1A1AA] leading-relaxed">
                    <span className="font-mono text-xs mt-0.5 shrink-0" style={{ color: col }}>0{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ol>
            </div>
            {txt.opens && (
              <div>
                <h4 className="font-display font-semibold text-white">{c.labels.opens}</h4>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mt-1.5">{txt.opens}</p>
              </div>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Hero mockup ---------- */

function WorkspaceMockup({ c }: { c: LocaliContent }) {
  const m = c.mock;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
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
                <div key={p} className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${i === 0 ? "bg-white/6 text-white" : ""}`}>
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
