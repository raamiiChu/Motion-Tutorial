import { CodeBlock } from "@/components/ui/code-block";

import { ExampleHoverTiltCard } from "./_components";
import { codeHoverTiltCard } from "./code";

const HoverTiltCard = () => {
  return (
    <main className="grid place-items-center gap-8 py-6">
      <ExampleHoverTiltCard />
      <CodeBlock
        code={codeHoverTiltCard}
        language="tsx"
        filename="example-hover-tile-card.tsx"
      />
    </main>
  );
};

export default HoverTiltCard;
