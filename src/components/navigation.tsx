import React, { useState } from 'react';
import { Menu } from './menu';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="z-20 uppercase text-2xl md:text-3xl font-bold md:hidden absolute top-4 right-4"
        onClick={toggleMenu}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div className="hidden md:block">
        <Menu />
      </div>
      {isOpen && (
        <div className="z-10 bg-white h-screen w-screen fixed top-0 left-0 flex items-center justify-center transition-opacity">
          <Menu className="flex flex-col text-center gap-10" />
        </div>
      )}
    </>
  );
};
