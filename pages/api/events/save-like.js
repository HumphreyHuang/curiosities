import faunadb, { query as q } from 'faunadb';

let client;
const secret = process.env.FAUNADB_SECRET_KEY_CURIOSITIES;

if (!client) {
    client = new faunadb.Client({ secret });
}

export default async (req, res) => {
    const { apodId, likes } = req.body;

    try {
        await client.query(
            q.Update(
                q.Ref(q.Collection('apod'), apodId), {
                    data: { likes }
                })
            )
        );

        res.status(200).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
