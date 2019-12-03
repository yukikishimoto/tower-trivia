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
    isAnswerCorrect: false
  }

  componentDidMount() {
    axios
    .get("http://localhost:8080/game")
    .then((response) => {
      this.setState({
        trivia: response.data
      })
    })
  }

  answerClickHandler = (event) => {
    this.setState({
      isQuestionAnswered: true
    });
    if (event.target.innerText === this.state.trivia[this.state.currentQuestion - 1].correctAnswer) {
      this.setState({
        isAnswerCorrect: true
      })
    } else {
      console.log("wrong!"); // test
    }
  }

  render() {
    const {trivia, currentQuestion, isQuestionAnswered, isAnswerCorrect} = this.state;

    return (
      <main className="game">
        <Tower />
        {/* <Result /> */}
        <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} />
      </main>
    )
  }
}

export default Game;