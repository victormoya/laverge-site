import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface BackgroundProps {
  imageSrc: string;
}

export const Background: React.FC<BackgroundProps> = ({ imageSrc }) => {
  return (
    <main>
      <div className="relative h-screen w-screen">
        <StaticImage
          src={imageSrc}
          alt="A minimalist photo showing empty tables and chairs in a café-like setting, overlaid with the text 'Who is there to beat the ego? Laverge' in an elegant font."
          className="absolute inset-0 h-full w-full object-cover"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </main>
  );
};
