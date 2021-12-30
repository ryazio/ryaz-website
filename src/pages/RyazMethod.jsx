import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RyazMethod() {
  return (
    <>
      <Header />
      <div className="ryaz-method">
        <div className="info">
          <div>
            <h1>
              A
              <span className="highlight-grn"> design-led </span>
              and
              <span className="highlight-grn"> growth focussed </span>
              agency for companies that care.
            </h1>
            <p>
              We have certain core values defined and these ate actually the four
              pillars that we stand on for our growth. These four pillars are clearly
              represented through our work.
            </p>
            <button className="ff-brandon" type="button">Join us now</button>
          </div>
        </div>
        <div className="ryaz-pillars">
          <div className="pillar">
            <div className="pillar-info">
              <h2>High Value</h2>
              <p className="ff-brandon-bold">01</p>
            </div>
            <div className="pillar-description">
              <p>the quality of design and work shown in something made by hand.</p>
              <p>
                We believe in not being the cheapest but the premium one
                comparing to all other dev agencies and providing an easy
                and fulfilling experience plus value to our client.
              </p>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-info">
              <h2>Craftsmanship</h2>
              <p className="ff-brandon-bold">02</p>
            </div>
            <div className="pillar-description">
              <p>the quality of design and work shown in something made by hand.</p>
              <p>
                We believe in not being the cheapest but the premium one comparing
                to all other dev agencies and providing an easy and fulfilling experience
                plus value to our client. We believe in not being the cheapest but the premium
                one comparing to all other dev agencies and providing an easy and fulfilling
                experience plus value to our client.
              </p>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-info">
              <h2>High Value</h2>
              <p className="ff-brandon-bold">03</p>
            </div>
            <div className="pillar-description">
              <p>the quality of design and work shown in something made by hand.</p>
              <p>
                We believe in not being the cheapest but the premium one comparing to
                all other dev agencies and providing an easy and fulfilling experience
                plus value to our client. dev agencies and providing an easy and
                fulfilling experience plus value to our client.
              </p>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-info">
              <h2>High Value</h2>
              <p className="ff-brandon-bold">04</p>
            </div>
            <div className="pillar-description">
              <p>the quality of design and work shown in something made by hand.</p>
              <p>
                We believe in not being the cheapest but the premium one comparing
                to all other dev agencies and providing an easy.comparing to all
                other dev agency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RyazMethod;
