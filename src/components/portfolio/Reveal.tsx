import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}
