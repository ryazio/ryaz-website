import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingRyazLogo } from '../icons';
import { ShadowRyazLogo } from './common';

export const Layout = ({
  className, children, noFooter, isShadowLogo,
}) => (
  <>
    <Header />
    <main className={className}>
      {children}
    </main>
    {!noFooter && <Footer />}
    <FloatingRyazLogo />
    {isShadowLogo && <ShadowRyazLogo />}
  </>
);

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
