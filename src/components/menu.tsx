import React from 'react';
import { Link } from 'gatsby';

const Menu: React.FC = () => {
  const items = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'Tour',
      link: '/tour'
    },
    {
      label: 'Contact',
      link: '/contact'
    }
  ];

  return (
    <nav>
      <ul className="flex gap-4 uppercase text-xl font-bold font-serif">
        {items.map(({ label, link }) => (
          <li key="label">
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
