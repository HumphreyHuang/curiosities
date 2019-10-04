import faunadb, { query as q } from 'faunadb';

let client;
const secret = process.env.FAUNADB_SECRET_KEY_CURIOSITIES;

if (!client) {
    client = new faunadb.Client({ secret });
}

export default async (req, res) => {
    const {
        title = '',
        explanation = '',
        url = '',
        hdurl = '',
        date = '',
        copyright = ''
    } = req.body;

    try {
        await client.query(
            q.Create(q.Collection('apod'), {
                data: { title, explanation, url, hdurl, date, copyright }
            })
        );

        res.status(200).json({ saved: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
