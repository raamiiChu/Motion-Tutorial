"use client";

import PreviewTabWithCode from "@/components/component/preview-tab-with-code";

import exampleItems from "./data";

const MotionComponents = () => {
  return (
    <>
      {exampleItems.map(
        ({ id, code, name, Example, Description, highlightLines }) => (
          <section key={id}>
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
