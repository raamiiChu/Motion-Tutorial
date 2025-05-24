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
  filename: string;
  highlightLines?: number[];
};

const PreviewTabWithCode = ({
  children,
  code,
  filename,
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
          <CardHeader>
            <CardTitle>{filename}</CardTitle>

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

          <CardContent className="grid max-h-[65dvh] w-full justify-center space-y-4 overflow-scroll md:overflow-auto">
            {children}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="code">
        <CodeBlock
          language="tsx"
          filename={filename}
          code={code}
          highlightLines={highlightLines}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PreviewTabWithCode;
