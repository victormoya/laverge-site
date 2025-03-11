import React from 'react';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { Link } from '../components';

export const Header: React.FC = () => (
  <header>
    <div className="flex justify-center h-10">
      <Link href="/" className="hover:text-red-700">
        <Logo />
      </Link>
    </div>
  </header>
);
