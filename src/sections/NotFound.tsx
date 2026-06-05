import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        {/* Glitchy 404 */}
        <motion.p
          animate={{ x: [0, -2, 2, -1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="font-display font-black text-[140px] leading-none bg-gradient-to-b from-[#00D9FF] to-[#7C3AED] bg-clip-text text-transparent select-none"
        >
          404
        </motion.p>

        <h1 className="font-display font-bold text-2xl text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-[#A1A1AA] leading-relaxed mb-10">
          Looks like this route doesn't exist. The section you're looking for might
          have been moved, renamed, or never existed.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0A0A] bg-[#00D9FF] hover:bg-white transition-all duration-200 hover:shadow-xl hover:shadow-[#00D9FF]/25 hover:-translate-y-0.5 text-sm"
          >
            <Home size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/15 hover:border-[#00D9FF]/50 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Quick nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest mb-4">
            Quick links
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["about", "projects", "skills", "experience", "contact"].map((s) => (
              <Link
                key={s}
                to={`/#${s}`}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#A1A1AA] border border-white/10 hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-colors duration-200 capitalize"
              >
                {s}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
