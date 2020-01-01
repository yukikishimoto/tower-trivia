const express = require('express');
const highscores = require('../data/highscores.json');
const shortid = require('short-id');
const fs = require('fs');

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
  fs.writeFileSync('./data/highscores.json', JSON.stringify(highscores));
  response.send(highscores);
})

module.exports = router;