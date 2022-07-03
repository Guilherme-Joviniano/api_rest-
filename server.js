import dotenv from 'dotenv';

dotenv.config();

import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`\n Escutando na Porta ${port}`);
  console.log(`CTRL + CLIQUE em http://localhost:${port}`);
});
