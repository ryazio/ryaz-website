import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="mobile-bottom-border"></div>

      <div className="right-container">
        <img className="nav-icon" src="nav-icon.svg" alt="" />
        <Link to="/method">
          <div className="right-nav">The Ryaz Method</div>
        </Link>
      </div>
      <div className="arrow">
        <div className="up">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
