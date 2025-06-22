import {
  Blockquote,
  H1,
  H2,
  InlineCode,
  List,
  P,
} from "@/components/ui/typography";

import { ExampleEventListener, ExampleHoverAndTap } from "../_components";
import { codeEventListener, codeHoverAndTap } from "./code";

const sectionWhileProps = [
  {
    name: "hover & tap",
    Example: ExampleHoverAndTap,
    code: codeHoverAndTap,
    highlightLines: [5, 6],
    Description: () => (
      <>
        <H1>While Props</H1>
        <P>
          The motion component currently has support for{" "}
          <InlineCode>hover</InlineCode>, <InlineCode>tap</InlineCode>,{" "}
          <InlineCode>focus</InlineCode>, <InlineCode>drag</InlineCode> and{" "}
          <InlineCode>inView</InlineCode>. Each gesture has both a set of event
          listeners and a <InlineCode>while-</InlineCode> animation prop.
        </P>
      </>
    ),
  },
  {
    name: "event listener",
    Example: ExampleEventListener,
    code: codeEventListener,
    highlightLines: [9, 10, 11, 12],
    Description: () => (
      <>
        <H2>Event Listener</H2>
        <P>
          In Motion, event listeners are useful when you want to do something
          when the gesture starts or ends.
        </P>
        <Blockquote>
          <P>
            <InlineCode>onHoverStart</InlineCode> &{" "}
            <InlineCode>onHoverEnd</InlineCode> differ from{" "}
            <InlineCode>onMouseEnter</InlineCode> &{" "}
            <InlineCode>onMouseLeave</InlineCode> in that hover is guaranteed to
            only fire as a result of actual mouse events (as opposed to
            browser-generated mice events emulated from touch input).
          </P>
        </Blockquote>

        <Blockquote>
          <P>Elements with tap events are keyboard-accessible.</P>
          <P>
            Any element with a tap prop will be able to receive focus and{" "}
            <InlineCode>Enter</InlineCode> can be used to trigger tap events on
            focused elements.
          </P>
          <List>
            <li>
              Pressing <InlineCode>Enter</InlineCode> down will trigger{" "}
              <InlineCode>onTapStart</InlineCode> &{" "}
              <InlineCode>whileTap</InlineCode>
            </li>
            <li>
              Releasing <InlineCode>Enter</InlineCode> will trigger{" "}
              <InlineCode>onTap</InlineCode>
            </li>
            <li>
              If the element loses focus before <InlineCode>Enter</InlineCode>{" "}
              is released, <InlineCode>onTapCancel</InlineCode> will fire.
            </li>
          </List>
        </Blockquote>
      </>
    ),
  },
];

export default sectionWhileProps;
