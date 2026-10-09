import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ScanFace, Github, Gamepad2, Grid3x3, Icon } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const PROJECTS = [
  {
    id: "ai-attendance",
    title: "Intelligent AI Attendance System",
    category: "Artificial Intelligence",
    icon: ScanFace,
    tech: [
      "Python",
      "Face Recognition",
      "SVC",
      "Streamlit",
      "Supabase",
    ],
    description:
      "Developed an AI-powered attendance management system that uses facial recognition to identify students and streamline classroom attendance tracking.",
    extra:
      "Integrated a machine learning-based face recognition pipeline with a Streamlit interface and Supabase database to support teacher authentication, subject management, and attendance record retrieval.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/pushpank-singh1/Intelligent-AI-Attendance-System",
        icon: Github,
      },
      {
    label: "Live Demo",
    href: "....",
    icon: ArrowUpRight,
    },
    ],
  },

  {
    id: "studentpulse",
    title: "StudentPulse AI — Mental Health Score Predictor",
    category: "Machine Learning",
    icon: BrainCircuit,
    tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
    description:
    "Developed an AI-powered student wellness application that predicts mental health scores using lifestyle, academic, and behavioral factors.",
    extra:
    "Built an end-to-end machine learning solution integrating data preprocessing, model training, and a FastAPI backend to deliver real-time predictions through a web interface.",
    links: [
    {
    label: "GitHub",
    href: "https://github.com/pushpank-singh1/Mental-Health-Score",
    icon: Github,
    },
    {
    label: "Live Demo",
    href: "https://studentwellnesspredictor-m99z.onrender.com",
    icon: ArrowUpRight,
    },
    ],
  },
  {
    id: "airbnb",
    title: "NYC Airbnb Type Classifier",
    category: "Machine Learning",
    icon: Grid3x3,
    tech: ["KNN Classifier", "FastAPI", "Kaggle"],
    description:
    "Developed a machine learning model to predict Airbnb room types based on listing features such as location, price, availability, and host details.",
    extra:
    "Built an end-to-end prediction system with data preprocessing and classification to help identify the most likely room type for a given listing.",
    links: [
      { label: "GitHub", href: "https://github.com/pushpank-singh1/NYC-Airbnb-Room-Type-Classifier", icon: Github },
      { label: "Live Demo", href: "https://nyc-airbnb-room-type-classifier.onrender.com/", icon: ArrowUpRight },
    ],
  },
  {
    id: "creditwise",
    title: "CreditWise - Loan Approval Prediction App",
    category: "Machine Learning",
    icon: Grid3x3,
    tech: ["Logistic Regression Model", "Streamlit"],
    description:
    "Developed a Loan Approval Prediction Application using Logistic Regression Model and Streamlit. ",
    extra:
    "It has 88% Accuracy and 86% Precision in making correct predictions.",
    links: [
      { label: "GitHub", href: "https://github.com/pushpank-singh1/CreditWise", icon: Github },
      { label: "Live Demo", href: "https://pushpank-singh1-creditwise-app-rskrve.streamlit.app/", icon: ArrowUpRight },
    ],
  },
    {
    id: "summarizer",
    title: "Text Summarizer App",
    category: "Deep Learning",
    icon: Grid3x3,
    tech: ["HuggingFace", "Transformers", "PyTorch"],
    description:
    "Developed a Text Summarizer web application using the Hugging Face T5 Transformer model to generate concise and context-aware summaries.",
    extra:
    "Implemented an end-to-end NLP pipeline with Python, Transformers, and FastAPI, enabling efficient text preprocessing and real-time summary generation with a responsive user experience.",
    links: [
      { label: "GitHub", href: "https://github.com/pushpank-singh1/Text-Summarizer-App", icon: Github },
      { label: "Live Demo", href: "https://github.com/pushpank-singh1/Text-Summarizer-App", icon: ArrowUpRight },
    ],
  },
  {
    id: "flappy",
    title: "Flappy Bird AI",
    category: "Deep Learning",
    icon: Gamepad2,
    tech: ["PyTorch", "Gymnasium", "Deep Q-Networks (DQN)", "Deep RL"],
    description:
    "Developed an AI agent capable of playing Flappy Bird using Deep Q-Networks and Deep Reinforcement Learning. The model learns optimal flap timings through trial-and-error interactions with the game environment.",
    extra:
    "Trained and evaluated the model by maximizing cumulative rewards, enabling improved obstacle avoidance, increased survival time, and better gameplay performance over successive training episodes.",
    links: [
      { label: "GitHub", href: "https://github.com/pushpank-singh1/Flappy-Bird-Game", icon: Github },
    ],
  },
  {
    id: "cliff",
    title: "Cliff Walking",
    category: "Deep Learning",
    icon: Grid3x3,
    tech: ["NumPy", "Gymnasium", "Reinforcement Learning"],
    description:
      "Developed a reinforcement learning agent using the Gymnasium Toy Text environment where the agent learns an optimal navigation policy by interacting with the environment, avoiding cliff states, and maximizing cumulative rewards.",
    extra:
      "Implemented the Q-learning algorithm to compare path selection and visualize the agent's improvement over training episodes until it consistently discovers the shortest path to the goal.",
    links: [
      { label: "GitHub", href: "https://github.com/pushpank-singh1/Cliff-Walking", icon: Github },
    ],
  },
];

