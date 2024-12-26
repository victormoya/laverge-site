import React from 'react';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg';
import { ReactComponent as YouTubeIcon } from '../icons/youtube.svg';
import { ReactComponent as SpotifyIcon } from '../icons/spotify.svg';
import { ReactComponent as BandcampIcon } from '../icons/bandcamp.svg';
import { ReactComponent as AppleIcon } from '../icons/apple.svg';

const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Lavergeband/',
    icon: FacebookIcon
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCoZ9-g-GvPzX52xxbkA6mmA',
    icon: YouTubeIcon
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/7GcUN4O1EbffUOAij7xzND',
    icon: SpotifyIcon
  },
  {
    name: 'Bandcamp',
    url: 'https://laverge.bandcamp.com/',
    icon: BandcampIcon
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/laverge/1299819253',
    icon: AppleIcon
  }
];

const Social: React.FC = () => {
  return (
    <ul className="flex gap-4 items-center">
      {socialMediaLinks.map(({ name, url, icon: Icon }) => (
        <li key={name}>
          <a href={url} title={name} target="_blank" rel="noopener noreferrer">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
