import { MongoClient } from 'mongodb';
import { MONGO_DB, MONGO_URL, PSSW_BD, USER } from './constants';

const uri = `mongodb+srv://${USER}:${PSSW_BD}@${MONGO_URL}/?retryWrites=true&w=majority`;

const getClient = () => {
  return new MongoClient(uri, { useUnifiedTopology: true });
};

export default getClient;
