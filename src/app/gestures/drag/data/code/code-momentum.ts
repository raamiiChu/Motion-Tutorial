const codeMomentum = `const ExampleMomentum = () => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 0.9 }}
      className="size-24 cursor-grab rounded-lg bg-red-400 active:cursor-grabbing"
    />
  );
};
`;

export default codeMomentum;
