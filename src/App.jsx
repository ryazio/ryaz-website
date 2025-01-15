import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
  useLocation,
} from 'react-router-dom';
import SwiperCore, { FreeMode, Navigation } from 'swiper';
import Home from './pages/Home';
import Work from './pages/Work';
import SingleProject from './pages/SingleProject';

// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/free-mode/free-mode.min.css';
// import 'swiper/modules/free-mode/free-mode.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
import './styles/index.scss';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import { MediaQueryProvider } from './hooks';
import { initializeGA } from './analytics';
import AnalyticsTracker from './components/AnalyticsTracker';
import { GA_MEASUREMENT_ID } from './config/enviornment';

SwiperCore.use([FreeMode, Navigation]);
function App() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      initializeGA(GA_MEASUREMENT_ID);
    }
  }, []);

  return (
    <MediaQueryProvider>
      <Router>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:name" element={<SingleProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </MediaQueryProvider>
  );
}

export default App;
