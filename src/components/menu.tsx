import React from 'react';
import { Link } from './link';

const MENU_ITEMS = [
  {
    label: 'Tour',
    path: '#tour'
  },
  {
    label: 'Contact',
    path: '#contact'
  },
  {
    label: 'Shop',
    path: 'https://carcosarecords.bigcartel.com/'
  }
];

interface MenuProps {
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <nav>
      <ul className={className || 'flex gap-4 mt-10'}>
        {MENU_ITEMS.map(({ label, path }) => (
          <li key={path} className="uppercase text-4xl md:text-3xl font-bold">
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
