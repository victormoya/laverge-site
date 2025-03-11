import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Video } from '../components';
import { Header, TourSection, ContactSection, Footer } from '../sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-center mt-10">
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
    <html lang="en" />
    <title>LAVERGE</title>
    <meta
      name="description"
      content="New Album: Who is there to beat the ego?"
    />
  </>
);
