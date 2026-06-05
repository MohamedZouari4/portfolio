import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className={cn("relative py-24 px-4 overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({
  children,
  subtitle,
  badge,
}: {
  children: ReactNode;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-4 glass-primary text-[#00D9FF]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
          {badge}
        </motion.div>
      )}
      <h2 className="section-title text-4xl md:text-5xl font-extrabold text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00D9FF]" />
        <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00D9FF]" />
      </div>
    </motion.div>
  );
}
