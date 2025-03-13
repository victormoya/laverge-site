import React from 'react';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { Link } from '../components';

export const Header: React.FC = () => (
  <header>
    <div className="flex justify-center h-10">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  </header>
);
