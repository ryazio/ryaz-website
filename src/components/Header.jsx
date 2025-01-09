import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RyazLogo, NavIcon, CrossIcon } from '../icons';
import { ArrowButton } from './common';

export const Header = ({ className, isOpen, setIsOpen }) => {
  const location = useLocation();
  const LINKS = [
    {
      title: 'HOME',
      url: '/',
    },
    {
      title: 'OUR WORK',
      url: '/work',
    },
    {
      title: 'ABOUT US',
      url: '/about',
    },
    {
      title: 'CONTACT',
      url: '/contact',
    },
    {
      title: 'BLOG',
      url: 'https://webdioxide.com',
    },
    {
      title: 'HIRE US',
      url: '/contact',
    }];

  return (
    <header className={className}>
      <Link aria-label="Ryaz logo" className="header-logo" to="/" onClick={() => { if (isOpen) setIsOpen(false); }}>
        <RyazLogo />
      </Link>
      <div className="header-mobile-view">
        {!isOpen
          ? (<NavIcon className="header-burger" onClick={setIsOpen} />)
          : (
            <ArrowButton
              className="header-close"
              onClick={setIsOpen}
              Icon={CrossIcon}
            />
          )}
      </div>
      <div className="header-desktop-view">
        {LINKS.map(({ title, url }) => (
          <div key={title} className={`header-desktop-view-link ${location.pathname === url || (url === '/home' && location.pathname === '/') ? 'active' : ''}`}>
            <a href={url}>{title}</a>
          </div>
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
Header.defaultProps = {
  className: '',
  isOpen: false,
  setIsOpen: () => { },
};
