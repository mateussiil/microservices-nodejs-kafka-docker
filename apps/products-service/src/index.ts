import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})