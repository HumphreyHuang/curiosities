// import faunadb, { query as q } from 'faunadb';

const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY_CURIOSITIES;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
    try {
        // TODO: Filter by today's date or create a new index
        const dbs = await client.query(
            q.Map(
                // iterate each item in result
                q.Paginate(
                    // make paginatable
                    q.Match(
                        // query index
                        q.Index('all_apod') // specify source
                    )
                ),
                ref => q.Get(ref) // lookup each result by its reference
            )
        );

        res.status(200).json(dbs.data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
