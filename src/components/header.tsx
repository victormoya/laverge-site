import React from 'react';
import { Menu } from './menu';
import { Social } from './social';

export const Header: React.FC = () => (
  <header className="mt-10 flex justify-center md:justify-between items-center">
    <Menu />
    <div className="hidden md:block">
      <Social />
    </div>
  </header>
);
