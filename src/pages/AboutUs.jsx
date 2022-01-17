import React from 'react';
import {
  ContactForm, Layout, RyazPillar, RyazActivity,
} from '../components';
import { CardSlider, ShadowRyazLogo } from '../components/common';
import { employeeImageMapper } from '../contants';
import employees from '../json/employees.json';

function RyazMethod() {
  const scrollToContact = () => {
    document.getElementById('contact-element').scrollIntoView();
  };
  return (
    <Layout className="about">

      <div className="about-home">
        <div className="about-info">
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
          <button onClick={scrollToContact} className="primary-btn" type="button">Join us now</button>
          <ShadowRyazLogo className="about-info-logo" />
        </div>
        <div className="about-pillars">
          <div className="about-pillars-line">
            <RyazPillar
              title="High Value"
              number="01"
              content=" We believe in not being the cheapest but the premium one and providing an easy and fulfilling experience plus value to our client."
            />
            <RyazPillar
              title="Empathy"
              number="03"
              content="We are able to establish an environment where we understand and share the feeling of not just our colleagues but our customers and clients too."
            />
          </div>
          <div className="about-pillars-line">
            <RyazPillar
              title="Craftmanship"
              number="02"
              content="We encourage the practice of excellence in building and delivering superior products crafted by our team of experts."
            />
            <RyazPillar
              title="Fun"
              number="04"
              content="And our favourite part - Fun. We play a lot of games, chit chat, laugh and sometimes flirt too. We believe it enhances our creativity and communication."
            />
          </div>
        </div>
      </div>
      <div className="about-section">
        <h3>Our Team</h3>
        <p>Group of people that truly love each other</p>
        <CardSlider className="team-swiper" dataKey="id" data={employees}>
          {(employee) => (
            <>
              <img src={employeeImageMapper(employee.id)} alt={employee.name} />
              <div className="team-swiper-info">
                <h2>{employee.name}</h2>
                <p>{employee.designation}</p>
              </div>
            </>
          )}
        </CardSlider>
      </div>
      <div className="about-section activities">
        <h3>Join us</h3>
        <p>Join our learn via play space</p>
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
      <ContactForm className="about-contact" />
    </Layout>
  );
}

export default RyazMethod;
