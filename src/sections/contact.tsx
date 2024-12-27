import React from 'react';
import { Link, Section } from '../components';

export const ContactSection: React.FC = () => {
  return (
    <Section anchor="contact" title="Contact">
      <div className="mt-4 text-2xl flex flex-col gap-4">
        <span>Management & Booking</span>
        <span>Ignacio – Carcosa Records</span>
        <Link href="mailto:info@carcosarecords.com">
          info@carcosarecords.com
        </Link>
        <Link href="tel:+34670763759">+34 670 763 759</Link>
      </div>
    </Section>
  );
};
