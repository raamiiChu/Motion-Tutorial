const codeDrag = `const ExampleDrag = () => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 0.9 }}
      className="size-24 cursor-grab rounded-lg bg-red-400 active:cursor-grabbing"
    />
  );
};
`;

export default codeDrag;
