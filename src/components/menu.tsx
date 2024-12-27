import React from 'react';
import { Link } from 'gatsby';

const MENU_ITEMS = [
  // {
  //   label: 'Home',
  //   path: '/'
  // },
  {
    label: 'Tour',
    path: '/#tour'
  },
  {
    label: 'Shop',
    path: 'https://carcosarecords.bigcartel.com/',
    isLinkout: true
  },
  {
    label: 'Contact',
    path: '/#contact'
  }
];

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-4 flex-wrap">
        {MENU_ITEMS.map(({ label, path, isLinkout }) => (
          <li key={path} className="uppercase text-2xl md:text-3xl font-bold">
            {isLinkout ? (
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {label}
              </a>
            ) : (
              <Link to={path} className="hover:underline">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
