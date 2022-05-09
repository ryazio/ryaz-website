import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  ContactForm, Layout, RyazPillar, RyazActivity,
} from '../components';
import { CardSlider, ShadowRyazLogo } from '../components/common';
import { employeeImageMapper } from '../contants';
import employees from '../json/employees.json';
import { RyazLogo } from '../icons';

function RyazMethod() {
  const [isDesktopSizeWindow, setIsDesktopSizeWindow] = useState(window.innerWidth > 768);
  const resizeHandler = () => {
    if (window.innerWidth > 768 && !isDesktopSizeWindow) {
      setIsDesktopSizeWindow(true);
    } else if (window.innerWidth < 768 && isDesktopSizeWindow) {
      setIsDesktopSizeWindow(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    window.onresize = resizeHandler;
  }, []);
  const scrollToContact = () => {
    document?.getElementById('contact-element')?.scrollIntoView();
  };
  return (
    <Layout className="about">

      <div className="about-home">
        <div className="about-info">
          <h2>
            A
            <span> design-led </span>
            and
            <span> growth focused </span>
            agency for companies that care.
          </h2>
          <p>
            We have certain core values defined and these are actually the four
            pillars that we stand on for our growth. These four pillars are clearly
            represented through our work.
          </p>
          <button onClick={scrollToContact} className="primary-btn" type="button">Join us now</button>
          {/* <ShadowRyazLogo className="about-info-logo" /> */}
        </div>
        <div className="about-pillars">
          <div className="about-pillars-line">
            <RyazPillar
              title="High Value"
              tagline="the quality of design and work shown in something made by hand."
              number="01"
              content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
            />
            {
              (isDesktopSizeWindow)
                ? (
                  <RyazPillar
                    title="Empathy"
                    tagline="the quality of design and work shown in something made by hand."
                    number="03"
                    content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client. dev agencies and providing an easy and fulfilling experience plus value to our client."
                  />
                ) : (
                  <RyazPillar
                    title="Craftmanship"
                    tagline="the quality of design and work shown in something made by hand."
                    number="02"
                    content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client. We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
                  />
                )
            }
          </div>
          <div className="about-pillars-line">
            {
              (isDesktopSizeWindow)
                ? (
                  <RyazPillar
                    title="Craftmanship"
                    tagline="the quality of design and work shown in something made by hand."
                    number="02"
                    content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client. We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client."
                  />
                ) : (
                  <RyazPillar
                    title="Empathy"
                    tagline="the quality of design and work shown in something made by hand."
                    number="03"
                    content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy and fulfilling experience plus value to our client. dev agencies and providing an easy and fulfilling experience plus value to our client."
                  />
                )
            }
            <RyazPillar
              title="Fun"
              tagline="the quality of design and work shown in something made by hand."
              number="04"
              content="We believe in not being the cheapest but the premium one comparing to all other dev agencies and providing an easy.comparing to all other dev agency."
            />
          </div>
        </div>
      </div>
      <div className="top">
        <div className="Ryaz-arrow-logo">
          <RyazLogo />
        </div>
      </div>
      <div className="about-section">
        <h3>Our Team</h3>
        <p>A group of people that truly care for each other</p>
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
        <h3>Know More</h3>
        <p>What makes us better as a company ?</p>
        <div className="activities-block">
          <RyazActivity
            title="#gracias"
            tagline="A place to express your gratitude towards the people who are always ready to help."
            content="We have text channel named gracias, where we thank each other for helping, encouraging or whatever that person has done for you. If you have helped someone, he is going to thank you in front of all members and spread good vibes"
          />
          <RyazActivity
            title="#gaming"
            tagline="A place to enjoy, relax and show the gaming ninja in you."
            content=" If any member is free any time and doesn&apos;t want to work in that time span, he can play games and throw out the link here for anyone else to join. Everytime after we have a weekly call this channel is filled with gaming screenshots."
          />
          <RyazActivity
            title="#learning"
            tagline="A place for helping people learn, sharing stuff, seeking help, anytime, anywhere."
            content="We aim high, always learning to understand every novelty from the world of technology. We&apos;re always ready to help everyone with the best of our knowledge. We welcome new challenges and are always ready to solve them."
          />
        </div>
      </div>
      <ContactForm className="about-contact" />
      <div>
        <Toaster />
      </div>
    </Layout>
  );
}

export default RyazMethod;
