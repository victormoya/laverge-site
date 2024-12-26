import * as React from 'react';
import Layout from '../components/layout';

const TourPage = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget-app.songkick.com/injector/8348243';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-semibold">Upcoming live shows</h1>
      <div className="mt-10 border-t border-b py-4">
        <a
          href="https://www.songkick.com/artists/8348243"
          className="songkick-widget"
          data-theme="light"
          data-track-button="on"
          data-detect-style="on"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
        ></a>
      </div>
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <title>Tour – LAVERGE</title>
    </>
  );
}

export default TourPage;
