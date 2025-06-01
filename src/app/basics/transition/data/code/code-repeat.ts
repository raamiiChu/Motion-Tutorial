const codeRepeat = `const ExampleRepeat = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: 2,
          repeatDelay: 1.5,
        }}
        className="size-20 bg-red-400"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
        className="size-20 bg-red-400"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="size-20 bg-red-400"
      />
    </>
  );
};
`;

export default codeRepeat;
