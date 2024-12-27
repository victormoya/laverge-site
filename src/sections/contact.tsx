import React from 'react';
import { Link, Section } from '../components';

export const ContactSection: React.FC = () => {
  return (
    <Section anchor="contact" title="Contact">
      <p className="mt-4 text-2xl leading-relaxed">
        Management & Booking
        <br />
        Ignacio – Carcosa Records
        <br />
        <Link
          href="mailto:info@carcosarecords.com"
          className="hover:underline hover:text-blue-700"
        >
          info@carcosarecords.com
        </Link>
        <br />
        <Link
          href="tel:+34670763759"
          className="hover:underline hover:text-blue-700"
        >
          +34 670 763 759
        </Link>
      </p>
    </Section>
  );
};
