"use client";

import { ArrowBigDown } from "lucide-react";
import { motion } from "motion/react";

const ExampleMargin = () => {
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
        className="mx-auto size-24 rounded-lg bg-blue-400"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          margin: "-40% 0px -40% 0px",
        }}
      />
    </section>
  );
};

export default ExampleMargin;
