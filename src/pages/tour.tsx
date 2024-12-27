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

  const colors = {
    gold: 'rgba(127,111,77,1)',
    transparent: 'rgba(255,255,255,0)',
    white: 'rgba(255,255,255,0)',
    grey: 'rgba(221,221,221,1)'
  };

  const button = {
    borderWidth: '2px',
    borderRadius: '0px'
  };

  return (
    <Layout>
      <a
        className="bit-widget-initializer"
        data-artist-name="id_11169394"
        data-events-to-display=""
        data-background-color={colors.transparent}
        data-separator-color={colors.grey}
        data-text-color={colors.gold}
        data-font="EB Garamond"
        data-auto-style="true"
        data-button-label-capitalization="uppercase"
        data-header-capitalization="uppercase"
        data-location-capitalization="capitalize"
        data-venue-capitalization="uppercase"
        data-display-local-dates="false"
        data-local-dates-position="aboveUpcoming"
        data-display-past-dates="false"
        data-display-details="false"
        data-display-lineup="true"
        data-display-start-time="true"
        data-social-share-icon="false"
        data-display-limit="all"
        data-date-format="MMM DD YYYY"
        data-date-orientation="vertical"
        data-date-border-color={colors.gold}
        data-date-border-width="0px"
        data-date-capitalization="capitalize"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="small"
        data-event-custom-ticket-text=""
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color={colors.gold}
        data-event-ticket-cta-bg-color={colors.transparent}
        data-event-ticket-cta-border-color={colors.gold}
        data-event-ticket-cta-border-width={button.borderWidth}
        data-event-ticket-cta-border-radius={button.borderRadius}
        data-sold-out-button-text-color={colors.white}
        data-sold-out-button-background-color={colors.gold}
        data-sold-out-button-border-color={colors.gold}
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="right"
        data-event-rsvp-cta-size="small"
        data-event-rsvp-only-show-icon="false"
        data-event-rsvp-text="RSVP"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color={colors.gold}
        data-event-rsvp-cta-bg-color={colors.transparent}
        data-event-rsvp-cta-border-color={colors.gold}
        data-event-rsvp-cta-border-width={button.borderWidth}
        data-event-rsvp-cta-border-radius={button.borderRadius}
        data-follow-section-position="hidden"
        data-follow-section-alignment="left"
        data-follow-section-header-text=""
        data-follow-section-cta-size="small"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="false"
        data-follow-section-cta-text-color={colors.gold}
        data-follow-section-cta-bg-color={colors.transparent}
        data-follow-section-cta-border-color={colors.gold}
        data-follow-section-cta-border-width={button.borderWidth}
        data-follow-section-cta-border-radius={button.borderRadius}
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="center"
        data-play-my-city-header-text="Wanna see us?"
        data-play-my-city-cta-size="small"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="false"
        data-play-my-city-cta-text-color={colors.gold}
        data-play-my-city-cta-bg-color={colors.transparent}
        data-play-my-city-cta-border-color={colors.gold}
        data-play-my-city-cta-border-width={button.borderWidth}
        data-play-my-city-cta-border-radius={button.borderRadius}
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
        data-bit-logo-color={colors.gold}
      />
    </Layout>
  );
};

export const Head = () => <title>Tour – LAVERGE</title>;

export default TourPage;
