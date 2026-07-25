import { motion } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-[var(--brand)]" />
            {eyebrow}
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] text-balance sm:text-6xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-base text-muted-foreground text-balance sm:text-lg">{intro}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
