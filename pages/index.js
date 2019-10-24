import fetch from 'isomorphic-unfetch';

import Layout from '../lib/components/layout';
import ItemContainer from '../lib/components/item/item-container';
import { host } from '../lib/services/host';

const Main = ({ apodData }) => {
    return (
        <Layout>
            <ItemContainer data={apodData} />
        </Layout>
    );
};

Main.getInitialProps = async () => {
    let apodData = {};

    const NASA_KEY = process.env.NASA_KEY;

    try {
        const resApi = await fetch(`${host}/api/apod/get-today`);

        if (resApi.ok) {
            apodData = await resApi.json();
        } else {
            const resNasa = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
            );
            apodData = await resNasa.json();

            // Save API data to DB
            await fetch(`${host}/api/apod/save-today`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(apodData)
            });
        }
    } catch (e) {
        console.error(e);
    }

    return { apodData };
};

export default Main;
