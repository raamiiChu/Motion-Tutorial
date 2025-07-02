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

const StaggeredText = () => {
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

  const text =
    "現在の私たちは、EXPO'70が約束したはずの「人類の進歩と調和」の中にはいない。繰り返し大災害に苛まれ、経済は停滞し、新たな戦争まで始まってしまった。";

  return (
    <>
      <header className="h-72"></header>
      <article className="py-4" ref={articleRef}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            initial="hidden"
            animate={progress > index / text.length ? "visible" : "hidden"}
            className="m-2 inline-block text-5xl font-bold"
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
