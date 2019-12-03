import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import question from '../../assets/images/question.svg';
import answer1 from '../../assets/images/answer1.svg';
import answer2 from '../../assets/images/answer2.svg';
import answer3 from '../../assets/images/answer3.svg';
import './styles.scss';

function Trivia(props) {
  const {trivia, currentQuestion, isQuestionAnswered, isAnswerCorrect, answerClickHandler, nextQuestionClickHandler} = props;

  return (
    <section className="trivia">
      <div className="trivia__question">
        <img className="trivia__board" src={question} alt="Question board" />
        <div className="trivia__tower">
          <img className="trivia__tower-image" src={trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].image : ""} alt="Famous tower" />
          {isQuestionAnswered ? <div className="trivia__tower-overlay"></div> : null}
        </div>
        {
          isQuestionAnswered ? (isAnswerCorrect ? 
            <div className="trivia__result">
              <h1 className="trivia__result-heading">CORRECT</h1>
              <h2 className="trivia__result-name">{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].name : ""}</h2>
              <h3 className="trivia__result-location">{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].correctAnswer : ""}</h3>
              {(currentQuestion === 4) ? null : <AwesomeButton className="trivia__button" type="primary" onPress={nextQuestionClickHandler}>NEXT QUESTION</AwesomeButton>}
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
        <div className="trivia__answer trivia--answer-1">
          <img className="trivia__answer-image" src={answer1} alt="Answer sign" />
          <span className="trivia__answer-text trivia--answer-text-1" onClick={answerClickHandler}>{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].options[0] : ""}</span>
        </div>
        <div className="trivia__answer trivia--answer-2">
          <img className="trivia__answer-image" src={answer2} alt="Answer sign" />
          <span className="trivia__answer-text trivia--answer-text-2" onClick={answerClickHandler}>{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].options[1] : ""}</span>
        </div>
        <div className="trivia__answer trivia--answer-3">
          <img className="trivia__answer-image trivia__answer-image-3" src={answer3} alt="Answer sign" />
          <span className="trivia__answer-text trivia--answer-text-3" onClick={answerClickHandler}>{trivia[currentQuestion - 1] ? trivia[currentQuestion - 1].options[2] : ""}</span>
        </div>
      </div>
    </section>
  );
}

export default Trivia;