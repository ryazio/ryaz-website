import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/SideHeader';
import Footer from '../components/SideFooter';
import MovingLogo from '../icons/MovingLogo';

function Menu() {
  return (
    <>
      <Header />
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/ryaz-method">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="menu-footer" />
      <MovingLogo />
    </>

  );
}

export default Menu;
