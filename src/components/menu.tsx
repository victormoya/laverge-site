import React from 'react';
import { Link } from 'gatsby';

const MENU_ITEMS = [
  {
    label: 'Home',
    path: '/home/'
  },
  {
    label: 'Tour',
    path: '/tour/'
  },
  {
    label: 'Contact',
    path: '/contact/'
  }
];

const Menu: React.FC = () => {
  const [activePath, setActivePath] = React.useState<string>('/home/');

  React.useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <nav>
      <ul className="flex gap-4 uppercase text-2xl md:text-3xl font-bold">
        {MENU_ITEMS.map(({ label, path }) => (
          <li
            key={path}
            className={activePath === path ? 'underline' : undefined}
          >
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
