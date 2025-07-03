"use client";

import { motion } from "motion/react";

const ExampleTransition = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          damping: 10, // strength of opposing force
          stiffness: 100, // speed of the spring
        }}
        className="flex size-20 items-center justify-center bg-red-400"
      >
        default
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="flex size-20 items-center justify-center bg-yellow-500"
      >
        linear
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex size-20 items-center justify-center bg-green-500"
      >
        easeInOut
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex size-20 items-center justify-center bg-blue-500"
      >
        easeOut
      </motion.div>
    </>
  );
};

export default ExampleTransition;
