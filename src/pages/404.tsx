import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="text-2xl leading-relaxed mt-4">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/" className="text-blue-500">
          Go home
        </Link>
        .
      </p>
    </Layout>
  );
};

export const Head = () => <title>Not found – LAVERGE</title>;

export default NotFoundPage;
