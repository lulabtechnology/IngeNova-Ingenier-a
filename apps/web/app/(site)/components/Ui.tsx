"use client";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export const FadeIn = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={clsx(className)}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ title, eyebrow, subtitle }: { title: string; eyebrow?: string; subtitle?: string }) => (
  <div className="mb-10">
    {eyebrow && <div className="text-sm uppercase tracking-widest text-primary mb-2">{eyebrow}</div>}
    <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
    {subtitle && <p className="text-muted mt-2 max-w-2xl">{subtitle}</p>}
  </div>
);
