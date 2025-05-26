"use client";

import { motion } from "motion/react";

const ExampleDelay = () => {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ delay: 1 }}
      className="size-40 bg-red-400"
    />
  );
};

export default ExampleDelay;
