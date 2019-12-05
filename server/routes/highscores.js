const express = require('express');
const highscores = require('../data/highscores.json');

const router = express.Router();

router.get('/', (request, response) => {
  response.send(highscores);
})

module.exports = router;