import { Blockquote, H1, H2, InlineCode, P } from "@/components/ui/typography";

import { ExampleComposition, ExampleUseMotionValue } from "../_components";
import { codeComposition, codeUseMotionValue } from "./code";

const sectionsUseMotionValue = [
  {
    name: "example",
    code: codeUseMotionValue,
    Example: ExampleUseMotionValue,
    Description: () => (
      <>
        <H1>useMotionValue</H1>
        <P>Motion values track the state and velocity of animated values.</P>

        <Blockquote>
          Using <InlineCode>useMotionValue</InlineCode> instead of{" "}
          <InlineCode>useState</InlineCode> will avoid re-renders.
        </Blockquote>
      </>
    ),
    highlightLines: [1, 6, 15, 24, 33],
  },

  {
    name: "composition",
    code: codeComposition,
    Example: ExampleComposition,
    Description: () => (
      <>
        <H2>Composition</H2>
        <P>
          These motion values can then go on to be composed with more hooks.
          (e.g. <InlineCode>useSpring</InlineCode>,{" "}
          <InlineCode>useTransform</InlineCode>,{" "}
          <InlineCode>useVelocity</InlineCode>, etc.)
        </P>
      </>
    ),
    highlightLines: [1, 7, 8, 9, 10, 11, 38],
  },
];

export default sectionsUseMotionValue;
