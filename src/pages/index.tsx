import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Header, Video, Footer } from '../components';
import { TourSection, ContactSection } from '../sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-center mt-20">
        <Video videoId="aysl7h5wQow" title="Showdown" />
        <TourSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
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
