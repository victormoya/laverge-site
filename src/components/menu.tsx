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
    <nav className="menu">
      <ul className="menu-list">
        {items.map(({ label, link }) => (
          <li className="menu-item" key="label">
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
