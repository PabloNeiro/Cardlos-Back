import dotenv from 'dotenv';

dotenv.config();

const PSSW_BD = process.env.PSSW_BD;
const USER = process.env.USER;
const MONGO_URL = process.env.MONGO_URL;
const MONGO_DB = 'cardlos';
const MONGO_COLLECTION = 'tarjetas';

export { PSSW_BD, USER, MONGO_URL, MONGO_DB, MONGO_COLLECTION };
