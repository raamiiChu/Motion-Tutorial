"use client";

import { motion } from "framer-motion";

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ExampleStagger = () => {
  return (
    <motion.div
      role="region"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4"
    >
      <motion.div
        variants={childVariants}
        className="size-20 rounded-lg bg-blue-400"
      />
      <motion.div
        variants={childVariants}
        className="size-20 rounded-lg bg-green-400"
      />
      <motion.div
        variants={childVariants}
        className="size-20 rounded-lg bg-yellow-400"
      />
    </motion.div>
  );
};

export default ExampleStagger;
