import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import question from '../../assets/images/question.svg';
import answer1 from '../../assets/images/answer1.svg';
import answer1Correct from '../../assets/images/answer1Correct.svg';
import answer1Wrong from '../../assets/images/answer1Wrong.svg';
import answer2 from '../../assets/images/answer2.svg';
import answer2Correct from '../../assets/images/answer2Correct.svg';
import answer2Wrong from '../../assets/images/answer2Wrong.svg';
import answer3 from '../../assets/images/answer3.svg';
import answer3Correct from '../../assets/images/answer3Correct.svg';
import answer3Wrong from '../../assets/images/answer3Wrong.svg';
import './styles.scss';

function Trivia(props) {
  const {trivia, currentQuestion, isQuestionAnswered, optionSelected, isAnswerCorrect, answerClickHandler, nextQuestionClickHandler} = props;

  return (
    <section className="trivia">
      <div className="trivia__question">
        <p className="trivia__question-text">Where is this structure located?</p>
        <img className="trivia__board" src={question} alt="Question board" />
        <div className="trivia__tower">
          <img className="trivia__tower-image" src={trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].image : ""} alt="Famous tower" />
          {isQuestionAnswered ? <div className="trivia__tower-overlay trivia--fade-in"></div> : null}
        </div>
        {
          isQuestionAnswered ? (isAnswerCorrect ? 
            <div className="trivia__result">
              <h1 className="trivia__result-heading trivia--fade-in">CORRECT</h1>
              <h2 className="trivia__result-name trivia--fade-in-down">{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].name : ""}</h2>
              <h3 className="trivia__result-location trivia--fade-in-down">{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].correctAnswer : ""}</h3>
              {(currentQuestion === 4) ? null : <AwesomeButton className="trivia__button trivia--fade-in" type="primary" onPress={nextQuestionClickHandler}>NEXT QUESTION</AwesomeButton>}
            </div> 
            : 
            <div className="trivia__result">
              <h1 className="trivia__result-heading">INCORRECT</h1>
            </div>
          ) 
          : 
          null
        }
      </div>
      <div className="trivia__answers">
        {
          trivia[currentQuestion - 1] ? 
            <div className="trivia__answer trivia--answer-1" onClick={answerClickHandler}>
              <img className="trivia__answer-image" src={(optionSelected === trivia[currentQuestion - 1].options[0]) ? (isAnswerCorrect ? answer1Correct : answer1Wrong) : answer1} alt="Answer sign" />
              <span className="trivia__answer-text trivia--answer-text-1">{trivia[currentQuestion - 1].options[0]}</span>
            </div>
            :
            null
        }
        {
          trivia[currentQuestion - 1] ? 
            <div className="trivia__answer trivia--answer-2" onClick={answerClickHandler}>
              <img className="trivia__answer-image" src={(optionSelected === trivia[currentQuestion - 1].options[1]) ? (isAnswerCorrect ? answer2Correct : answer2Wrong) : answer2} alt="Answer sign" />
              <span className="trivia__answer-text trivia--answer-text-2">{trivia[currentQuestion - 1].options[1]}</span>
            </div>
            :
            null
        }
        {
          trivia[currentQuestion - 1] ? 
            <div className="trivia__answer trivia--answer-3" onClick={answerClickHandler}>
              <img className="trivia__answer-image" src={(optionSelected === trivia[currentQuestion - 1].options[2]) ? (isAnswerCorrect ? answer3Correct : answer3Wrong) : answer3} alt="Answer sign" />
              <span className="trivia__answer-text trivia--answer-text-3">{trivia[currentQuestion - 1].options[2]}</span>
            </div>
            :
            null
        }
      </div>
    </section>
  );
}

export default Trivia;