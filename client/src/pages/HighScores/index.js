import React from 'react';
import Landscape from '../../components/Landscape';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function HighScores() {
  return (
    <main className="scores">
      <Landscape />
      <img className="scores__logo" src={logo} alt="Tower Trivia logo" />
      <h1 className="scores__heading">HIGH SCORES</h1>
      <div className="scores__entries">
        <div className="scores__entry">YASH&emsp;500m</div>
        <div className="scores__entry">JOSH&emsp;400m</div>
        <div className="scores__entry">ROY&emsp;400m</div>
        <div className="scores__entry">YASH&emsp;500m</div>
        <div className="scores__entry">JOSH&emsp;400m</div>
        <div className="scores__entry">ROY&emsp;400m</div>
        <div className="scores__entry">YASH&emsp;500m</div>
        <div className="scores__entry">JOSH&emsp;400m</div>
        <div className="scores__entry">ROY&emsp;400m</div>
        <div className="scores__entry">YASH&emsp;500m</div>
        <div className="scores__entry">JOSH&emsp;400m</div>
        <div className="scores__entry">ROY&emsp;400m</div>
      </div>
      <Link to="/game">
        <AwesomeButton className="scores__button" type="primary">PLAY AGAIN</AwesomeButton>
      </Link>
    </main>
  );
}

export default HighScores;