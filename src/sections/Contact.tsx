import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone, Copy, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import SectionWrapper, { SectionTitle } from "../components/SectionWrapper";
import { personal } from "../data";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      const e = err as { status?: number; text?: string; message?: string };
      console.error("EmailJS error — status:", e?.status, "text:", e?.text, "message:", e?.message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "#00FFB2",
    },
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "#00D9FF",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "mohamedzouari202",
      href: personal.linkedin,
      color: "#7C3AED",
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: "MohamedZouari4",
      href: personal.github,
      color: "#00FFB2",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sfax, Tunisia",
      href: null,
      color: "#00D9FF",
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-[#0A0A0A]/80">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00D9FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionTitle badge="Contact" subtitle="Let's collaborate and build something amazing together">
          Get In Touch
        </SectionTitle>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-primary rounded-2xl p-7 border border-[#00D9FF]/15 mb-6">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Open to Opportunities
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                I'm actively looking for internships, graduate programs, and full-time roles in 
                AI Engineering and Full-Stack Development at global tech companies.
              </p>
            </div>

            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  {href ? (
                    <div className="flex items-center gap-2">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/5 hover:border-[#00D9FF]/25 transition-all duration-200"
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: color + "15" }}
                        >
                          <Icon size={15} style={{ color }} />
                        </div>
                        <div>
                          <p className="text-[#A1A1AA] text-xs">{label}</p>
                          <p className="text-white text-sm font-medium">{value}</p>
                        </div>
                      </a>
                      {label === "Email" && (
                        <button
                          onClick={copyEmail}
                          title="Copy email"
                          className="w-11 h-11 rounded-xl glass border border-white/5 hover:border-[#00D9FF]/30 flex items-center justify-center text-[#A1A1AA] hover:text-[#00D9FF] transition-all duration-200 flex-shrink-0"
                        >
                          {copied ? <Check size={15} className="text-[#00FFB2]" /> : <Copy size={15} />}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: color + "15" }}
                      >
                        <Icon size={15} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-[#A1A1AA] text-xs">{label}</p>
                        <p className="text-white text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-7 border border-white/5">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle size={48} className="text-[#00FFB2] mb-4" />
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#A1A1AA]">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <AlertCircle size={48} className="text-red-400 mb-4" />
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Failed to send
                  </h3>
                  <p className="text-[#A1A1AA] text-sm">
                    Please email me directly at{" "}
                    <a href={`mailto:${personal.email}`} className="text-[#00D9FF] underline">
                      {personal.email}
                    </a>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[#A1A1AA] text-xs font-medium mb-1.5">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border transition-colors focus:outline-none focus:ring-1 placeholder:text-[#A1A1AA]/50 ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-[#00D9FF]/40 focus:ring-[#00D9FF]/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#A1A1AA] text-xs font-medium mb-1.5">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border transition-colors focus:outline-none focus:ring-1 placeholder:text-[#A1A1AA]/50 ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-[#00D9FF]/40 focus:ring-[#00D9FF]/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[#A1A1AA] text-xs font-medium mb-1.5">
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      placeholder="What's this about?"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border transition-colors focus:outline-none focus:ring-1 placeholder:text-[#A1A1AA]/50 ${
                        errors.subject
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-[#00D9FF]/40 focus:ring-[#00D9FF]/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#A1A1AA] text-xs font-medium mb-1.5">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border transition-colors focus:outline-none focus:ring-1 placeholder:text-[#A1A1AA]/50 resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-[#00D9FF]/40 focus:ring-[#00D9FF]/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-black bg-[#00D9FF] hover:bg-[#00D9FF]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-[#00D9FF]/25 hover:-translate-y-0.5"
                  >
                    {status === "sending" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
