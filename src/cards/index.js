import deleteCard from './delete/deleteCard';
import getCards from './gets/getCards';
import postCard from './posts/postCard';

const init = (app) => {
  app.post('/cards', postCard);
  app.get('/cards', getCards);
  app.delete('/cards/:id', deleteCard);
};

export default init;
