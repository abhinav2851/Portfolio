import { motion } from "framer-motion";
import { Section } from "./section";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title={
        <>
          Where I've shipped <span className="italic text-muted-foreground">real</span> products.
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand)] via-[var(--hairline)] to-transparent sm:left-6" />
        <div className="space-y-10">
          {portfolio.experience.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-2 top-3 h-4 w-4 rounded-full bg-background hairline ring-4 ring-background sm:left-4">
                <div className="absolute inset-1 rounded-full bg-[var(--brand)]" />
              </div>
              <div className="glass hairline rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl">{exp.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
