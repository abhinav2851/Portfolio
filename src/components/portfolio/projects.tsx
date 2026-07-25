import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { Section } from "./section";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Enterprise", "Consumer", "Web"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const projects = portfolio.projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={
        <>
          Projects that <span className="italic text-muted-foreground">shipped</span> — and scaled.
        </>
      }
      intro="A small selection of production apps I've architected end-to-end, from the first React Native screen to the CI/CD pipeline that ships them."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm transition-colors",
              filter === f
                ? "text-background"
                : "text-muted-foreground hairline hover:text-foreground",
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl hairline bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0_0_0/0.4)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_35%,transparent),transparent)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="flex items-center justify-between">
              <span className="rounded-full hairline px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.tag}
              </span>
              <div className="flex gap-2">
                {([
                  { key: "repo", href: p.links?.repo, label: "Repository", Icon: Github },
                  { key: "android", href: p.links?.android, label: "Google Play", Icon: FaGooglePlay },
                  { key: "ios", href: p.links?.ios, label: "App Store", Icon: FaAppStoreIos },
                  { key: "web", href: p.links?.web ?? p.links?.live, label: "Live site", Icon: ArrowUpRight },
                ] as const).map(({ key, href, label, Icon }) =>
                  href ? (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full hairline transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_8%,transparent)]"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : null,
                )}
              </div>
            </div>
            <h3 className="font-display mt-6 text-3xl sm:text-4xl">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <ul className="mt-5 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--hairline)] pt-5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
