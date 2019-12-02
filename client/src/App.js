import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'; // This is technically "never used" but is needed to render button styles on the site
import Home from './pages/Home';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/highscores" component={HighScores} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
