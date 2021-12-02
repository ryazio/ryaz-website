import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="left-container">
        <Link to="/">
          <div className="logo">
            <div className="left box"></div>
            <div className="right box"></div>
          </div>
        </Link>

        <Link to="/work">
          <div className="left-nav">Our Work</div>
        </Link>
      </div>

      <div className="top-container">
        <div className="logo">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <img className="nav-icon" src="nav-icon.svg" alt=""></img>
      </div>
    </>
  );
}

export default Header;
