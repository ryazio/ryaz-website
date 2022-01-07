import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo, NavIcon, CrossIcon } from '../icons';
import { ArrowButton } from './common';

export const Header = ({ className, isOpen, setIsOpen }) => (
  <header className={className}>
    <Link className="header-logo" to="/">
      <RyazLogo />
    </Link>
    {!isOpen
      ? (<NavIcon className="header-burger" onClick={setIsOpen} />)
      : (
        <ArrowButton
          className="header-close"
          onClick={setIsOpen}
          Icon={CrossIcon}
        />
      )}
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
Header.defaultProps = {
  className: '',
  isOpen: false,
  setIsOpen: () => {},
};
