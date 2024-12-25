import React from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  text: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="inline-block px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      {text}
    </Link>
  );
};

export default Button;
