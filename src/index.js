const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');

const app = express();

app.use(responseTime());

app.get('/character', async (req, res) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  res.json(response.data);
});

app.listen(3900);
console.log('✅ Server on Port 3900');
