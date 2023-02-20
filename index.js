const express = require('express');

const app = express();

const helloRouter = express.Router();

helloRouter.get('/', (request, response, next) => {
  // With this line, swagger will return empty paths
  // const test_id = ''.replace(/\//, '/');
  // With this workaround, swagger will return /helllo in paths
  const test_id = ''.replace(/\//, String.fromCharCode(0x002F));
  response.status.code = 200;
  response.send('world');
  next();
});

app.use('/hello', helloRouter);

app.listen(3000);
