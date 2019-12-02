import React from 'react';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import './styles.scss';

function Result() {
  return (
    <section className="result">
      <h1 className="result__heading">YOU WIN!</h1>
      <h2 className="result__subheading">YOUR SCORE:</h2>
      <span className="result__score">500m</span>
      <form className="result__form">
        <label className="result__form-label" for="name">ENTER YOUR NAME:</label>
        <input className="result__form-field" type="text" id="name" />
      </form>
      <Link to="/highscores">
        <AwesomeButton className="result__button-1" type="secondary">SUBMIT YOUR SCORE</AwesomeButton>
      </Link>
        <AwesomeButton className="result__button-2" type="primary">PLAY AGAIN</AwesomeButton>
    </section>
  );
}

export default Result;