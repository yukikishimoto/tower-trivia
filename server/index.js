const express = require('express');
const cors = require('cors');
const fs = require('fs');
const shortid = require('short-id');
const gameroute = require('./routes/game');
const highscoresroute = require('./routes/highscores');
const highscores = require('./data/highscores.json');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/game', gameroute);
app.use('/highscores', highscoresroute);

// POST request for the /highscores route is placed in this file because the fs.writeFile() function could not recognize the correct file path from the routes folder:
app.post('/highscores', (request, response) => {
  const newHighScore = {
    "id": shortid.generate(),
    "name": request.body.name,
    "score": request.body.score
  };
  highscores.push(newHighScore);
  fs.writeFileSync('./data/highscores.json', JSON.stringify(highscores));
  response.send(highscores);
})

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
})