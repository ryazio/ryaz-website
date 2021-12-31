import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { SocialLinks } from './common';

export const Menu = ({ isOpen, setIsOpen }) => (
  isOpen && ReactDOM.createPortal(
    <nav className="menu">
      <Header isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <section className="menu-body">
        <div>
          <Link to="/">Home</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/ryaz-method">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
      <section className="menu-footer">
        <SocialLinks />
      </section>
    </nav>,
    document.body,
  )
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
Menu.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
};
