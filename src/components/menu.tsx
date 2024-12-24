import React from 'react';
import { Link } from 'gatsby';

const Menu: React.FC = () => {
  const items = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Tour',
      link: '/tour'
    },
    {
      label: 'Music',
      link: '/music'
    },
    {
      label: 'Video',
      link: '/video'
    },
    {
      label: 'About',
      link: '/about'
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
