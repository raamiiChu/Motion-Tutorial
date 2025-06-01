"use client";

import { motion } from "motion/react";

const ExampleTimesTransition = () => {
  return (
    <motion.div
      animate={{
        scale: [null, 2, 2, 0.5],
      }}
      transition={{ duration: 5, times: [0, 0.2, 0.8, 1] }}
      className="size-24 bg-red-400"
    />
  );
};

export default ExampleTimesTransition;
