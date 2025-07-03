const codeKeyframes = `const ExampleKeyframes = () => {
  return (
    <motion.div
      animate={{
        x: [-100, 100, 100, -100, -100],
        y: [-100, -100, 100, 100, -100],
        rotate: [0, 0, 180, -180, 0],
        borderRadius: ["0%", "50%", "0%", "0%", "50%"],
      }}
      transition={{ duration: 4 }}
      className="size-24 rounded-lg bg-red-400"
    />
  );
};
`;

export default codeKeyframes;
