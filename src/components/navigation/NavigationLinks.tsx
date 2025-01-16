import React from 'react';
import { NavLink } from './NavLink';

interface NavigationLinksProps {
  className?: string;
  isMobile?: boolean;
}

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/eat', label: 'Dónde comer' },
  { href: '/stay', label: 'Hoteles' },
  { href: '/activities', label: 'Que hacer?' },
  { href: '/places', label: 'Lugares' },
  { href: '/map', label: 'Mapa' },
];

const NavigationLinks: React.FC<NavigationLinksProps> = ({ className, isMobile }) => {
  return (
    <nav className={className}>
      {links.map(({ href, label }) => (
        <NavLink
          key={href}
          href={href}
          className={
            isMobile
              ? "block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationLinks;