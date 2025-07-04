"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

const ScrollXWithY = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-105%"]);

  return (
    <section ref={targetRef} className="relative h-[300dvh]">
      <div
        role="presentation"
        className="sticky top-0 flex h-dvh w-full items-center overflow-hidden"
      >
        <motion.div className="flex w-fit flex-nowrap gap-4" style={{ x }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollXWithY;
