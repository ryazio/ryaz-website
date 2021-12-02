import React from 'react';
import '../styles/work.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkFrame from '../components/WorkFrame';

function Work() {
  return (
    <div className="container">
      <Header />
      <div className="work-container">
        <div className="work-tagline ff-brandon-light">
          We design, build and ship digital products on time with
          written guarantees on quality & performance
        </div>
        <div className="work-blocks">
          <WorkFrame />
          <WorkFrame />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
