import fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';
import Photo from '../components/photo';

const Main = ({ apodData }) => {
    return (
        <Layout>
            <Photo data={apodData} />
        </Layout>
    );
};

Main.getInitialProps = async () => {
    const NASA_KEY = process.env.NASA_KEY;
    let apodData = {};

    try {
        const resApi = await fetch('http://localhost:3000/api/apod/get-today');

        if (resApi.ok) {
            apodData = await resApi.json();
        } else {
            const resNasa = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
            );
            apodData = await resNasa.json();

            // Save API data to DB
            // TODO: Make this dynamic
            await fetch('http://localhost:3000/api/apod/save-today', {
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
