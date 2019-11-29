import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function HighScores() {
  return (
    <main className="scores">
      <img className="scores__logo" src={logo} alt="Tower Trivia logo" />
      <h1 className="scores__heading">HIGH SCORES</h1>
      <div className="scores__entries">
        <div className="scores__entry">
          <span className="scores__entry-name">YUKI</span>
          <span className="scores__entry-score">500m</span>
        </div>
      </div>
      <AwesomeButton className="scores__button" cssModule={AwesomeButtonStyles} type="anchor">PLAY AGAIN</AwesomeButton>
    </main>
  );
}

export default HighScores;