const FILTERS = ["All", "Artificial Intelligence", "Machine Learning", "Deep Learning"];

/** Small animated visual standing in for each project's environment. */
function ProjectVisual({ id }: { id: string }) {

  
  
  
if (id === "ai-attendance") {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* AI Face Scanner */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass flex items-center gap-3 rounded-xl p-3"
      >
        <div className="relative flex h-16 w-14 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5">
          <svg
            viewBox="0 0 60 70"
            className="h-12 w-10 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 28 C12 5 48 5 48 28 V39 C48 55 40 63 30 63 C20 63 12 55 12 39 Z" />
            <path d="M20 31 H25 M35 31 H40 M25 45 Q30 50 35 45" />
            <path d="M12 20 H5 V9 H17 M43 9 H55 V20 H48" />
            <path d="M5 48 V59 H17 M43 59 H55 V48" />
          </svg>

          <motion.div
            animate={{ y: [0, 44, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1 right-1 top-2 h-px bg-primary shadow-[0_0_6px_hsl(var(--primary))]"
          />
        </div>

        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            <span className="text-[9px] tracking-wider text-muted-foreground">
              AI SCANNER
            </span>
          </div>
          <p className="text-xs font-semibold">Face Recognition</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Smart identification
          </p>
        </div>
      </motion.div>

      {/* Attendance Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="glass rounded-xl p-3"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] tracking-wider text-muted-foreground">
            ATTENDANCE SYSTEM
          </span>
          <span className="text-xs text-primary">▦</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm">
            🎓
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold">Teacher Panel</p>
            <p className="text-[10px] text-muted-foreground">
              Attendance records
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <span className="text-[9px] text-muted-foreground">AI</span>
        </div>
      </motion.div>
    </div>
  );
}

  

if (id === "studentpulse") {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Wellness Prediction Gauge */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass flex items-center gap-3 rounded-xl p-3"
      >
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5">
          <svg
            viewBox="0 0 64 64"
            className="h-14 w-14 -rotate-90"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              className="text-muted/40"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={String(2 * Math.PI * 24)}
              initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
              whileInView={{
                strokeDashoffset: 2 * Math.PI * 24 * 0.28,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-primary"
            />
          </svg>

          <div className="absolute text-center">
            <p className="text-sm font-bold">72</p>
            <p className="text-[8px] text-muted-foreground">/100</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            <span className="text-[9px] tracking-wider text-muted-foreground">
              ML PREDICTION
            </span>
          </div>

          <p className="text-xs font-semibold">Wellness Score</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Mental health analysis
          </p>
        </div>
      </motion.div>

      {/* Student Wellness Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="glass rounded-xl p-3"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] tracking-wider text-muted-foreground">
            STUDENT WELLNESS
          </span>
          <span className="text-sm text-primary">✦</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-sm">
            🌱
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold">AI Insights</p>
            <p className="text-[10px] text-muted-foreground">
              Wellbeing indicators
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            { label: "Sleep", width: "75%", color: "bg-sky-400" },
            { label: "Stress", width: "45%", color: "bg-amber-400" },
            { label: "Focus", width: "82%", color: "bg-primary" },
          ].map((item, index) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-9 shrink-0 text-[9px] text-muted-foreground">
                {item.label}
              </span>

              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: item.width }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + index * 0.12,
                  }}
                  className={`h-full rounded-full ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


  if (id === "airbnb") {
    return (
      <div className="flex w-full items-center justify-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-4"
        >
          <div className="text-3xl">🏠</div>
          <div className="mt-2 text-xs text-muted-foreground">
            Entire Home
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-4"
        >
          <div className="text-3xl">🛏️</div>
          <div className="mt-2 text-xs text-muted-foreground">
            Private Room
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-4"
        >
          <div className="text-3xl">🏨</div>
          <div className="mt-2 text-xs text-muted-foreground">
            Shared Room
          </div>
        </motion.div>
      </div>
    );
  }

   if (id === "creditwise") {
    return (
      <div className="flex w-full items-center justify-center gap-6">
        {/* Credit Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative grid size-28 place-items-center rounded-full border-8 border-primary/30"
        >
          <div className="absolute inset-0 rounded-full border-4 border-accent/70" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient">742</div>
            <div className="text-[10px] text-muted-foreground">
              Credit Score
            </div>
          </div>
        </motion.div>

        {/* Prediction */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl px-5 py-4"
        >
          <div className="text-xs text-muted-foreground">
            Loan Prediction
          </div>

          <div className="mt-1 text-lg font-semibold text-accent">
            ✓ Approved
          </div>

          <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
            <motion.div
               initial={{ width: 0 }}
              whileInView={{ width: "88%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-brand h-full rounded-full"
            />
          </div>

          <div className="mt-1 text-[10px] text-muted-foreground">
            88% Accuracy
          </div>
        </motion.div>
      </div>
    );
  }

  if (id === "summarizer") {
    return (
      <div className="flex h-full w-full items-center justify-between gap-6 px-3">
        {/* Input Card */}
        <div className="glass flex h-28 w-32 flex-col rounded-xl border border-primary/20 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center">
              📄
            </div>
            <span className="text-[10px] font-semibold">Input</span>
          </div>

          <div className="space-y-1">
            <div className="h-1.5 rounded-full bg-primary/40" />
            <div className="h-1.5 rounded-full bg-primary/30" />
            <div className="h-1.5 w-5/6 rounded-full bg-primary/25" />
            <div className="h-1.5 w-3/4 rounded-full bg-primary/20" />
          </div>
        </div>

        {/* AI */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gradient-brand p-4 shadow-lg">
            🤖
          </div>

          <span className="mt-2 text-[10px] text-primary font-medium">
            T5 AI
          </span>
        </div>

        {/* Output Card */}
        <div className="glass flex h-28 w-32 flex-col rounded-xl border border-accent/20 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-accent/20 flex items-center justify-center">
              ✨
            </div>
            <span className="text-[10px] font-semibold">Summary</span>
          </div>

          <div className="space-y-1">
            <div className="h-1.5 w-4/5 rounded-full bg-accent/40" />
            <div className="h-1.5 w-3/5 rounded-full bg-accent/30" />
            <div className="h-1.5 w-2/5 rounded-full bg-accent/25" />
          </div>
        </div>
      </div>
    );
  }

  if (id === "cliff") {
    return (
      <div className="mx-auto grid w-fit grid-cols-8 gap-1.5">
        {Array.from({ length: 32 }).map((_, i) => {
          const isCliff = i >= 24 && i > 24 && i < 31;
          const isGoal = i === 31;
          const isStart = i === 24;

          return (
            <div
              key={i}
              className={`h-5 w-5 rounded-md ${
                isGoal
                  ? "bg-green-400"
                  : isStart
                  ? "bg-blue-400"
                  : isCliff
                  ? "bg-red-500"
                  : "bg-secondary"
              }`}
            />
          );
        })}
      </div>
    );
  }

  /* Flappy Bird */
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-400/20 to-transparent">
      <div className="absolute bottom-0 left-0 h-10 w-full bg-green-500/30" />

      <div className="absolute left-8 top-8 h-8 w-8 rounded-full bg-yellow-300 shadow-lg" />

      <div className="absolute left-1/2 top-4 h-28 w-5 rounded-full bg-green-400" />
      <div className="absolute left-1/2 bottom-0 h-18 w-5 rounded-full bg-green-400" />

      <div className="absolute right-1/4 top-10 h-22 w-5 rounded-full bg-green-400" />
      <div className="absolute right-1/4 bottom-0 h-24 w-5 rounded-full bg-green-400" />

      <div className="absolute left-20 top-16 text-3xl">
        🐦
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">AI Projects</span>
            </>
          }
          subtitle="Agents that learn by doing — trained, evaluated and tuned end to end."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                filter === f
                  ? "bg-gradient-brand glow-ring text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover group flex flex-col overflow-hidden rounded-3xl"
              >
                <div className="relative h-44 overflow-hidden border-b border-border bg-secondary/30 p-6">
                  <div className="bg-gradient-brand absolute inset-x-10 -top-16 h-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" />
                  <div className="relative flex h-full items-center justify-center">
                    <ProjectVisual id={p.id} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/25">
                      <p.icon className="size-4 text-accent" />
                    </span>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.extra}</p>

                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    {p.links.map((l, i) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.04] ${
                          i === 0
                            ? "bg-gradient-brand text-primary-foreground"
                            : "border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <l.icon className="size-4" />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
