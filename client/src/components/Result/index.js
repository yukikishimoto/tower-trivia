import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
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
      <AwesomeButton className="result__button" cssModule={AwesomeButtonStyles} type="secondary">VIEW HIGH SCORES</AwesomeButton>
      <AwesomeButton className="result__button" cssModule={AwesomeButtonStyles} type="anchor">PLAY AGAIN</AwesomeButton>
    </section>
  );
}

export default Result;