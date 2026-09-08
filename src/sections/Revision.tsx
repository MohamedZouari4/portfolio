import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen, GraduationCap, Orbit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";

export default function Revision() {
  const { t } = useLang();

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#0A0712] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(192,132,252,0.12),transparent_25%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(167,139,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 pt-8 text-sm text-[#A1A1AA] hover:text-[#D8B4FE] transition-colors"
        >
          <ArrowLeft size={15} />
          {t("product.back")}
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA]">
            <span className="h-px w-8 bg-[#A78BFA]/60" />
            {t("revision.eyebrow")}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C084FC]/40 bg-[#8B5CF6]/15 px-3.5 py-1.5 text-[11px] font-mono font-semibold tracking-[0.14em] text-[#D8B4FE] shadow-[0_0_24px_rgba(139,92,246,0.18)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D8B4FE] shadow-[0_0_8px_#D8B4FE] animate-pulse" />
            {t("revision.badge")}
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-[#C084FC] mb-5">
              <Sparkles size={16} />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">{t("revision.status")}</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight text-white">
              Revision<span className="text-[#A78BFA]">.</span>TN
            </h1>
            <p className="font-display text-2xl md:text-3xl text-[#E9D5FF] mt-7 leading-tight">
              {t("revision.tagline")}
            </p>
            <p className="max-w-md text-[#A1A1AA] leading-relaxed mt-6">
              {t("revision.description")}
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 mt-8 text-sm text-[#D8B4FE] group">
              {t("revision.cta")}
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <RevisionVisual />
        </div>
      </div>
    </main>
  );
}

function RevisionVisual() {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center"
    >
      <div className="absolute h-64 w-64 rounded-full bg-[#8B5CF6]/20 blur-[90px]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute h-[280px] w-[280px] rounded-full border border-[#A78BFA]/20 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute h-[350px] w-[350px] rounded-full border border-[#C084FC]/10"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[#D8B4FE] shadow-[0_0_15px_#C084FC]" />
      </motion.div>

      <div className="relative w-full max-w-[470px] rounded-[1.75rem] border border-[#A78BFA]/25 bg-[#160E24]/90 p-4 shadow-[0_24px_80px_rgba(76,29,149,0.32)] backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#8B5CF6]/20 text-[#D8B4FE]"><Orbit size={16} /></div>
            <span className="font-display font-semibold text-sm text-white">revision.tn</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#A78BFA]">{t("revision.mock.next")}</span>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0E0916] p-5 sm:p-6">
          <div className="absolute -right-12 -top-16 h-36 w-36 rounded-full bg-[#8B5CF6]/20 blur-2xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#A78BFA]">{t("revision.mock.roadmap")}</p>
              <p className="font-display text-xl font-bold text-white mt-2">{t("revision.mock.momentum")}</p>
            </div>
            <GraduationCap size={26} className="text-[#D8B4FE]" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-8">
            {["revision.mock.discover", "revision.mock.learn", "revision.mock.grow"].map((key, index) => (
              <div key={key} className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                <div className="mb-4 h-1 rounded-full" style={{ background: index === 1 ? "#C084FC" : "#8B5CF6", width: `${58 + index * 16}%` }} />
                <p className="text-[11px] text-[#C4B5FD]">{t(key)}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-5 text-xs text-[#71717A]"><BookOpen size={13} className="text-[#A78BFA]" /> {t("revision.mock.footer")}</div>
        </div>
        <div className="flex items-center justify-between px-2 pt-4 text-[10px] font-mono uppercase tracking-widest text-[#6D5A85]"><span>{t("revision.mock.community")}</span><span>01 / 03</span></div>
      </div>
    </motion.div>
  );
}