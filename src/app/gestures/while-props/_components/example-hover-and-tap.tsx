"use client";

import { motion } from "motion/react";

const ExampleHoverAndTap = () => {
  return (
    <motion.div
      className="bg-foreground text-background flex size-32 items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 10 }}
    >
      Click me
    </motion.div>
  );
};

export default ExampleHoverAndTap;
