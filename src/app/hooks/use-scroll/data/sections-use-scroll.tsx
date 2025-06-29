import { Blockquote, H1, H2, InlineCode, P } from "@/components/ui/typography";

import {
  ExampleContainer,
  ExampleOffset,
  ExampleUseScroll,
} from "../_components";
import { codeContainer, codeOffset, codeUseScroll } from "./code";

const sectionsUseScroll = [
  {
    name: "useScroll",
    code: codeUseScroll,
    Example: ExampleUseScroll,
    Description: () => (
      <>
        <H1>useScroll</H1>
        <P>
          By default, <InlineCode>useScroll</InlineCode> tracks the page scroll.
        </P>
      </>
    ),
    highlightLines: [1, 4, 17],
  },
  {
    name: "offset",
    code: codeOffset,
    Example: ExampleOffset,
    Description: () => (
      <>
        <H2>Offset</H2>
        <P>
          <InlineCode>offset</InlineCode> describes intersections, points where
          the target and container meet.
        </P>
        <P>
          Common used:{" "}
          <InlineCode>
            [&quot;start start&quot;, &quot;end end&quot;]
          </InlineCode>{" "}
          (default) ,{" "}
          <InlineCode>
            [&quot;start end&quot;, &quot;end start&quot;]
          </InlineCode>
        </P>
        <Blockquote>
          For example, the intersection &quot;start end&quot; means when the
          start of the target on the tracked axis meets the end of the
          container.
        </Blockquote>
      </>
    ),
    highlightLines: [6],
  },
  {
    name: "container",
    code: codeContainer,
    Example: ExampleContainer,
    Description: () => (
      <>
        <H2>Container</H2>
        <P>
          To track the scroll position of a scrollable element we can pass the
          element&apos;s <InlineCode>ref</InlineCode> to{" "}
          <InlineCode>container</InlineCode>.
        </P>
      </>
    ),
    highlightLines: [2, 5, 35],
  },
];

export default sectionsUseScroll;
