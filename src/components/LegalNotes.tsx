import React, { FC } from "react";
import Section from "./ui/Section";

const LegalNotes: FC<{
  heading: string;
  htmlContent?: string;
  errorMessage?: string;
}> = ({ heading, htmlContent, errorMessage }) => (
  <Section heading={heading}>
    {errorMessage && (
      <div className="text-red-500 text-base font-medium max-w-xl mx-auto bg-red-200/90 border-2 border-red-500/80 p-4 rounded-md">
        {errorMessage}
      </div>
    )}

    {htmlContent && (
      <article
        className="w-full max-w-7xl prose prose-neutral dark:prose-invert text-start"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
  </Section>
);

export default LegalNotes;
