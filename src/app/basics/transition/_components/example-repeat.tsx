"use client";

import { motion } from "motion/react";

import { P } from "@/components/ui/typography";

const ExampleRepeat = () => {
  return (
    <>
      <section className="flex items-center justify-between gap-6">
        <P>Repeat 2</P>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: 2,
            repeatDelay: 1.5,
          }}
          className="size-20 bg-red-400"
        />
      </section>

      <section className="flex items-center justify-between gap-6">
        <P>Repeat Infinity</P>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          className="size-20 bg-red-400"
        />
      </section>

      <section className="flex items-center justify-between gap-6">
        <P>Reverse</P>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="size-20 bg-red-400"
        />
      </section>
    </>
  );
};

export default ExampleRepeat;
