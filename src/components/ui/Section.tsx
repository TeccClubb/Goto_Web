// components/Section.tsx
import React from "react";

interface SectionProps {
  children?: React.ReactNode; // optional children for extra content
  className?: string;
  id?: string;
  heading?: string;
  paragraph?: string;
}

export default function Section({
  children,
  className = "",
  id,
  heading,
  paragraph,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${className}`} // better spacing across devices
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        {heading && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold ">
            {heading}
          </h2>
        )}

        {/* Paragraph */}
        {paragraph && (
          <p className=" text-gray-600 text-lgmt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto   ">
            {paragraph}
          </p>
        )}

        {/* Children content */}
        <div className="mt-6 sm:mt-8 lg:mt-10">{children}</div>
      </div>
    </section>
  );
}
