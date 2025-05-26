import { H1, H2, Highlight, InlineCode, P } from "@/components/ui/typography";

import {
  Example1MotionComponents,
  Example2InitialAndAnimate,
  Example3Transition,
} from "../_components";

const example1Code = `"use client";

import { motion } from "motion/react";

const DEMO = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="size-40 bg-red-400"
    />
  );
};
`;

const example2Code = `const DEMO = () => {
  return (
    <motion.div
      initial={{ x: 200, backgroundColor: "#f87171", rotate: 0 }}
      animate={{ x: 0, backgroundColor: "#818cf8", rotate: 180 }}
      transition={{ duration: 1 }}
      className="size-40 bg-red-400"
    />
  );
};
`;

const example3Code = `const DEMO = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          damping: 10, // strength of opposing force
          stiffness: 100, // speed of the spring
        }}
        className="flex size-20 items-center justify-center bg-red-400"
      >
        default
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex size-20 items-center justify-center bg-amber-500"
      >
        linear
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex size-20 items-center justify-center bg-cyan-500"
      >
        easeInOut
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        className="flex size-20 items-center justify-center bg-indigo-400"
      >
        delay
      </motion.div>
    </>
  );
};
`;

const exampleItems = [
  {
    id: 1,
    name: "motion components",
    Example: Example1MotionComponents,
    code: example1Code,
    highlightLines: [3, 7],
    Description: () => (
      <>
        <H1>Motion Components</H1>
        <P>
          All you have to do to start adding your animations is prepend{" "}
          <Highlight>&quot;motion.&quot;</Highlight> to any default HTML
          element.
        </P>
        <P>
          e.g. <InlineCode>motion.div</InlineCode> /{" "}
          <InlineCode>motion.button</InlineCode> /{" "}
          <InlineCode>motion.h1</InlineCode> etc.
        </P>
      </>
    ),
  },
  {
    id: 2,
    name: "initial & animate",
    Example: Example2InitialAndAnimate,
    code: example2Code,
    highlightLines: [4, 5],
    Description: () => (
      <>
        <H2>Initial & Animate</H2>
        <P>
          Set <InlineCode>initial</InlineCode> &{" "}
          <InlineCode>animate</InlineCode> to the values you want to animate
          from and to.
        </P>
        <P>
          These 2 are gonna to take the same kind of props as what{" "}
          <InlineCode>style</InlineCode> tag is gonna take.
        </P>
      </>
    ),
  },
  {
    id: 3,
    name: "transition",
    Example: Example3Transition,
    code: example3Code,
    highlightLines: [7, 8, 9, 10, 11, 20, 29, 38],
    Description: () => (
      <>
        <H2>Transition</H2>
        <P>
          You can define your own animations via the{" "}
          <InlineCode>transition</InlineCode> prop.
        </P>
      </>
    ),
  },
];

export default exampleItems;
