import { HeadFC } from 'gatsby';
import React from 'react';
import Menu from './menu';
import Social from './social';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Menu></Menu>
      </header>
      <main>{children}</main>
      <footer>
        <Social></Social>
        <p>&copy; 2025 My Website</p>
      </footer>
    </>
  );
};

export default Layout;

export const Head: HeadFC = title => (
  <>
    <title>{`${title} — LAVERGE`}</title>
    <meta
      name="description"
      content="New Album: Who is there to beat the ego?"
    />
  </>
);
