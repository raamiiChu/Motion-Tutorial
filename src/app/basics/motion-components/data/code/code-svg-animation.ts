const codeSvgAnimation = `const ExampleSvgAnimation = () => {
  return (
    <svg width="300" height="150" viewBox="0 0 300 150" fill="none">
      <motion.path
        d="M20 75 Q 150 10 280 75 Q 150 140 20 75 Z"
        stroke="#ff0088"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="150"
        cy="75"
        r="20"
        fill="#ff0088"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 2,
          duration: 0.5,
          ease: "backOut",
        }}
      />
    </svg>
  );
};
`;

export default codeSvgAnimation;
