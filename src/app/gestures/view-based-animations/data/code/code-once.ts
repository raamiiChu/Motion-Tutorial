const codeOnce = `const ExampleOnce = () => {
  return (
    <section className="h-[150dvh]">
      <div className="h-[75dvh]" />

      <motion.div
        className="mx-auto size-24 rounded-lg bg-violet-400"
        initial={{
          scale: 1,
          opacity: 0,
        }}
        whileInView={{
          scale: 2,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      />
    </section>
  );
};
`;

export default codeOnce;
