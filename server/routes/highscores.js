const express = require('express');
const highscores = require('../data/highscores.json');
const shortid = require('short-id');

const router = express.Router();

router.get('/', (request, response) => {
  response.send(highscores);
})

router.post('/', (request, response) => {
  const newHighScore = {
    "id": shortid.generate(),
    "name": request.body.name,
    "score": request.body.score
  };
  highscores.push(newHighScore);
  response.send(highscores);
})

module.exports = router;