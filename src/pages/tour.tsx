import * as React from 'react';
import Layout from '../components/layout';

const TourPage = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    // script.src = '//widget-app.songkick.com/injector/8348243';
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <a
        className="bit-widget-initializer"
        data-artist-name="id_11169394"
        data-events-to-display=""
        data-background-color="rgba(255,255,255,0)"
        data-separator-color="rgba(221,221,221,1)"
        data-text-color="rgba(127,111,77,1)"
        data-font="EB Garamond"
        data-auto-style="true"
        data-button-label-capitalization="uppercase"
        data-header-capitalization="uppercase"
        data-location-capitalization="capitalize"
        data-venue-capitalization="uppercase"
        data-display-local-dates="false"
        data-local-dates-position="aboveUpcoming"
        data-display-past-dates="false"
        data-display-details="true"
        data-display-lineup="true"
        data-display-start-time="true"
        data-social-share-icon="false"
        data-display-limit="all"
        data-date-format="MMM DD YYYY"
        data-date-orientation="vertical"
        data-date-border-color="#4A4A4A"
        data-date-border-width="0px"
        data-date-capitalization="capitalize"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="small"
        data-event-custom-ticket-text=""
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="rgba(127,111,77,1)"
        data-event-ticket-cta-bg-color="rgba(255,255,255,0)"
        data-event-ticket-cta-border-color="rgba(127,111,77,1)"
        data-event-ticket-cta-border-width="2px"
        data-event-ticket-cta-border-radius="0px"
        data-sold-out-button-text-color="rgba(255,255,255,1)"
        data-sold-out-button-background-color="rgba(127,111,77,1)"
        data-sold-out-button-border-color="rgba(127,111,77,1)"
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="right"
        data-event-rsvp-cta-size="small"
        data-event-rsvp-only-show-icon="false"
        data-event-rsvp-text="RSVP"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="rgba(127,111,77,1)"
        data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
        data-event-rsvp-cta-border-color="rgba(127,111,77,1)"
        data-event-rsvp-cta-border-width="2px"
        data-event-rsvp-cta-border-radius="0px"
        data-follow-section-position="hidden"
        data-follow-section-alignment="left"
        data-follow-section-header-text=""
        data-follow-section-cta-size="small"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="false"
        data-follow-section-cta-text-color="rgba(127,111,77,1)"
        data-follow-section-cta-bg-color="rgba(74,74,74,0)"
        data-follow-section-cta-border-color="rgba(127,111,77,1)"
        data-follow-section-cta-border-width="2px"
        data-follow-section-cta-border-radius="0px"
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="center"
        data-play-my-city-header-text="Wanna see us?"
        data-play-my-city-cta-size="small"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="false"
        data-play-my-city-cta-text-color="rgba(127,111,77,1)"
        data-play-my-city-cta-bg-color="rgba(0,0,0,0)"
        data-play-my-city-cta-border-color="rgba(127,111,77,1)"
        data-play-my-city-cta-border-width="2px"
        data-play-my-city-cta-border-radius="0px"
        data-optin-font=""
        data-optin-text-color=""
        data-optin-bg-color=""
        data-optin-cta-text-color=""
        data-optin-cta-bg-color=""
        data-optin-cta-border-width=""
        data-optin-cta-border-radius=""
        data-optin-cta-border-color=""
        data-language="en"
        data-layout-breakpoint="900"
        data-app-id=""
        data-affil-code=""
        data-bit-logo-position="hidden"
        data-bit-logo-color="rgba(127,111,77,1)"
      />
    </Layout>
  );
};

export const Head = () => <title>Tour – LAVERGE</title>;

export default TourPage;
