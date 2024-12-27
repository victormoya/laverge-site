import React from 'react';
import Section from '../components/section';

const ContactSection: React.FC = () => {
  return (
    <Section anchor="contact" title="Contact">
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
    </Section>
  );
};

export default ContactSection;
