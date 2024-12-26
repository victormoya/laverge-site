import React from 'react';
import Menu from './menu';
import Social from './social';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container flex mx-auto px-4 flex-col min-h-screen">
      <header className="mt-6 flex justify-between flex-wrap gap-4">
        <Menu />
        <Social />
      </header>
      <main className="flex-grow text-center mt-20">{children}</main>
      <footer className="mt-auto p-6 space-y-4 flex flex-col items-center">
        <p>&copy; 2025 Carcosa Records</p>
      </footer>
    </div>
  );
};

export default Layout;
