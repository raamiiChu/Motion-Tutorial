"use client";

import { ArrowBigDown } from "lucide-react";
import { motion } from "motion/react";

const ExampleOnce = () => {
  return (
    <section className="h-[150dvh]">
      <motion.div
        className="flex items-center justify-between gap-2"
        animate={{
          y: [20, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowBigDown />
        <p>Scroll Down</p>
        <ArrowBigDown />
      </motion.div>

      <div className="h-[75dvh]" />

      <motion.div
        className="mx-auto size-32 rounded-lg bg-violet-400"
        initial={{
          y: 48,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      />
    </section>
  );
};

export default ExampleOnce;
