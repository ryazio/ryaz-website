import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import SwiperCore, { FreeMode, Navigation } from 'swiper';

import { RyazLogo } from '../icons';
import { ContactForm, Layout } from '../components';

SwiperCore.use([FreeMode, Navigation]);

const image = 'https://cdn.discordapp.com/attachments/664914752648118292/926083345220272149/unknown.png';

function RyazMethod() {
  return (
    <Layout className="ryaz-method">

      <div>
        <div className="info">
          <div>
            <h2>
              A
              <span className="highlighted-txt"> design-led </span>
              and
              <span className="highlighted-txt"> growth focussed </span>
              agency for companies that care.
            </h2>
            <p>
              We have certain core values defined and these are actually the four
              pillars that we stand on for our growth. These four pillars are clearly
              represented through our work.
            </p>
            <button className="primary-btn" type="button">Join us now</button>
          </div>
        </div>
        <div className="arrow-with-shadow">
          <div className="arrow">
            <RyazLogo />
          </div>
          <div className="ellipse" />
        </div>
        <div className="ryaz-pillars">
          <div className="pillar-line">
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
                <h2>Empathy</h2>
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
          </div>
          <div className="pillar-line">

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
                  plus value to our client.
                  to all other dev agencies and providing an easy and fulfilling experience
                  plus value to our client.
                </p>
              </div>
            </div>

            <div className="pillar">
              <div className="pillar-info">
                <h2>Fun</h2>
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
      </div>

      <div className="team-showcase">
        <h3>Our Team</h3>
        <p className="team-tagline">Group of people that truly love each other</p>
        <Swiper
          className="team-swiper"
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '1rem',
          }}
          slidesPerView="auto"
          spaceBetween={0}
          centeredSlides
          navigation
          loop
        >
          {Object.keys([...new Array(10)]).map((key) => (
            <SwiperSlide key={key}>
              <img src={image} alt="sahib-pic" />
              <div />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="activities">
        <h3>Our activities</h3>
        <p className="activities-tagline">What makes us different?</p>
        <div className="activity-types">
          <div className="activity">
            <div className="top-cover-bar" />
            <h4>#gracias</h4>
            <p className="activity-tagline">
              a place to thank, a place to feel grateful and show some love
              to the people in ryaz family
            </p>
            <p className="activity-detail">
              We have text channel named gracias, where we thank each other for helping,
              encouraging or whatever that person has done for you. If you have helped someone,
              he is going to thank you in front of all members and spread good vibes
            </p>
          </div>
          <div className="activity">
            <div className="top-cover-bar" />
            <h4>#gaming</h4>
            <p className="activity-tagline">
              a channel having game links all the time, gaming
              updates and discussions going on.
            </p>
            <p className="activity-detail">
              If any member is free any time and doesn&apos;t want to work in that time span, he
              can play games and throw out the link here for anyone else to join.
              Everytime after we have a weekly call this channel is filled with gaming screenshots.
            </p>
          </div>
          <div className="activity">
            <div className="top-cover-bar" />
            <h4>#learning</h4>
            <p className="activity-tagline">
              a place for helping people learn, sharing stuff,
              seeking help, anytime, anywhere.
            </p>
            <p className="activity-detail">
              As we believe in growing and learning, we have this channel calling learning and
              volunteering. We can post what we think can be useful to any team member and people
              also ask questions and clear doubts they have any in their work.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default RyazMethod;
