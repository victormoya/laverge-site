import React from 'react';
import { Social } from '../components';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center">
          <Social />
          <p>
            &copy; {new Date().getFullYear()} Carcosa Records. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
