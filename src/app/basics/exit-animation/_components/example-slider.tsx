"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, wrap } from "motion/react";

import { Button } from "@/components/ui/button";

const images = [
  "https://picsum.photos/id/905/200/",
  "https://picsum.photos/id/906/200/",
  "https://picsum.photos/id/907/200/",
  "https://picsum.photos/id/908/200/",
  "https://picsum.photos/id/909/200/",
  "https://picsum.photos/id/910/200/",
];

const ExampleSlider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [direction, setDirection] = useState<1 | -1>(1);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const setSlide = (newDirection: 1 | -1) => {
    setDirection(newDirection);
    const nextIndex = wrap(0, images.length, selectedImageIndex + newDirection);
    setSelectedImageIndex(nextIndex);
  };

  return (
    <div className="flex">
      <AnimatePresence initial={false} mode="popLayout" custom={direction}>
        <motion.div
          key={selectedImageIndex}
          className="relative size-50"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <Image
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex}`}
            fill
          />
        </motion.div>
      </AnimatePresence>

      <Button
        className="absolute bottom-1/2 left-12 z-10 translate-y-1/2"
        size="icon"
        onClick={() => setSlide(-1)}
      >
        <ArrowLeft />
      </Button>

      <Button
        className="absolute right-12 bottom-1/2 z-10 translate-y-1/2"
        size="icon"
        onClick={() => setSlide(1)}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ExampleSlider;
