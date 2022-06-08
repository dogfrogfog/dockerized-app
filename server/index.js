const express = require('express')
const app = express()
const cors = require('cors')
const MOCK_DATA = require('./mock-data.json');

const PORT = 8080;

app.use(cors());

app.get('/api/fruits', (_, res) => {
  const randImage = MOCK_DATA.data[(Math.random() * MOCK_DATA.data.length) | 0]

  res.send(randImage)
});

app.listen(PORT);