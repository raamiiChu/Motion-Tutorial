"use client";

import { useState } from "react";

import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type PreviewTabWithCodeProps = {
  children: React.ReactNode;
  code: string;
  name: string;
  highlightLines?: number[];
};

const PreviewTabWithCode = ({
  children,
  code,
  name,
  highlightLines,
}: PreviewTabWithCodeProps) => {
  const [childKey, setChildKey] = useState(0);

  const resetAnimation = () => {
    setChildKey((prev) => prev + 1);
  };

  return (
    <Tabs defaultValue="preview" className="mx-auto my-12 w-full md:w-[650px]">
      <TabsList className="mb-2 grid h-10 w-full grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <Card key={childKey}>
          <CardHeader className="flex items-center">
            <CardTitle>{name}</CardTitle>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={resetAnimation}
                    className="ml-auto"
                  >
                    <RotateCcw />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>

          <CardContent className="relative grid h-[50dvh] w-full items-center justify-center gap-2 overflow-scroll md:overflow-auto">
            {children}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="code">
        <CodeBlock
          language="tsx"
          filename={name}
          code={code}
          highlightLines={highlightLines}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PreviewTabWithCode;
