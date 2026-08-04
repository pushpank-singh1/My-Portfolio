import { motion } from "framer-motion";
import {
  Binary,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers,
  LineChart,
  Rocket,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Building Intelligence, <span className="text-gradient">Not Just Code</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="glass glass-hover rounded-3xl p-8">
            <BrainCircuit className="size-8 text-primary" />
            <h3 className="mt-5 text-xl font-semibold">Personal Bio</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I am an AI/ML Engineer currently in my last year of engineering in Information
              Technology. I have a deep interest in Data Science and Machine Learning model
              development. I am passionate about exploring Artificial Intelligence and
              continuously learning new technologies to build impactful AI solutions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: LineChart, label: "Data Science" },
                { icon: Layers, label: "Deep Learning" },
                { icon: Binary, label: "Reinforcement Learning" },
                { icon: Rocket, label: "Model Deployment" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/30 px-4 py-3 text-sm transition-colors hover:border-accent/40"
                >
                  <item.icon className="size-4 text-accent" />
                  {item.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass glass-hover rounded-3xl p-8">
            <GraduationCap className="size-8 text-accent" />
            <h3 className="mt-5 text-xl font-semibold">Education</h3>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {[
                {
                  title: "JSS Academy Of Technical Education, Noida",
                  meta: "B.Tech in Information Technology, 2023 - 2027",
                  note: "Grade : 7.76",
                },
                {
                  title: "T.R.M. Public School, Ghaziabad",
                  meta: "12th",
                  note: "Grade : 88.6 %",
                },
              ].map((e, i) => (
                <li key={e.title} className="relative">
                  <span
                    className={`bg-gradient-brand absolute -left-[31px] top-1.5 size-3 rounded-full ${
                      i === 1 ? "glow-ring motion-safe:animate-pulse" : ""
                    }`}
                  />
                  <p className="font-display text-base font-semibold">{e.title}</p>
                  <p className="text-sm text-primary">{e.meta}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-xs text-muted-foreground">
              Expected graduation: 2027 · Open to AI/ML roles and internships.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    icon: Code2,
    group: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: BrainCircuit,
    group: "Machine Learning",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 84 },
      { name: "Data Science", level: 82 },
    ],
  },
  {
    icon: Layers,
    group: "Frameworks",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
    ],
  },
  {
    icon: Database,
    group: "Web & Tools",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Git", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="text-gradient">Toolkit</span> Behind The Models
            </>
          }
          subtitle="Languages, frameworks and tools I use to design, train and ship machine learning systems."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.08} className="glass glass-hover rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                  <g.icon className="size-5 text-primary" />
                </span>
                <h3 className="text-lg font-semibold">{g.group}</h3>
              </div>
              <ul className="mt-6 space-y-5">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="bg-gradient-brand h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

