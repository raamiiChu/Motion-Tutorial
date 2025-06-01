import { H1, H2, Highlight, InlineCode, P } from "@/components/ui/typography";

import { ExampleKeyframes, ExampleTimesTransition } from "../_components";
import { codeKeyframes, codeTimesTransition } from "./code";

const sectionsKeyframes = [
  {
    name: "keyframes",
    Example: ExampleKeyframes,
    code: codeKeyframes,
    highlightLines: [5, 6, 7, 8],
    Description: () => (
      <>
        <H1>Keyframes</H1>
        <P>
          Passing an array in <InlineCode>animate</InlineCode> will
          automatically animate through each value in sequence.
        </P>
      </>
    ),
  },
  {
    name: "times-transition",
    Example: ExampleTimesTransition,
    code: codeTimesTransition,
    highlightLines: [7],
    Description: () => (
      <>
        <H2>Times Transition</H2>
        <P>
          By default, each keyframe is spaced naturally throughout the
          animation. Set <InlineCode>times</InlineCode> via{" "}
          <InlineCode>transition</InlineCode> to specify the time when each
          keyframe should occur.
        </P>
        <P>
          Notice: <InlineCode>times</InlineCode> is an array of values{" "}
          <Highlight>between 0 and 1</Highlight>.
        </P>
      </>
    ),
  },
];

export default sectionsKeyframes;
