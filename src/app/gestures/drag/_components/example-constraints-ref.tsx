"use client";

import { useRef } from "react";

import { motion } from "motion/react";

const ExampleConstraintsRef = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={constraintsRef}
      className="bg-foreground relative size-64 rounded-lg"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="size-24 cursor-grab rounded-lg bg-red-400 active:cursor-grabbing"
      />
    </section>
  );
};

export default ExampleConstraintsRef;
