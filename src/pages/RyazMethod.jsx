import React from 'react';
import {
  ContactForm, Layout, RyazPillar, RyazActivity,
} from '../components';
import { CardSlider, ShadowRyazLogo } from '../components/common';
import projectImage from '../images/projectImage.png';

const DATA = [
  {
    id: 1,
    image: projectImage,
  },
  {
    id: 2,
    image: projectImage,
  },
  {
    id: 3,
    image: projectImage,
  },
  {
    id: 4,
    image: projectImage,
  },
];

function RyazMethod() {
  return (
    <Layout className="ryaz-method">

      <div className="ryaz-method-home">
        <div className="ryaz-method-info">
          <h2>
            A
            <span> design-led </span>
            and
            <span> growth focussed </span>
            agency for companies that care.
          </h2>
          <p>
            We have certain core values defined and these are actually the four
            pillars that we stand on for our growth. These four pillars are clearly
            represented through our work.
          </p>
          <button className="primary-btn" type="button">Join us now</button>
          <ShadowRyazLogo className="ryaz-method-info-logo" />
        </div>
        <div className="ryaz-method-pillars">
          <div className="ryaz-method-pillars-line">
            <RyazPillar
              title="High Value"
              number="01"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
            />
            <RyazPillar
              title="Empathy"
              number="03"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
            />
          </div>
          <div className="ryaz-method-pillars-line">
            <RyazPillar
              title="Craftmanship"
              number="02"
              tagline="the quality of design and work shown in something made by hand."
              content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client. being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
            />
            <RyazPillar
              title="Fun"
              number="04"
              tagline="the quality of design and work shown in something made by hand."
              content=" We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
            />
          </div>
        </div>
      </div>
      <div className="ryaz-method-section">
        <h3>Our Team</h3>
        <p>Group of people that truly love each other</p>
        <CardSlider className="team-swiper" dataKey="id" data={DATA}>
          {({ image: img }) => (
            <>
              <img src={img} alt="sahib-pic" />
              <div className="team-swiper-info">
                <h2>Divyanshu Garg</h2>
                <p>Frontend Developer</p>
              </div>
            </>
          )}
        </CardSlider>
      </div>
      <div className="ryaz-method-section activities">
        <h3>Our activities</h3>
        <p>What makes us different?</p>
        <div className="activities-block">
          <RyazActivity
            title="#gracias"
            tagline="a place to thank, a place to feel grateful and show some love to the people in ryaz family"
            content="We have text channel named gracias, where we thank each other for helping, encouraging or whatever that person has done for you. If you have helped someone, he is going to thank you in front of all members and spread good vibes"
          />
          <RyazActivity
            title="#gaming"
            tagline="a channel having game links all the time, gaming updates and discussions going on."
            content=" If any member is free any time and doesn&apos;t want to work in that time span, he can play games and throw out the link here for anyone else to join. Everytime after we have a weekly call this channel is filled with gaming screenshots."
          />
          <RyazActivity
            title="#learning"
            tagline="a place for helping people learn, sharing stuff, seeking help, anytime, anywhere."
            content="As we believe in growing and learning, we have this channel calling learning and volunteering. We can post what we think can be useful to any team member and people also ask questions and clear doubts they have any in their work."
          />
        </div>
      </div>
      <ContactForm className="ryaz-method-contact" />
    </Layout>
  );
}

export default RyazMethod;
