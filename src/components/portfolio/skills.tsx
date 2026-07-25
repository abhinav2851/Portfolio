import { motion } from "framer-motion";
import { Section } from "./section";
import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={
        <>
          The stack behind the <span className="italic text-muted-foreground">shipping</span>.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: gi * 0.06 }}
            className="glass hairline rounded-3xl p-8"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl">{group.category}</h3>
              <span className="text-xs text-muted-foreground">{group.items.length} tools</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="hairline rounded-full bg-background/60 px-3.5 py-1.5 text-sm transition-transform hover:-translate-y-0.5"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education chip */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {portfolio.education.map((e) => (
          <div key={e.degree} className="hairline rounded-3xl bg-[var(--surface)] p-6 md:col-span-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Education</div>
                <h4 className="font-display mt-1 text-2xl">{e.degree}</h4>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
              <span className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground">
                {e.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
