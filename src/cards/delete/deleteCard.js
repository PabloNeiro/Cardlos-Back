import { ObjectID } from 'mongodb';
import getClient from '../../mongo_middleware';
import { MONGO_COLLECTION, MONGO_DB } from '../../mongo_middleware/constants';

const deleteCard = async (req, res) => {
  const client = getClient();
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MONGO_COLLECTION);

    const result = await collection.deleteOne({
      _id: ObjectID(`${req.params.id}`),
    });
    if (result.deletedCount === 0) {
      res.status(404);
      res.send('No borrado');
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log('ERROR', error);
    res.send({ error: 'fatal error' });
  } finally {
    console.log('cierro conexión');
    client.close();
  }
};

export default deleteCard;
