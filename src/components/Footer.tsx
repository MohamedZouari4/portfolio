import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personal } from "../data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 py-12 px-4">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05 }}
            className="font-display font-black text-2xl"
          >
            <span className="text-white">MZ</span>
            <span className="text-[#00D9FF]">.</span>
          </motion.button>

          {/* Center */}
          <div className="text-center">
            <p className="text-[#A1A1AA] text-sm flex items-center gap-1.5 justify-center">
              Built with{" "}
              <Heart size={12} className="text-red-400 fill-red-400" />
              {" "}by Mohamed Zouari
            </p>
            <p className="text-[#A1A1AA]/50 text-xs mt-1">
              React · TypeScript · Vite · Tailwind · Framer Motion
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitHubIcon, href: personal.github },
              { icon: LinkedInIcon, href: personal.linkedin },
              { icon: Mail, href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-[#A1A1AA] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 transition-all duration-200"
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-9 h-9 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF]/20 transition-all duration-200 ml-2"
              title="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[#A1A1AA]/40 text-xs">
            © {new Date().getFullYear()} Mohamed Zouari. All rights reserved. · Sfax, Tunisia
          </p>
        </div>
      </div>
    </footer>
  );
}
