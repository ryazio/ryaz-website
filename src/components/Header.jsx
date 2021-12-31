import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo, NavIcon, CrossIcon } from '../icons';

export const Header = ({ className, isOpen, setIsOpen }) => (
  <header className={className}>
    <Link className="header-logo" to="/">
      <RyazLogo />
    </Link>
    {!isOpen
      ? (<NavIcon className="header-burger" onClick={setIsOpen} />)
      : (
        <button
          type="button"
          className="header-close"
          onClick={setIsOpen}
        >
          <CrossIcon />
        </button>
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
