import '../styles/styles.scss';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="mobile-bottom-border"></div>

          <div class="right-container">
            <img class="nav-icon" src="nav-icon.svg" alt="" />
            <Link to="/method"><div class="right-nav">The Ryaz Method</div></Link>
          </div>
          <div class="arrow">
            <div class="up">
              <div class="left"></div><div class="right"></div>
            </div>
            <div class="up-shadow">
              <div class="ellipse"></div>
              <div class="logo-shadow">
                <div class="left"></div><div class="right"></div>
              </div>
            </div>
          </div>
      </>
  )
}

export default Footer;