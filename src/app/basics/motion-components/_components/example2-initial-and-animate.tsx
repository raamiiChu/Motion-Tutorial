"use client";

import { motion } from "motion/react";

const Example2InitialAndAnimate = () => {
  return (
    <motion.div
      initial={{ x: 200, backgroundColor: "#ffffff" }}
      animate={{ x: 0, backgroundColor: "#818cf8" }}
      transition={{ duration: 1 }}
      className="size-40 bg-red-400"
    />
  );
};

export default Example2InitialAndAnimate;
