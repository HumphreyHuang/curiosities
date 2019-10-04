import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';
import Photo from '../components/photo';

// TODO: Use apod apit

const Main = ({ data }) => (
    <Layout>
        <Photo data={data} />
        {/* <div>Astronomy Picture of the Day</div> */}
    </Layout>
);

Main.getInitialProps = async () => {
    const NASA_KEY = process.env.NASA_KEY;

    const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
    );
    const data = await res.json();

    return { data };
};

export default Main;
