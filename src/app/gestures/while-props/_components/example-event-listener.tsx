"use client";

import { motion } from "motion/react";

const ExampleEventListener = () => {
  return (
    <motion.div
      className="bg-foreground text-background flex size-32 items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 10 }}
      // --------------------------------
      // event listener in motion
      onHoverStart={() => console.log("hover start")}
      onHoverEnd={() => console.log("hover end")}
      onTapStart={() => console.log("tap start")}
      onTap={() => console.log("tap")}
      // --------------------------------
      // event listener in react
      onMouseEnter={() => console.log("mouse enter")}
      onMouseLeave={() => console.log("mouse leave")}
      onClick={() => console.log("click")}
      onMouseDown={() => console.log("mouse down")}
    >
      Click me
    </motion.div>
  );
};

export default ExampleEventListener;
