import faunadb, { query as q } from 'faunadb';
import dayjs from 'dayjs';

let client;
const secret = process.env.FAUNADB_SECRET_KEY_CURIOSITIES;

if (!client) {
    client = new faunadb.Client({ secret });
}

export default async (req, res) => {
    try {
        const dbs = await client.query(
            q.Get(
                // make paginatable
                q.Match(
                    // query index
                    q.Index('today_apod'), // specify source
                    dayjs().format('YYYY-MM-DD')
                )
            )
        );

        const { ref, data } = dbs;

        const result = {
            ref,
            data
        };

        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
