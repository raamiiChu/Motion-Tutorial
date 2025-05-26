import React from "react";

import PreviewTabWithCode from "@/components/component/preview-tab-with-code";

import sectionsTransition from "./data";

const Transition = () => {
  return (
    <>
      {sectionsTransition.map(
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

export default Transition;
