"use client";

import { motion, useScroll } from "motion/react";

const ScrollbarProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className="fixed inset-x-0 bottom-0 z-20 h-1.5 origin-left bg-blue-400"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollbarProgress;
