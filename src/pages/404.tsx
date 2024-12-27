import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Social from '../components/social';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="text-2xl leading-relaxed mt-4">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/" className="text-blue-500">
          Go home
        </Link>
        .
      </p>
      <footer className="mt-auto p-6 space-y-4 flex flex-col items-center">
        <Social />
        <p>&copy; 2025 Carcosa Records</p>
      </footer>
    </main>
  );
};

export const Head: HeadFC = () => <title>Not found – LAVERGE</title>;

export default NotFoundPage;
