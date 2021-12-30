import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import SingleProject from './pages/SingleProject';
import 'swiper/swiper.min.css';
// import 'swiper/modules/free-mode/free-mode.min.css';
// import 'swiper/modules/navigation/navigation.min.css';

import './styles/styles.scss';
import RyazMethod from './pages/RyazMethod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:name" element={<SingleProject />} />
        <Route path="/ryaz-method" element={<RyazMethod />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
