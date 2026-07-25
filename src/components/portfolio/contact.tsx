import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Github, Linkedin, Mail, Send, Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const copy = async () => {
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] hairline bg-[var(--surface)] px-8 py-20 text-center sm:px-16 sm:py-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          >
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_28%,transparent),transparent)] blur-3xl animate-aurora" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-2)_25%,transparent),transparent)] blur-3xl animate-aurora [animation-delay:-8s]" />
          </div>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-[var(--brand)]" /> Let's build
          </div>
          <h2 className="font-display mt-6 text-[clamp(2.5rem,8vw,6rem)] leading-[0.95]">
            <span className="gradient-text">Have an idea worth</span>
            <br />
            <span className="italic text-muted-foreground">shipping?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            I'm currently taking on new work. Whether it's a greenfield mobile product or an
            existing React codebase that needs a senior hand — let's talk.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${portfolio.email}?subject=Let's%20work%20together`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> {portfolio.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={copy}
              className="glass hairline inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]"
            >
              <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-3">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full hairline transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_8%,transparent)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full hairline transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_8%,transparent)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative mx-auto mt-16 grid max-w-2xl gap-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="group relative block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="glass hairline w-full rounded-2xl bg-transparent px-4 py-3.5 text-sm outline-none transition-colors focus:border-[color-mix(in_oklab,var(--brand)_55%,var(--hairline))]"
                />
              </label>
              <label className="group relative block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                  className="glass hairline w-full rounded-2xl bg-transparent px-4 py-3.5 text-sm outline-none transition-colors focus:border-[color-mix(in_oklab,var(--brand)_55%,var(--hairline))]"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project…"
                className="glass hairline w-full resize-none rounded-2xl bg-transparent px-4 py-3.5 text-sm outline-none transition-colors focus:border-[color-mix(in_oklab,var(--brand)_55%,var(--hairline))]"
              />
            </label>
            <div className="flex items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted-foreground">
                Or reach me directly — I reply within 24 hours.
              </p>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending</>
                ) : status === "sent" ? (
                  <><Check className="h-4 w-4" /> Sent!</>
                ) : (
                  <><Send className="h-4 w-4" /> Send message</>
                )}
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-400 text-right">{error}</p>
            )}
          </form>
        </motion.div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--hairline)] pt-8 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {portfolio.name}. Crafted with care.</span>
          <span className="font-mono">v1.0 — Noida → Everywhere</span>
        </footer>
      </div>
    </section>
  );
}
