const codeExitWithLayout = `const DEMO = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <motion.div layout className="mx-auto">
        <Button className="w-24" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"}
        </Button>
      </motion.div>

      <AnimatePresence initial={false} mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="size-40 rounded-full bg-cyan-400"
          />
        )}
      </AnimatePresence>
    </>
  );
};`;

export default codeExitWithLayout;
