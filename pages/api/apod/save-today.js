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
        copyright = '',
        likes = Math.floor(Math.random() * 16) + 5, // 5 - 20
        emojis = ''
    } = req.body;

    try {
        await client.query(
            q.Create(q.Collection('apod'), {
                data: {
                    title,
                    explanation,
                    url,
                    hdurl,
                    date,
                    copyright,
                    likes,
                    emojis
                }
            })
        );

        res.status(200).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
