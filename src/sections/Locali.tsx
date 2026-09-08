import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Folder, LockKeyhole, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const workspaceItems = [
  { label: "Projects", value: "12 active", color: "#00D9FF" },
  { label: "Knowledge", value: "342 notes", color: "#00FFB2" },
  { label: "Files", value: "1,284 items", color: "#F6C85F" },
];

export default function Locali() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(0,217,255,0.12),transparent_28%),radial-gradient(circle_at_15%_70%,rgba(0,255,178,0.06),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pb-24">
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
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-center mt-14 md:mt-20">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="flex h-2 w-2 rounded-full bg-[#00FFB2] shadow-[0_0_14px_#00FFB2]" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00FFB2]">
                  In development
                </span>
              </div>

              <p className="font-mono text-sm text-[#00D9FF] mb-4">01 / A new kind of workspace</p>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
                Locali<span className="text-[#00D9FF]">.</span>
              </h1>
              <p className="font-display text-2xl sm:text-3xl text-[#D4D4D8] mt-7">
                Your Personal AI Workspace
              </p>
              <p className="max-w-xl text-[#A1A1AA] text-base md:text-lg leading-relaxed mt-7">
                A private, local-first space for understanding and working with your own files, projects, and knowledge through AI.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFB2]/25 bg-[#00FFB2]/8 px-4 py-2 text-sm text-[#00FFB2]">
                  <Sparkles size={15} />
                  Founder &amp; Developer
                </span>
                <span className="font-mono text-xs text-[#71717A]">A startup project by Mohamed Zouari</span>
              </div>
            </div>

            <WorkspaceMockup />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20 border-t border-white/10 mt-24 md:mt-32 pt-10 md:pt-14"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#00D9FF]">The vision</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4">AI that stays close to you.</h2>
          </div>
          <div className="max-w-2xl text-[#A1A1AA] text-base md:text-lg leading-relaxed space-y-5">
            <p>
              Locali is being explored as a calmer, more personal way to use AI: grounded in the context people already have, with privacy and control at the center.
            </p>
            <p>
              The project is actively taking shape as a product idea for people who want useful intelligence around their digital lives without giving up ownership of them.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-6 border-t border-white/5 text-xs font-mono uppercase tracking-[0.16em] text-[#71717A]">
          <span>Private by design</span>
          <span>Local-first</span>
          <span>Actively developing</span>
        </div>
      </div>
    </main>
  );
}

function WorkspaceMockup() {
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
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00D9FF]/15 text-[#00D9FF]"><Sparkles size={14} /></div>
            <span className="font-display font-semibold text-sm text-white">locali</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFB2]" />
            <span className="font-mono text-[10px] text-[#71717A]">PRIVATE SPACE</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-[0.7fr_1.3fr] min-h-[330px]">
          <aside className="hidden sm:block border-r border-white/8 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525B] mb-5">Your workspace</p>
            <div className="space-y-3 text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2 rounded-lg bg-white/6 px-3 py-2.5 text-white"><Folder size={13} className="text-[#00D9FF]" /> Overview</div>
              <div className="flex items-center gap-2 px-3 py-2"><Folder size={13} /> Projects</div>
              <div className="flex items-center gap-2 px-3 py-2"><Folder size={13} /> Knowledge</div>
            </div>
          </aside>
          <div className="p-5 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div><p className="text-xs text-[#71717A]">Good morning, Mohamed</p><h3 className="font-display font-bold text-xl text-white mt-1">Your space, understood.</h3></div>
              <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#71717A]"><Search size={15} /></div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mt-7">
              {workspaceItems.map((item) => <div key={item.label} className="rounded-xl border border-white/8 bg-white/[0.025] p-3"><div className="h-1 w-7 rounded-full mb-4" style={{ background: item.color }} /><p className="text-[11px] text-[#71717A]">{item.label}</p><p className="text-xs text-white mt-1">{item.value}</p></div>)}
            </div>
            <div className="rounded-xl border border-[#00D9FF]/20 bg-[#00D9FF]/[0.05] p-4 mt-4">
              <div className="flex items-center gap-2 text-xs text-[#00D9FF]"><Sparkles size={13} /> Locali noticed</div>
              <p className="text-sm text-[#D4D4D8] leading-relaxed mt-3">You have three project notes from this week that connect to your current workspace.</p>
              <div className="flex items-center gap-2 mt-4 text-[11px] text-[#71717A]"><LockKeyhole size={12} /> Kept within your space</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/8 px-5 py-3"><span className="font-mono text-[10px] text-[#52525B]">LOCAL CONTEXT / READY</span><ArrowUpRight size={14} className="text-[#52525B]" /></div>
      </div>
    </motion.div>
  );
}