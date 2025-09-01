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
      className={`py-12 sm:py-16 lg:py-24 ${className}`} // better spacing across devices
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        {heading && (
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight ">
            {heading}
          </h2>
        )}

        {/* Paragraph */}
        {paragraph && (
          <p className=" text-gray-600 text-lg  ">
            {paragraph}
          </p>
        )}

        {/* Children content */}
        <div className="mt-6 sm:mt-8 lg:mt-10">{children}</div>
      </div>
    </section>
  );
}
