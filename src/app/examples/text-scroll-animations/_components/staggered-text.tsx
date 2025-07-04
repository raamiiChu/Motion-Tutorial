"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useScroll } from "motion/react";

const textVariants = {
  hidden: {
    opacity: 0.2,
  },
  visible: {
    opacity: 1,
  },
};

const StaggeredText = ({ children }: { children: string }) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start 45%", "end 70%"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <>
      <header className="h-72"></header>
      <article className="py-4" ref={articleRef}>
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            initial="hidden"
            animate={progress > index / children.length ? "visible" : "hidden"}
            className="m-2 inline-block text-2xl font-bold sm:text-3xl md:text-4xl xl:text-5xl"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {char}
          </motion.span>
        ))}
      </article>
    </>
  );
};

export default StaggeredText;
