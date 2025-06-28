const codeMargin = `const ExampleMargin = () => {
  return (
    <section className="h-[150dvh]">
      <div className="h-[75dvh]" />

      <motion.div
        className="mx-auto size-24 rounded-lg bg-blue-400"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          margin: "-40% 0px -40% 0px",
        }}
      />
    </section>
  );
};
`;

export default codeMargin;
