import React from 'react';
import Layout from '../components/layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 text-2xl leading-relaxed">
        Management & Booking
        <br />
        Ignacio – Carcosa Records
        <br />
        <a href="mailto:info@carcosarecords.com">info@carcosarecords.com</a>
        <br />
        <a href="tel:+34670763759">+34 670 763 759</a>
      </p>
      {/* 💡 Add a contact form to send emails to lavergeband@gmail.com */}
    </Layout>
  );
};

export const Head = () => <title>Contact – LAVERGE</title>;

export default ContactPage;
