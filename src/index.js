const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');
const redis = require('redis');

const PORT = 3900;
const URL_API = 'https://rickandmortyapi.com/api/character';

const app = express();
const client = redis.createClient();

app.use(responseTime());

app.get('/character', async (req, res) => {
  try {
    // Si el registro existe en Redis, se devuelve
    const getCharacters = await client.get('characters');
    if (getCharacters) {
      return res.json(JSON.parse(getCharacters));
    }

    // Si el registro no existe, se consulta en la API
    const response = await axios.get(URL_API);
    const characters = JSON.stringify(response.data);
    // Se carga en Redis
    await client.set('characters', characters);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, async () => {
  await client.connect();
  console.log(`✅ Server on Port ${PORT}`);
});
