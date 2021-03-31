import getClient from '../../mongo_middleware';
import { MONGO_COLLECTION, MONGO_DB } from '../../mongo_middleware/constants';

const getCards = async (req, res) => {
  const client = getClient();
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MONGO_COLLECTION);
    let cards = await collection.find().toArray();
    res.send(cards);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500);
    res.send({ error: 'Ha ocurrido un error' });
  } finally {
    console.log('Cierro conexión');
    client.close();
  }
};

export default getCards;
