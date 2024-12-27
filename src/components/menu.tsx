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
    path: 'https://carcosarecords.bigcartel.com/',
    isLinkout: true
  }
];

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-4 flex-wrap">
        {MENU_ITEMS.map(({ label, path }) => (
          <li key={path}>
            <Link
              href={path}
              className="uppercase text-2xl md:text-3xl font-bold hover:underline hover:text-red-700"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
