/* eslint-disable max-len */
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ContactForm, Layout } from '../components';

function Contact() {
  return (
    <Layout className="contact-page">
      <ContactForm className="contact-page-form" />
      <div>
        <Toaster />
      </div>
    </Layout>
  );
}

export default Contact;
