import { H1, InlineCode, P } from "@/components/ui/typography";

import { ExampleKeyframes } from "../_components";
import { codeKeyframes } from "./code";

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
];

export default sectionsKeyframes;
