import React from 'react';
import { Link } from 'gatsby';

const MENU_ITEMS = [
  {
    label: 'Home',
    path: '/'
  },
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

const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-4 uppercase text-2xl md:text-3xl font-bold">
        {MENU_ITEMS.map(({ label, path, isLinkout }) => (
          <li key={path}>
            {isLinkout ? (
              <a href={path} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link to={path}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
