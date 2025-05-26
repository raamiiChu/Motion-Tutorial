"use client";

import PreviewTabWithCode from "@/components/component/preview-tab-with-code";

import exampleItems from "./data";

const MotionComponents = () => {
  return (
    <>
      {exampleItems.map(
        ({ code, name, Example, Description, highlightLines }) => (
          <section key={name}>
            <Description />
            <PreviewTabWithCode
              code={code}
              filename={name}
              highlightLines={highlightLines}
            >
              <Example />
            </PreviewTabWithCode>
          </section>
        )
      )}
    </>
  );
};

export default MotionComponents;
