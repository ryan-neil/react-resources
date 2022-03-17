const express = require('express');
const { dogs } = require('./data');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/dogs', async (req, res) => {
  return res.json(dogs);
});

app.listen(9001, () => {
  console.log('Server running on port: 9001');
});
