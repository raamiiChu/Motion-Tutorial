import { H1, InlineCode, P } from "@/components/ui/typography";

import { ExampleExitAnimation } from "../_components";
import { codeExitAnimation } from "./code";

const sectionsExitAnimation = [
  {
    name: "exit animation",
    code: codeExitAnimation,
    Example: ExampleExitAnimation,
    Description: () => (
      <>
        <H1>Exit Animation</H1>
        <P>
          In React, when a component is removed, it&apos;s usually removed
          instantly.
        </P>
        <P>
          If you want to animate the exit of a component, you can use the{" "}
          <InlineCode>AnimatePresence</InlineCode> component.
        </P>
      </>
    ),
    highlightLines: [1, 12, 17, 21],
  },
];

export default sectionsExitAnimation;
