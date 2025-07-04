const codeMotionComponents = `"use client";

import { motion } from "motion/react";

const ExampleMotionComponents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="size-40 rounded-lg bg-red-400"
    />
  );
};
`;

export default codeMotionComponents;
