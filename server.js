let weatherData = {};

const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const cors = require('cors');
server.use(cors());

server.use(express.static('website'));

const PORT = 8000;
server.listen(PORT, () => console.log(`Server is live on port ${PORT}`));

server.get('/data', (req, res) => res.send(weatherData));

server.post('/save', (req, res) => {
  weatherData = {
    day: req.body.date,
    temperature: req.body.temp,
    mood: req.body.feel,
  };
  res.send(weatherData);
});
