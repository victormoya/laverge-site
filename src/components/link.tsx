import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'gatsby';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export const Link: FC<LinkProps> = ({
  href,
  children,
  className,
  target,
  rel
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  const hoverStyles = 'hover:underline hover:text-red-700';

  if (isExternal) {
    return (
      <a
        href={href}
        className={className || hoverStyles}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={className || hoverStyles}>
      {children}
    </RouterLink>
  );
};
