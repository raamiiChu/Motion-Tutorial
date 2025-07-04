const codeEventListener = `const ExampleEventListener = () => {
  return (
    <section className="flex gap-6">
      <motion.div
        className="bg-foreground text-background flex size-32 items-center justify-center rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 10 }}
        // --------------------------------
        // event listener in motion
        onHoverStart={() => console.log("hover start")}
        onHoverEnd={() => console.log("hover end")}
        // --------------------------------
        // event listener in react
        onMouseEnter={() => console.log("mouse enter")}
        onMouseLeave={() => console.log("mouse leave")}
      >
        Hover me
      </motion.div>

      <motion.div
        className="bg-foreground text-background flex size-32 items-center justify-center rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 10 }}
        // --------------------------------
        // event listener in motion
        onTapStart={() => console.log("tap start")}
        onTap={() => console.log("tap")}
        // --------------------------------
        // event listener in react
        onClick={() => console.log("click")}
        onMouseDown={() => console.log("mouse down")}
      >
        Click me
      </motion.div>
    </section>
  );
};`;

export default codeEventListener;
