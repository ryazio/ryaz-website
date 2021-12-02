import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundLogo from '../icons/BackgroundLogo';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="middle">
        <div className="background-logo">
          <BackgroundLogo />
        </div>

        <div className="tagline ff-brandon-bold">
          Tech Leadership that your startup deserves.
        </div>
        <div className="info ff-brandon">
          Ryaz builds, ships and launches your digital product with gaurantees
          on quality and performance.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
