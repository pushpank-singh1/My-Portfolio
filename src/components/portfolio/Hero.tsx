import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles, ArrowRight } from "lucide-react";
import profileAsset from "@/assets/profile.jpg";
import { ParticleField } from "./Backdrop";


const ROLES = [
  "AI/ML Engineer",
  "Machine Learning Enthusiast",
  "Data Science Explorer",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index % ROLES.length]!;
    const done = !deleting && text === full;
    const empty = deleting && text === "";
    const delay = done ? 1500 : empty ? 250 : deleting ? 35 : 70;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient font-display">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary align-middle motion-safe:animate-pulse" />
    </span>
  );
}

const STATS = [
  { value: "2+", label: "AI Projects" },
  { value: "10+", label: "Technologies" },
  { value: "7th", label: "Semester B.Tech" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-36 sm:pt-44">
      <ParticleField />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" />
            Final year B.Tech · Information Technology
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
            Hello, I&apos;m
            <br />
            <span className="text-gradient">Pushpank Singh</span>
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              📍Noida, India
            </span>
          </div>

          <p className="mt-4 min-h-[2em] text-lg text-muted-foreground sm:text-xl">
            <Typewriter />
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I am an AI/ML Engineer currently in my final year of Information Technology
            engineering with a strong passion for Artificial Intelligence, Machine Learning, and
            Data Science. I enjoy building intelligent systems, developing machine learning
            models, and exploring the limitless capabilities of AI to solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-gradient-brand glow-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Mail className="size-4 text-primary" />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3">
                <dt className="font-display text-2xl font-semibold text-gradient">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="bg-gradient-brand absolute inset-6 rounded-full opacity-30 blur-3xl" />
          <div className="relative aspect-square rounded-full border border-primary/25 p-2">
            <div className="motion-safe:animate-[spin_18s_linear_infinite] absolute inset-0 rounded-full border border-dashed border-accent/30" />
            <img
              src={profileAsset}
              alt="Portrait of Pushpank Singh"
              width={816}
              height={816}
              className="size-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
