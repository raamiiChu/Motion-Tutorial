import { CodeBlock } from "@/components/ui/code-block";

import { ExampleHoverTileCard } from "./_components";
import { codeHoverTileCard } from "./code";

const HoverTileCard = () => {
  return (
    <main className="grid place-items-center gap-8">
      <ExampleHoverTileCard />
      <CodeBlock
        code={codeHoverTileCard}
        language="tsx"
        filename="example-hover-tile-card.tsx"
      />
    </main>
  );
};

export default HoverTileCard;
