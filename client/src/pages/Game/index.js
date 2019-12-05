import React from 'react';
import axios from 'axios';
import Tower from '../../components/Tower';
import Trivia from '../../components/Trivia';
import Result from '../../components/Result';
import './styles.scss';

class Game extends React.Component {
  state = {
    trivia: [],
    currentQuestion: 1,
    isQuestionAnswered: false,
    optionSelected: "",
    isAnswerCorrect: false,
    isGameOver: false,
    didPlayerWin: false,
    score: 100
  }

  componentDidMount() {
    axios
    .get("http://localhost:8080/game")
    .then((response) => {
      this.setState({
        trivia: response.data
      });
    })
    .catch(() => {
      alert("There was an error in the request for trivia data the server.");
    });
  }

  playAgainClickHandler = () => {
    axios
    .get("http://localhost:8080/game")
    .then((response) => {
      this.setState({
        trivia: response.data
      });
    })
    .catch(() => {
      alert("There was an error in the request for trivia data the server.");
    });
    this.setState({
      currentQuestion: 1,
      isQuestionAnswered: false,
      optionSelected: "",
      isAnswerCorrect: false,
      isGameOver: false,
      didPlayerWin: false,
      score: 100
    })
  }

  answerClickHandler = (event) => {
    if (this.state.isQuestionAnswered) {
      return;
    }
    this.setState({
      isQuestionAnswered: true,
      optionSelected: event.target.parentElement.innerText
    });
    if (event.target.parentElement.innerText === this.state.trivia[this.state.currentQuestion - 1].correctAnswer) {
      this.setState({
        isAnswerCorrect: true,
        score: this.state.score + 100
      });
      if (this.state.currentQuestion === 4) {
        setTimeout(() => this.setState({
          isGameOver: true,
          didPlayerWin: true
        }), 3550);
      }
    } else {
      this.setState({
        isGameOver: true
      });
    }
  }

  nextQuestionClickHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      isQuestionAnswered: false,
      optionSelected: "",
      isAnswerCorrect: false
    })
  }

  render() {
    const {history} = this.props;
    const {trivia, currentQuestion, isQuestionAnswered, optionSelected, isAnswerCorrect, isGameOver, didPlayerWin, score} = this.state;

    return (
      <main className="game">
        {isGameOver ? <Result history={history} didPlayerWin={didPlayerWin} score={score} playAgainClickHandler={this.playAgainClickHandler} /> : <Tower score={score} />}
        <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
      </main>
    )
  }
}

export default Game;