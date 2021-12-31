import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingRyazLogo } from '../icons';
import { ShadowRyazLogo } from './common';
import { Menu } from './Menu';

export const Layout = ({
  className, children, noFooter, isShadowLogo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={() => setIsOpen(true)} />
      <main className={className}>
        {children}
      </main>
      {!noFooter && <Footer />}
      <FloatingRyazLogo />
      {isShadowLogo && <ShadowRyazLogo />}
      <Menu isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
    </>
  );
};
Layout.propTypes = {
  className: PropTypes.string,
  noFooter: PropTypes.bool,
  isShadowLogo: PropTypes.bool,
};
Layout.defaultProps = {
  className: '',
  noFooter: false,
  isShadowLogo: false,
};
