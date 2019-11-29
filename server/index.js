const express = require('express');
const cors = require('cors');
const game = require('./routes/game');
const highscores = require('./routes/highscores');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/game', game);
app.use('/highscores', highscores);

app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
})