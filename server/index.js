const express = require('express');
const cors = require('cors');

const gameroute = require('./routes/game');
const highscoresroute = require('./routes/highscores');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/game', gameroute);
app.use('/highscores', highscoresroute);

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
})