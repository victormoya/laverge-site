import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
