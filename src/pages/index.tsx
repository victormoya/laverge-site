import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Video } from '../components';
import { Header, TourSection, ContactSection, Footer } from '../sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow text-center mt-10">
        <Video videoId="ukPgCvHfAmg" title="Showdown" />
        <TourSection />
        <StaticImage
          src="../images/band.png"
          alt="Polaroid-style photo of the three members of the band in a music studio, with instruments and equipment in the background."
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>LAVERGE</title>
    <meta
      name="description"
      content="New Album: Who is there to beat the ego?"
    />
  </>
);
