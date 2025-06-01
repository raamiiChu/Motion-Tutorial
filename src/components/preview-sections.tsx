import PreviewTabWithCode from "@/components/component/preview-tab-with-code";

type Section = {
  code: string;
  name: string;
  Example: () => React.JSX.Element;
  Description: () => React.JSX.Element;
  highlightLines?: number[];
};

const PreviewSections = ({ sections }: { sections: Section[] }) => {
  return (
    <>
      {sections.map(({ code, name, Example, Description, highlightLines }) => (
        <section key={name}>
          <Description />
          <PreviewTabWithCode
            code={code}
            name={name}
            highlightLines={highlightLines}
          >
            <Example />
          </PreviewTabWithCode>
        </section>
      ))}
    </>
  );
};

export default PreviewSections;
