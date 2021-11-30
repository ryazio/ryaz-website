import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import '../styles/styles.scss';

function Header() {
  return (
    <>
      <div class="left-container">
          <Link to="/">
            <div class="logo">
              <div class="left box"></div><div class="right box"></div>
            </div>
          </Link>

          <Link to="/work">
            <div class="left-nav">Our Work</div>
          </Link>
      </div>
  
      <div class="top-container">
        <div class="logo">
          <div class="left"></div><div class="right"></div>
        </div>
        <img class="nav-icon" src="nav-icon.svg" alt=""></img>
      </div>
    </>
  )
}

export default Header;