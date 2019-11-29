import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import './styles.scss';

function Trivia() {
  return (
    <section className="trivia">
      <div className="trivia__question">
        <h1 className="trivia__result-heading">CORRECT</h1>
        <h2 className="trivia__result-name">LEANING TOWER OF PISA</h2>
        <h3 className="trivia__result-location">PISA, ITALY</h3>
      </div>
      <AwesomeButton className="trivia__button" cssModule={AwesomeButtonStyles} type="primary">NEXT QUESTION</AwesomeButton>
      <div className="trivia__answers">
        <div className="trivia__answer-1">ITALY</div>
        <div className="trivia__answer-2">FRANCE</div>
        <div className="trivia__answer-3">USA</div>
      </div>
    </section>
  );
}

export default Trivia;