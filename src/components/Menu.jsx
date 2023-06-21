import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { SocialLinks } from './common';
import { FloatingRyazLogo } from '../icons';

export const Menu = ({ isOpen, setIsOpen }) => (
  (isOpen && ReactDOM.createPortal(
    <nav className="menu">
      <Header isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <section className="menu-body">
        <div>
          <Link onClick={() => { if (isOpen) setIsOpen(false); }} to="/">Home</Link>
          <Link onClick={() => { if (isOpen) setIsOpen(false); }} to="/work">Our Work</Link>
          <Link onClick={() => { if (isOpen) setIsOpen(false); }} to="/about">About Us</Link>
          <Link onClick={() => { if (isOpen) setIsOpen(false); }} to="/contact">Contact</Link>
        </div>
      </section>
      <FloatingRyazLogo />
      <section className="menu-footer">
        <SocialLinks />
      </section>
    </nav>,
    document.body,
  ))
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
Menu.defaultProps = {
  isOpen: false,
  setIsOpen: () => { },
};
