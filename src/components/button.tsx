import React from 'react';
import { Link } from 'gatsby';

const EnterSiteButton = () => {
  return (
    <Link
      to="/home/"
      className="inline-block px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      Enter site
    </Link>
  );
};

export default EnterSiteButton;
