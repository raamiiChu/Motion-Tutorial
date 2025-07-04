"use client";

import { useRef } from "react";

import { SplinePointer } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const ExampleHoverTiltCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const rotateX = useTransform(ySpring, [0, 1], [15, -15]);
  const rotateY = useTransform(xSpring, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!cardRef.current) {
      return;
    }

    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current.getBoundingClientRect();

    const xPercentage = (clientX - left) / width;
    const yPercentage = (clientY - top) / height;

    x.set(xPercentage);
    y.set(yPercentage);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.section
      ref={cardRef}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 sm:w-96"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: "translateZ(75px)",
        }}
        className="bg-foreground/70 text-background absolute inset-6 grid place-content-center gap-1 rounded-xl shadow-lg"
      >
        <motion.div
          animate={{ rotate: [5, -5] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <SplinePointer />
        </motion.div>
        <p className="text-2xl font-bold">HOVER ME</p>
      </div>
    </motion.section>
  );
};

export default ExampleHoverTiltCard;
