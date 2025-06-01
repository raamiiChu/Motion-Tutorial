const codeExitAnimation = `import { AnimatePresence, motion } from "motion/react";

const ExampleExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Button className="mx-auto w-24" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </Button>

      <AnimatePresence initial={false}>
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
};
`;

export default codeExitAnimation;
