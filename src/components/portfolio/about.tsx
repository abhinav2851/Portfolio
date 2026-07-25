import { motion } from "framer-motion";
import { Section } from "./section";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A senior developer's <span className="italic text-muted-foreground">obsession</span> with
          craft, speed, and detail.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 text-lg leading-relaxed text-muted-foreground"
        >
          {portfolio.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-2 space-y-4"
        >
          {[
            ["Currently", "Software Developer @ Hanging Panda"],
            ["Focus", "React · React Native · TypeScript"],
            ["Based in", portfolio.location],
            ["Email", portfolio.email],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-[var(--hairline)] pb-3 text-sm">
              <span className="text-muted-foreground">{k}</span>
              <span className="text-right font-medium">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
