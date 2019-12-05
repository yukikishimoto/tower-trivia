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
    score: 100,
    hook2Class: "tower__hook tower--hook-2",
    hook3Class: "tower__hook tower--hook-3",
    hook4Class: "tower__hook tower--hook-4",
    hook5Class: "tower__hook tower--hook-5"
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
    
    if (this.state.currentQuestion === 1) {
      this.setState({
        hook2Class: "tower__hook tower--hook-2-up"
      })
    } else if (this.state.currentQuestion === 2) {
      this.setState({
        hook3Class: "tower__hook tower--hook-3-up"
      })
    } else if (this.state.currentQuestion === 3) {
      this.setState({
        hook4Class: "tower__hook tower--hook-4-up"
      })
    } else if (this.state.currentQuestion === 4) {
      this.setState({
        hook5Class: "tower__hook tower--hook-5-up"
      })
    }
  }

  render() {
    const {history} = this.props;
    const {trivia, currentQuestion, isQuestionAnswered, optionSelected, isAnswerCorrect, isGameOver, didPlayerWin, score, hook2Class, hook3Class, hook4Class, hook5Class} = this.state;

    return (
      <main className="game">
        {isGameOver ? <Result history={history} didPlayerWin={didPlayerWin} score={score} playAgainClickHandler={this.playAgainClickHandler} /> : <Tower score={score} hook2Class={hook2Class} hook3Class={hook3Class} hook4Class={hook4Class} hook5Class={hook5Class} />}
        <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
      </main>
    )
  }
}

export default Game;