import { Blockquote, H1, H2, InlineCode, P } from "@/components/ui/typography";

import {
  ExampleConstraints,
  ExampleConstraintsRef,
  ExampleDrag,
  ExampleMomentum,
} from "../_components";
import {
  codeConstraints,
  codeConstraintsRef,
  codeDrag,
  codeMomentum,
} from "./code";

const sectionDrag = [
  {
    name: "drag",
    Example: ExampleDrag,
    code: codeDrag,
    highlightLines: [4],
    Description: () => (
      <>
        <H1>Drag</H1>
        <P>
          The <InlineCode>drag</InlineCode> prop allows you to drag the
          component.
        </P>
        <Blockquote>
          By default, when the drag ends the element will perform an inertia
          animation with the ending velocity.
        </Blockquote>
      </>
    ),
  },
  {
    name: "momentum",
    Example: ExampleMomentum,
    code: codeMomentum,
    highlightLines: [5],
    Description: () => (
      <P>
        Set <InlineCode>dragMomentum</InlineCode> to{" "}
        <InlineCode>false</InlineCode> allows you to disable the inertia
        animation.
      </P>
    ),
  },
  {
    name: "constraints",
    Example: ExampleConstraints,
    code: codeConstraints,
    highlightLines: [5, 6],
    Description: () => (
      <>
        <H2>Constraints</H2>
        <P>
          The <InlineCode>dragConstraints</InlineCode> prop allows you to
          constrain the drag movement.
        </P>
      </>
    ),
  },
  {
    name: "constraints ref",
    Example: ExampleConstraintsRef,
    code: codeConstraintsRef,
    highlightLines: [2, 6, 11],
    Description: () => (
      <P>
        It can accept a ref to another component created with React&apos;s{" "}
        <InlineCode>useRef</InlineCode> hook.
      </P>
    ),
  },
];

export default sectionDrag;
