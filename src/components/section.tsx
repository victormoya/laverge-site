import React from 'react';

interface SectionProps {
  anchor: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  anchor,
  title,
  children
}: SectionProps) => {
  return (
    <div id={anchor} className="mt-10">
      <h2 className="text-4xl font-semibold uppercase my-10">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
