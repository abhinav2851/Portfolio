import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Counter } from "./counter";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Aurora backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_35%,transparent),transparent)] blur-3xl animate-aurora" />
        <div className="absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-2)_30%,transparent),transparent)] blur-3xl animate-aurora [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_85%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Available for select engagements — 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display mt-8 text-center text-[clamp(3rem,10vw,7.5rem)] font-normal leading-[0.95] text-balance"
        >
          <span className="gradient-text">Building interfaces</span>
          <br />
          <span className="italic text-muted-foreground">people actually</span>{" "}
          <span className="gradient-text">love.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg text-balance"
        >
          {portfolio.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="hairline glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]"
          >
            <Mail className="h-4 w-4" /> Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {portfolio.location}
          </span>
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> React · React Native · TypeScript
          </span>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl hairline bg-[var(--hairline)] sm:grid-cols-4">
          {portfolio.stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8">
              <div className="font-display text-5xl leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
