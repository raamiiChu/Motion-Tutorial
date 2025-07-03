"use client";

import React from "react";

import { motion } from "framer-motion";

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const AnimateSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.section>
  );
};

export default AnimateSection;
