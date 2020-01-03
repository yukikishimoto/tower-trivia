import React from 'react';
import axios from 'axios';
import Landscape from '../../components/Landscape';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

class HighScores extends React.Component {
  state = {
    highScores: []
  }

  componentDidMount() {
    axios
    .get(`${process.env.REACT_APP_SERVER || ''}/highscores`)
    .then((response) => {
      this.setState({
        highScores: response.data
      })
    })
    .catch(() => {
      alert("There was an error in the request for high scores data from the server.");
    });
  }

  render() {
    const {highScores} = this.state;
    return (
      <main className="scores">
        <Landscape />
        <img className="scores__logo" src={logo} alt="Tower Trivia logo" />
        <h1 className="scores__heading">HIGH SCORES</h1>
        <div className="scores__entries">
          {highScores.reverse().sort((a, b) => (a.score > b.score) ? -1 : 1).map(highScore => <div className="scores__entry" key={highScore.id}>{highScore.name.toUpperCase()}&emsp;{highScore.score}m</div>)}
        </div>
        <Link to="/game">
          <AwesomeButton className="scores__button" type="primary">PLAY AGAIN</AwesomeButton>
        </Link>
      </main>
    );
  }
}

export default HighScores;