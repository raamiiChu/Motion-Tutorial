import { H1, H2, InlineCode, P } from "@/components/ui/typography";

import {
  ExampleExitAnimation,
  ExampleExitWithLayout,
  ExampleSlider,
} from "../_components";
import { codeExitAnimation, codeExitWithLayout } from "./code";

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
  {
    name: "exit animation with layout",
    code: codeExitWithLayout,
    Example: ExampleExitWithLayout,
    Description: () => (
      <>
        <H2>Exit Animation with Layout</H2>
        <P>
          Set <InlineCode>popLayout</InlineCode> to make exit animations more
          smoother.
        </P>
      </>
    ),
    highlightLines: [6, 12],
  },
  {
    name: "slider",
    code: "codeSlider",
    Example: ExampleSlider,
    Description: () => (
      <>
        <H2>Slider</H2>
      </>
    ),
  },
];

export default sectionsExitAnimation;
