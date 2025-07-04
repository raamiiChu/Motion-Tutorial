const codeVariants = `const boxVariants = {
  initial: { opacity: 0.75, scale: 1 },
  hovered: {
    opacity: 1,
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tapped: {
    opacity: 1,
    scale: 0.8,
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const ExampleVariants = () => {
  return (
    <motion.div
      className="flex size-24 items-center justify-center rounded-lg bg-blue-400"
      variants={boxVariants}
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
    >
      Hover me!
    </motion.div>
  );
};
`;

export default codeVariants;
