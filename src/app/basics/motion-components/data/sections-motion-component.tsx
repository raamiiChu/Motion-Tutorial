import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  Highlight,
  InlineCode,
  P,
} from "@/components/ui/typography";

import {
  ExampleInitialAndAnimate,
  ExampleMotionComponents,
  ExampleSvgAnimation,
} from "../_components";
import {
  codeInitialAndAnimate,
  codeMotionComponents,
  codeSvgAnimation,
} from "./code";

const sectionsMotionComponent = [
  {
    name: "motion components",
    Example: ExampleMotionComponents,
    code: codeMotionComponents,
    highlightLines: [3, 7],
    Description: () => (
      <>
        <H1>Motion Components</H1>
        <H4>
          <Highlight>! ! ! Always Client Side Rendering (CSR) ! ! !</Highlight>
        </H4>
        <P>
          All you have to do to start adding your animations is prepend{" "}
          <InlineCode>motion</InlineCode> to any default HTML element.
        </P>
        <P>
          e.g. <InlineCode>motion.div</InlineCode> /{" "}
          <InlineCode>motion.button</InlineCode> /{" "}
          <InlineCode>motion.h1</InlineCode> etc.
        </P>
        <Blockquote>
          <InlineCode>Motion</InlineCode> components animate values outside the
          React render cycle for improved performance.
        </Blockquote>
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
    name: "svg animation",
    Example: ExampleSvgAnimation,
    code: codeSvgAnimation,
    highlightLines: [9, 10],
    Description: () => (
      <>
        <H3>SVG Animation</H3>
        <P>
          You can also draw SVG paths using the{" "}
          <InlineCode>pathLength</InlineCode> property.
        </P>
      </>
    ),
  },
];

export default sectionsMotionComponent;
