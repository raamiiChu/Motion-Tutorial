import {
  Blockquote,
  H1,
  H2,
  H3,
  InlineCode,
  P,
} from "@/components/ui/typography";

import {
  ExampleMargin,
  ExampleOnce,
  ExampleViewBasedAnimations,
} from "../_components";
import { codeMargin, codeOnce, codeViewBasedAnimations } from "./code";

const sectionViewBasedAnimations = [
  {
    name: "view based animations",
    Example: ExampleViewBasedAnimations,
    code: codeViewBasedAnimations,
    highlightLines: [28, 29, 30, 31],
    Description: () => (
      <>
        <H1>View-based Animations</H1>
        <P>
          The <InlineCode>whileInView</InlineCode> prop is a prop that is used
          to set an animation target or variant when the element enters the
          view.
        </P>
      </>
    ),
  },
  {
    name: "once",
    Example: ExampleOnce,
    code: codeOnce,
    highlightLines: [19, 20, 21],
    Description: () => (
      <>
        <H2>Viewport</H2>
        <H3>One-time animations</H3>
        <P>
          With the <InlineCode>viewport</InlineCode> options, it&apos;s possible
          to set <InlineCode>once: true</InlineCode> so once an element has
          entered the viewport, it won&apos;t animate back out.
        </P>
      </>
    ),
  },
  {
    name: "margin",
    Example: ExampleMargin,
    code: codeMargin,
    highlightLines: [18],
    Description: () => (
      <>
        <H3>Custom detection area</H3>
        <P>
          The <InlineCode>margin</InlineCode> option allows you to change the
          detection area for the animation.
        </P>
        <Blockquote>
          Defaults to <InlineCode>0px</InlineCode>. Use multiple values to
          adjust top/right/bottom/left, e.g.{" "}
          <InlineCode>0px -20px 0px 100px</InlineCode>.
        </Blockquote>
      </>
    ),
  },
];

export default sectionViewBasedAnimations;
