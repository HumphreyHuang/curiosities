import fetch from 'isomorphic-unfetch';

import Layout from '../lib/components/layout';
import ItemContainer from '../lib/components/item-container';
import { host } from '../lib/services/host';

const Main = ({ apodData }) => {
    return apodData ? (
        <Layout>
            <ItemContainer apodData={apodData} />
        </Layout>
    ) : (
        'Loading...'
    );
};

Main.getInitialProps = async ({ req }) => {
    let apodData = {};

    const NASA_KEY = process.env.NASA_KEY;

    try {
        const resApi = await fetch(`${host(req)}/api/apod/get-today`);

        if (resApi.ok) {
            apodData = await resApi.json();
        } else {
            const resNasa = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
            );
            const apodDataRaw = await resNasa.json();

            // Save API data to DB
            const saved = await fetch(`${host(req)}/api/apod/save-today`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(apodDataRaw)
            });

            apodData = await saved.json();
        }
    } catch (e) {
        console.error(e);
    }

    return { apodData };
};

export default Main;
