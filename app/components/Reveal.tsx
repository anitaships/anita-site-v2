"use client";

import { motion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  scale = 1,
  once = true,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
