import * as React from 'react';
import { Link, type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Link to="/home/">
        <div className="relative h-screen w-screen">
          <StaticImage
            src="../images/album-cover.jpg"
            alt="A minimalist photo showing empty tables and chairs in a café-like setting, overlaid with the text 'Who is there to beat the ego? Laverge' in an elegant font."
            className="absolute inset-0 h-full w-full object-cover"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>LAVERGE</title>
    <meta
      name="description"
      content="New Album: Who is there to beat the ego?"
    />
  </>
);
