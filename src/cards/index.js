import getCards from './gets/getCards';
import postCard from './posts/postCard';

const init = (app) => {
  app.post('/cards', postCard);
  app.get('/cards', getCards);
};

export default init;
