import faunadb, { query as q } from 'faunadb';

const secret = process.env.FAUNADB_SECRET_KEY_CURIOSITIES;

const client = new faunadb.Client({ secret });

export default async (req, res) => {
    const { apodRef, counts } = req.body;
    const { id } = apodRef['@ref'];

    try {
        await client.query(
            q.Update(q.Ref(q.Collection('apod'), id), {
                data: { likes: counts }
            })
        );

        res.status(200).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
