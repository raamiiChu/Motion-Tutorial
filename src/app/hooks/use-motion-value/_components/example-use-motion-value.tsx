"use client";

import { useEffect, useState } from "react";

import { Minus, Plus } from "lucide-react";
import { motion, useMotionValue } from "motion/react";

import { Button } from "@/components/ui/button";

const scaleRate = 0.1;

const ExampleUseMotionValue = () => {
  const scale = useMotionValue(1);
  const [scaleState, setScaleState] = useState(1);

  useEffect(() => {
    console.log("useEffect Triggered by motion value");
  }, [scale]);

  useEffect(() => {
    console.log("useEffect Triggered by useState");
  }, [scaleState]);

  return (
    <section>
      <nav className="absolute top-0 left-1/2 z-5 flex -translate-x-1/2 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scale.set(scale.get() - scaleRate);
            setScaleState((prev) => prev - scaleRate);
          }}
        >
          <Minus />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scale.set(scale.get() + scaleRate);
            setScaleState((prev) => prev + scaleRate);
          }}
        >
          <Plus />
        </Button>
      </nav>

      <section role="region" className="flex items-center gap-20">
        <motion.div
          className="size-24 rounded-lg bg-red-400"
          style={{ scale }}
        />
        <motion.div
          className="size-24 rounded-lg bg-red-400"
          style={{ scale: scaleState }}
        />
      </section>
    </section>
  );
};

export default ExampleUseMotionValue;
