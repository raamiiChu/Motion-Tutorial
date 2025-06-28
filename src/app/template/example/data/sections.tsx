import { H1 } from "@/components/ui/typography";

import { Example } from "../_components";
import { code } from "./code";

const sections = [
  {
    name: "example",
    code: code,
    Example: Example,
    Description: () => (
      <>
        <H1>Template</H1>
      </>
    ),
    highlightLines: [],
  },
];

export default sections;
