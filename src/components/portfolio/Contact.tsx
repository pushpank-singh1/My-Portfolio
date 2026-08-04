import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const EMAIL = "pushpank1108@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/pushpanksingh/";
const GITHUB = "https://github.com/pushpank-singh1";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail, copy: EMAIL },
  { label: "LinkedIn", value: "/in/pushpanksingh", href: LINKEDIN, icon: Linkedin, copy: LINKEDIN },
  { label: "GitHub", value: "@pushpank-singh1", href: GITHUB, icon: Github, copy: GITHUB },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Build Something <span className="text-gradient">Intelligent</span>
            </>
          }
          subtitle="Open to AI/ML roles, internships and research collaborations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="glass rounded-3xl p-8">
            <h3 className="text-lg font-semibold">Reach me directly</h3>
            <ul className="mt-6 space-y-3">
              {CHANNELS.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-colors hover:border-primary/40"
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-0 flex-1 items-center gap-3"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                      <c.icon className="size-4 text-primary" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block truncate text-sm">{c.value}</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copy(c.label, c.copy)}
                    aria-label={`Copy ${c.label}`}
                    className="rounded-xl border border-border p-2 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {copied === c.label ? (
                      <Check className="size-4 text-accent" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${EMAIL}`}
              className="bg-gradient-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Mail className="size-4" />
              Email Me
            </a>
          </Reveal>

          <Reveal delay={0.1} className="glass rounded-3xl p-8">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role or project…"
                  className="resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>
              <button
                type="submit"
                className="bg-gradient-brand glow-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © 2026 Pushpank Singh. Built with passion for Artificial Intelligence.
        </p>
        <div className="flex gap-3">
          {[
            { href: GITHUB, icon: Github, label: "GitHub" },
            { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="glass glass-hover grid size-10 place-items-center rounded-xl"
            >
              <s.icon className="size-4 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
