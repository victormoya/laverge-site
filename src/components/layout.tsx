import { HeadFC } from 'gatsby';
import React from 'react';
import Menu from './menu';
import Social from './social';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen">
      <header className="mt-4 flex justify-between">
        <Menu />
        <Social />
      </header>
      <main className="flex-grow mt-10">{children}</main>
      <footer className="mt-auto p-4 space-y-4 flex flex-col items-center">
        <Social />
        <p>&copy; 2025 Carcosa Records</p>
      </footer>
    </div>
  );
};

export default Layout;
