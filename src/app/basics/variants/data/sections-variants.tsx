import { H1, H2, InlineCode, P } from "@/components/ui/typography";

import { ExampleStagger, ExampleVariants } from "../_components";
import { codeStagger, codeVariants } from "./code";

const sectionsVariants = [
  {
    name: "Variants",
    code: codeVariants,
    Example: ExampleVariants,
    highlightLines: [21, 22, 23, 24],
    Description: () => (
      <>
        <H1>Variants</H1>
        <P>
          Variants are a way to define the different states of an element.
          Sometimes we want to orchestrate animations that propagate throughout
          the DOM. We can do so with variants.
        </P>
      </>
    ),
  },
  {
    name: "Stagger",
    code: codeStagger,
    Example: ExampleStagger,
    highlightLines: [3, 4, 5],
    Description: () => (
      <>
        <H2>Stagger</H2>
        <P>
          By default, this children animations will start simultaneously with
          the parent. But with <InlineCode>variants </InlineCode> we gain access
          to new transition props like <InlineCode>staggerChildren</InlineCode>.
        </P>
      </>
    ),
  },
];

export default sectionsVariants;
