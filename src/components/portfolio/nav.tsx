import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const { theme, mounted, toggle } = useTheme();
  const active = useActiveSection(NAV.map((n) => n.id));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand)]"
      />
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-[0_8px_40px_-12px_oklch(0_0_0/0.25)]">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mr-2 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-background text-[10px] font-black">
              AK
            </span>
            <span className="hidden sm:inline">{portfolio.firstName}.</span>
          </a>
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href="/"
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === item.id && "text-foreground",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,var(--foreground)_10%,transparent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="ml-1 grid h-9 w-9 place-items-center rounded-full hairline hover:bg-[color-mix(in_oklab,var(--foreground)_8%,transparent)] transition-colors"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={portfolio.resumeUrl}
            download
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>
    </>
  );
}
