const express = require('express');
const axios = require('axios');

const app = express();

app.get('/character', async (req, res) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  res.json(response.data);
});

app.listen(3900);
console.log('✅ Server on Port 3900');
