"use client";

import { useRef } from "react";

import { motion, useScroll } from "motion/react";

const ExampleContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
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

      <section
        ref={containerRef}
        role="region"
        className="grid h-64 w-32 gap-2 overflow-y-scroll"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="size-24 bg-red-400" />
        ))}
      </section>
    </section>
  );
};

export default ExampleContainer;
