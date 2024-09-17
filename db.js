const {MongoClient} = require('mongodb');

module.exports = async function (collection) {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = await client.db("cse-db").collection(collection);
        return db;
    } catch (e) {
        console.error(e);
    }
}
