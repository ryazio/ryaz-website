import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import SwiperCore, { FreeMode, Navigation } from 'swiper';

import { RyazLogo } from '../icons';
import { ContactForm, Layout } from '../components';
import { RyazPillar } from '../components/RyazPillar';
import { RyazActivity } from '../components/RyazActivity';

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
            <RyazPillar
              title="High Value"
              number="01"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one
                  comparing to all other dev agencies and providing an easy
                  and fulfilling experience plus value to our client."
            />
            <RyazPillar
              title="Empathy"
              number="03"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one
                  comparing to all other dev agencies and providing an easy
                  and fulfilling experience plus value to our client."
            />
          </div>
          <div className="pillar-line">
            <RyazPillar
              title="Craftmanship"
              number="02"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one
                  comparing to all other dev agencies and providing an easy
                  and fulfilling experience plus value to our client.
                  being the cheapest but the premium one
                  comparing to all other dev agencies and providing an easy
                  and fulfilling experience plus value to our client."
            />
            <RyazPillar
              title="Fun"
              number="04"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one
                  comparing to all other dev agencies and providing an easy
                  and fulfilling experience plus value to our client."
            />
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
          <RyazActivity
            title="#gracias"
            tagline="a place to thank, a place to feel grateful and show some love
              to the people in ryaz family"
            content="We have text channel named gracias, where we thank each other for helping,
              encouraging or whatever that person has done for you. If you have helped someone,
              he is going to thank you in front of all members and spread good vibes"
          />
          <RyazActivity
            title="#gaming"
            tagline="a channel having game links all the time, gaming
              updates and discussions going on."
            content=" If any member is free any time and doesn&apos;t want to work in that time span, he
              can play games and throw out the link here for anyone else to join.
              Everytime after we have a weekly call this channel is filled with gaming screenshots."
          />
          <RyazActivity
            title="#learning"
            tagline="a place for helping people learn, sharing stuff,
              seeking help, anytime, anywhere."
            content="As we believe in growing and learning, we have this channel calling learning and
              volunteering. We can post what we think can be useful to any team member and people
              also ask questions and clear doubts they have any in their work."
          />
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default RyazMethod;
