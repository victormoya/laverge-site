import React from 'react';
import { Section } from '../components';

export const ContactSection: React.FC = () => {
  return (
    <Section anchor="contact" title="Contact">
      <p className="mt-4 text-2xl leading-relaxed">
        Management & Booking
        <br />
        Ignacio – Carcosa Records
        <br />
        <a
          href="mailto:info@carcosarecords.com"
          className="hover:text-gray-500"
        >
          info@carcosarecords.com
        </a>
        <br />
        <a href="tel:+34670763759" className="hover:text-gray-500">
          +34 670 763 759
        </a>
      </p>
      {/* 💡 Add a contact form to send emails to lavergeband@gmail.com */}
    </Section>
  );
};
