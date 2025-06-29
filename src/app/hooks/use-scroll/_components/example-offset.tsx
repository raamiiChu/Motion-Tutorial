"use client";

import { useRef } from "react";

import { motion, useScroll } from "motion/react";

const ExampleOffset = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 25%"],
  });

  return (
    <section className="grid grid-cols-2 gap-4">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="8"
          pathLength="1"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#ff0088"
          strokeWidth="8"
          style={{
            rotate: -90,
            pathLength: scrollYProgress,
          }}
        />
      </svg>

      <div
        ref={targetRef}
        className="flex size-24 items-center justify-center bg-red-400"
      >
        target
      </div>
    </section>
  );
};

export default ExampleOffset;
