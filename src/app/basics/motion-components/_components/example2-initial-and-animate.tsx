"use client";

import { motion } from "motion/react";

const Example2InitialAndAnimate = () => {
  return (
    <motion.div
      initial={{ x: 200, backgroundColor: "#f87171", rotate: 0 }}
      animate={{ x: 0, backgroundColor: "#818cf8", rotate: 180 }}
      transition={{ duration: 1 }}
      className="size-40 bg-red-400"
    />
  );
};

export default Example2InitialAndAnimate;
