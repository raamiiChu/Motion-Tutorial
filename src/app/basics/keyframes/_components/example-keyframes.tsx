"use client";

import { motion } from "framer-motion";

const ExampleKeyframes = () => {
  return (
    <motion.div
      animate={{
        x: [-100, 100, 100, -100, -100],
        y: [-100, -100, 100, 100, -100],
        rotate: [0, 0, 180, -180, 0],
        borderRadius: ["0%", "50%", "0%", "0%", "50%"],
      }}
      transition={{ duration: 2 }}
      className="size-24 bg-red-400"
    />
  );
};

export default ExampleKeyframes;
