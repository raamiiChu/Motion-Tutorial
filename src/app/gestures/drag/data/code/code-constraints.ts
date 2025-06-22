const codeConstraints = `const ExampleConstraints = () => {
  return (
    <section className="bg-foreground h-24 w-74 rounded-lg">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        className="size-24 cursor-grab rounded-lg bg-red-400 active:cursor-grabbing"
      />
    </section>
  );
};
`;

export default codeConstraints;
