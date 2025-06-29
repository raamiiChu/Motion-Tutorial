const codeUseMotionValue = `import { motion, useMotionValue } from "motion/react";

const scaleRate = 0.1;

const ExampleUseMotionValue = () => {
  const scale = useMotionValue(1);

  return (
    <section>
      <nav className="absolute top-0 left-1/2 z-5 flex -translate-x-1/2 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scale.set(scale.get() - scaleRate);
          }}
        >
          <Minus />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scale.set(scale.get() + scaleRate);
          }}
        >
          <Plus />
        </Button>
      </nav>

      <motion.div
        className="size-24 rounded-lg bg-red-400"
        style={{ scale }}
      />
    </section>
  );
};
`;

export default codeUseMotionValue;
