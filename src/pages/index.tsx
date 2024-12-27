import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import Menu from '../components/menu';
import Video from '../components/video';
import { Tour, Contact } from '../sections';
import Social from '../components/social';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen">
      <header className="mt-10">
        <Menu />
      </header>
      <main className="flex-grow text-center mt-20">
        <Video videoId="aysl7h5wQow" title="Showdown" />
        <Tour />
        <Contact />
      </main>
      <footer className="mt-auto p-6 space-y-4 flex flex-col items-center">
        <Social />
        <p>&copy; 2025 Carcosa Records</p>
      </footer>
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
