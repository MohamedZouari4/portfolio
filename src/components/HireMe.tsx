import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

export default function HireMe() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Hire Me – scroll to contact"
          className="fixed bottom-24 right-6 z-[90] flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-[#0A0A0A] bg-[#00FFB2] hover:bg-white transition-all duration-200 shadow-lg shadow-[#00FFB2]/30 hover:shadow-[#00FFB2]/50 hover:-translate-y-0.5 text-sm"
        >
          <Mail size={15} />
          Hire Me
        </motion.button>
      )}
    </AnimatePresence>
  );
}
