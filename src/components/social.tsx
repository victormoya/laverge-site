import React from 'react';
import instagram from '../../static/media/icons/instagram.svg';
import facebook from '../../static/media/icons/facebook.svg';
import youtube from '../../static/media/icons/youtube.svg';
import spotify from '../../static/media/icons/spotify.svg';
import bandcamp from '../../static/media/icons/bandcamp.svg';
import apple from '../../static/media/icons/apple.svg';

const socialMediaLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/laverge_band/',
    icon: instagram
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Lavergeband/',
    icon: facebook
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCoZ9-g-GvPzX52xxbkA6mmA',
    icon: youtube
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/7GcUN4O1EbffUOAij7xzND',
    icon: spotify
  },
  {
    name: 'Bandcamp',
    url: 'https://laverge.bandcamp.com/',
    icon: bandcamp
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/laverge/1299819253',
    icon: apple
  }
];

const Social: React.FC = () => {
  return (
    <ul className="flex gap-4 items-center">
      {socialMediaLinks.map(({ name, url, icon }) => (
        <li key={name}>
          <a href={url} title={name} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
