import React from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({ className }) => (
  <div className={`contact ${className}`.trim()}>
    <div id="contact-element" className="contact-tagline">Let’s make it happen.</div>
    <div className="contact-info">
      It doesn’t matter where you coming from, or any other aspect.
      If you are passionate about your work, we can’t wait to meet you.
    </div>
    <form action="post">
      <div>
        <input
          type="text"
          className="primary-input"
          name="Name"
          placeholder="Name"
        />
        <input
          type="text"
          className="primary-input"
          name="Email"
          placeholder="Email"
        />
      </div>
      <textarea
        name="Message"
        className="primary-input primary-input--textarea"
        placeholder="Send us a message we’ll get back to you."
      />
      <button type="button" className="primary-btn">Join Us Now</button>
    </form>
  </div>
);
ContactForm.propTypes = {
  className: PropTypes.string,
};
ContactForm.defaultProps = {
  className: '',
};
