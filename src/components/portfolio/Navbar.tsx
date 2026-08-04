import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="bg-gradient-brand fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
      aria-hidden="true"
    />
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass glow-ring" : "border border-transparent"
        }`}
        aria-label="Main"
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Pushpank<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="bg-gradient-brand hidden rounded-full px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04] md:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-border p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
          <ul className="grid gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass glass-hover fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5 text-primary" />
    </button>
  );
}
