const express = require('express');
const trivia = require('../data/trivia.json');

const router = express.Router();

router.get('/', (request, response) => {
  // Send 4 random question objects from the full array of questions
  response.send(trivia.sort(() => 0.5 - Math.random()).slice(0, 4));
})

module.exports = router;