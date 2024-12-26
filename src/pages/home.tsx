import React from 'react';
import Layout from '../components/layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          src="https://www.youtube.com/embed/aysl7h5wQow"
          title="Showdown"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home – LAVERGE</title>;

export default Home;
