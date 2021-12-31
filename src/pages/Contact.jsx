/* eslint-disable max-len */
import React from 'react';
import { Layout } from '../components';

function Contact() {
  return (
    <Layout className="contact">
      <div className="max-width-container">
        <div className="container">
          <div className="content">
            <div className="tagline ff-brandon">
              Let’s make it happen.
            </div>
            <div className="info ff-brandon">
              It doesn’t matter where you coming from, or any other aspect. If you are passionate about your work, we can’t wait to meet you.
            </div>
            <form action="post" className="form">
              <div className="name-email">
                <input type="text" name="Name" id="Name" placeholder="Name" />
                <input type="text" name="Email" id="Email" placeholder="Email" />
              </div>
              <textarea name="Message" className="message ff-brandon" id="Message" placeholder="Send us a message we’ll get back to you." />
              <div className="send-msg">
                <input type="button" value="Send Message" className="send-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
