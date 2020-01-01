const express = require('express');
const cors = require('cors');
const path = require('path');

const gameroute = require('./routes/game');
const highscoresroute = require('./routes/highscores');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use('/game', gameroute);
app.use('/highscores', highscoresroute);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
})