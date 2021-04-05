import getClient from '../../mongo_middleware';
import { MONGO_COLLECTION, MONGO_DB } from '../../mongo_middleware/constants';

function ValidatorError(text) {
  this.text = text;
}

const postCard = async (req, res) => {
  const client = getClient();
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MONGO_COLLECTION);
    let { title, description, image } = req.body;

    function validateField(field, valueField) {
      if (!valueField || valueField === '') {
        throw new ValidatorError('No se ha cumplido la validación de ' + field);
      }
    }
    validateField('título', title);
    validateField('descripción', description);

    if (title !== '' && description !== '' && image !== '') {
      const insertUser = await collection.insertOne(req.body);
      res.send('ID de la nueva tarjeta:' + req.body._id);
    }
  } catch (error) {
    console.error('ERROR', error);
    if (error instanceof ValidatorError) {
      res.status(400);
      res.send({ error: error.text });
    } else {
      res.status(500);
      res.send({ error: 'Ha ocurrido un error' });
    }
  } finally {
    console.log('cierro conexión');
    client.close;
  }
};

export default postCard;
