import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import '../styles/styles.scss';
import MiddleComponent from '../components/middleComponent';
import WorkComponent from '../components/workComponent';
import MethodComponent from '../components/methodComponent';

function Home() {
  return (
    <>
      <Router>
        <div class="container">
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

          <Routes>
            <Route path="/" element={<MiddleComponent />} />
            <Route path="/work" element={<WorkComponent />} />
            <Route path="/method" element={<MethodComponent />} />
          </Routes>
      
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
        </div>
      </Router>
    </>
  );
}

export default Home;
