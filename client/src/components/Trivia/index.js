import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import question from '../../assets/images/question.svg';
import answer1 from '../../assets/images/answer1.svg';
import answer2 from '../../assets/images/answer2.svg';
import answer3 from '../../assets/images/answer3.svg';
import './styles.scss';

function Trivia() {
  return (
    <section className="trivia">
      <div className="trivia__question">
        <img className="trivia__board" src={question} alt="Question board" />
        <div className="trivia__tower">
          <img className="trivia__tower-image" src="" alt="Test image" />
          <div className="trivia__tower-overlay"></div>
        </div>
        <div className="trivia__result">
          <h1 className="trivia__result-heading">CORRECT</h1>
          <h2 className="trivia__result-name">LEANING TOWER OF PISA</h2>
          <h3 className="trivia__result-location">PISA, ITALY</h3>
          <AwesomeButton className="trivia__button" type="primary">NEXT QUESTION</AwesomeButton>
        </div>
      </div>
      <div className="trivia__answers">
        <div className="trivia__answer-1">
          <img className="trivia__answer-image" src={answer1} alt="Answer sign" />
          <span className="trivia__answer-text">ITALY</span>
        </div>
        <div className="trivia__answer-2">
          <img className="trivia__answer-image" src={answer2} alt="Answer sign" />
          <span className="trivia__answer-text">FRANCE</span>
        </div>
        <div className="trivia__answer-3">
          <img className="trivia__answer-image" src={answer3} alt="Answer sign" />
          <span className="trivia__answer-text">USA</span>
        </div>
      </div>
    </section>
  );
}

export default Trivia;