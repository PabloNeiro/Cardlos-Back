import express from 'express';
import cors from 'cors';
import init from './cards';

require('dotenv').config();

const port = 3001;

const app = express();

// Configuración de express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializar rutas de API
init(app);

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
