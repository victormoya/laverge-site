import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { Footer } from '../components';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="h-[500px] my-auto text-center">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="text-2xl leading-relaxed mt-4">
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link to="/" className="text-blue-500">
            Go home
          </Link>
          .
        </p>
      </div>
      <Footer />
    </main>
  );
};

export const Head: HeadFC = () => <title>Not found – LAVERGE</title>;

export default NotFoundPage;
