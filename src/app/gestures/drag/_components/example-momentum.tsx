"use client";

import { motion } from "motion/react";

const ExampleMomentum = () => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 0.9 }}
      className="size-24 cursor-grab bg-red-400 active:cursor-grabbing"
    />
  );
};

export default ExampleMomentum;
