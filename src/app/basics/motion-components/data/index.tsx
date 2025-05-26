import {
  H1,
  H2,
  H3,
  Highlight,
  InlineCode,
  P,
} from "@/components/ui/typography";

import {
  ExampleDelay,
  ExampleInitialAndAnimate,
  ExampleMotionComponents,
  ExampleRepeat,
  ExampleTransition,
} from "../_components";
import {
  codeDelay,
  codeInitialAndAnimate,
  codeMotionComponents,
  codeRepeat,
  codeTransition,
} from "./code";

const exampleItems = [
  {
    name: "motion components",
    Example: ExampleMotionComponents,
    code: codeMotionComponents,
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
    name: "initial & animate",
    Example: ExampleInitialAndAnimate,
    code: codeInitialAndAnimate,
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
    name: "transition",
    Example: ExampleTransition,
    code: codeTransition,
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
  {
    name: "delay",
    Example: ExampleDelay,
    code: codeDelay,
    highlightLines: [6],
    Description: () => (
      <>
        <H3>Delay</H3>
        <P>
          Add <InlineCode>delay</InlineCode> value to make an animation wait
          before starting.
        </P>
      </>
    ),
  },
  {
    name: "repeat",
    Example: ExampleRepeat,
    code: codeRepeat,
    highlightLines: [
      6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 21, 27, 28, 29, 30, 31, 32,
    ],
    Description: () => (
      <>
        <H3>Repeat</H3>
        <P>
          Add <InlineCode>repeat</InlineCode> value to make an animation run
          more than once.
        </P>
      </>
    ),
  },
];

export default exampleItems;
