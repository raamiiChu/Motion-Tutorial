import { H1, H2, InlineCode, P } from "@/components/ui/typography";

import { ExampleDelay, ExampleRepeat, ExampleTransition } from "../_components";
import { codeDelay, codeRepeat, codeTransition } from "./code";

const sectionsTransition = [
  {
    name: "transition",
    Example: ExampleTransition,
    code: codeTransition,
    highlightLines: [7, 8, 9, 10, 11, 20, 29, 38],
    Description: () => (
      <>
        <H1>Transition</H1>
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
        <H2>Delay</H2>
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
        <H2>Repeat</H2>
        <P>
          Add <InlineCode>repeat</InlineCode> value to make an animation run
          more than once.
        </P>
      </>
    ),
  },
];

export default sectionsTransition;
