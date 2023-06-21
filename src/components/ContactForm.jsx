import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import toast from 'react-hot-toast';

export const ContactForm = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, subject, name };
    axios.post('https://www.actionforms.io/e/r/ryaz-forms-endpoint', data, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        // console.log(response.data);
        toast.success('Form Submitted Successfully');
        setEmail('');
        setSubject('');
        setName('');
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`contact ${className}`.trim()}>
      <div id="contact-element" className="contact-tagline">Let’s make it happen.</div>
      <div className="contact-info">
        It doesn’t matter where you coming from, or any other aspect.
        If you are passionate about your work, we can’t wait to meet you.
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="primary-input"
            name="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            className="primary-input"
            name="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <textarea
          name="Message"
          className="primary-input primary-input--textarea"
          placeholder="Send us a message we’ll get back to you."
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          required
        />
        <button
          type="submit"
          className="primary-btn"
          disabled={loading}
        >
          {!loading ? 'Join Us Now' : 'Loading...'}
        </button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  className: PropTypes.string,
};
ContactForm.defaultProps = {
  className: '',
};
