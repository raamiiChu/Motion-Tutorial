const codeUseScroll = `import { motion, useScroll } from "motion/react";

const ScrollbarProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      role="progressbar"
      className="h-1.5 bg-blue-400"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 20,
        scaleX: scrollYProgress,
      }}
    />
  );
};
`;

export default codeUseScroll;
