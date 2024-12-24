import React from 'react';

const socialMediaLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com', icon: '📸' },
  { name: 'Facebook', url: 'https://www.facebook.com', icon: '🔵' },
  { name: 'Twitter', url: 'https://www.twitter.com', icon: '🐦' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: '🔗' }
];

const Social: React.FC = () => {
  return (
    <div>
      <ul>
        {socialMediaLinks.map((social, index) => (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.icon} {social.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
