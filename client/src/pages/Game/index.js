import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Tower from '../../components/Tower';
import Trivia from '../../components/Trivia';
import Result from '../../components/Result';
import LearnMore from '../../components/LearnMore';
import './styles.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trivia: [],
      currentQuestion: 1,
      isQuestionAnswered: false,
      optionSelected: "",
      isAnswerCorrect: false,
      isGameOver: false,
      didPlayerWin: false,
      score: 100,
      showModal: false,
      hook2Class: "tower__hook tower__hook-down tower--hook-2-down",
      hook3Class: "tower__hook tower__hook-down tower--hook-3-down",
      hook4Class: "tower__hook tower__hook-down tower--hook-4-down",
      hook5Class: "tower__hook tower__hook-down tower--hook-5-down",
      windowWidth: window.innerWidth
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  gameGetRequest = () => {
    axios
    .get("http://localhost:8080/game")
    .then((response) => {
      this.setState({
        trivia: response.data
      });
    })
    .catch(() => {
      alert("There was an error in the request for trivia data from the server.");
    });
  }

  playAgainClickHandler = () => {
    this.gameGetRequest();

    this.setState({
      currentQuestion: 1,
      isQuestionAnswered: false,
      optionSelected: "",
      isAnswerCorrect: false,
      isGameOver: false,
      didPlayerWin: false,
      score: 100,
      hook2Class: "tower__hook tower__hook-down tower--hook-2-down",
      hook3Class: "tower__hook tower__hook-down tower--hook-3-down",
      hook4Class: "tower__hook tower__hook-down tower--hook-4-down",
      hook5Class: "tower__hook tower__hook-down tower--hook-5-down"
    })
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
  }
  
  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
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
        hook2Class: "tower__hook tower__hook-up tower--hook-2-up"
      })
    } else if (this.state.currentQuestion === 2) {
      this.setState({
        hook3Class: "tower__hook tower__hook-up tower--hook-3-up"
      })
    } else if (this.state.currentQuestion === 3) {
      this.setState({
        hook4Class: "tower__hook tower__hook-up tower--hook-4-up"
      })
    } else if (this.state.currentQuestion === 4) {
      this.setState({
        hook5Class: "tower__hook tower__hook-up tower--hook-5-up"
      })
    }
  }

  windowResizeHandler = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResizeHandler);

    // Bind modal to element with className="game":
    Modal.setAppElement('.game');

    this.gameGetRequest();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  render() {
    const {history} = this.props;
    const {trivia, currentQuestion, isQuestionAnswered, optionSelected, isAnswerCorrect, isGameOver, didPlayerWin, score, showModal, hook2Class, hook3Class, hook4Class, hook5Class, windowWidth} = this.state;

    const questionsSeen = [];
    for (let i = 1; i <= this.state.currentQuestion; i++) {
      questionsSeen.push(this.state.trivia[i - 1]);
    }

    return (
      <main className="game">
        {
          (windowWidth < 768) ? 
            (isGameOver ? 
              <Result history={history} currentQuestion={currentQuestion} didPlayerWin={didPlayerWin} score={score} playAgainClickHandler={this.playAgainClickHandler} handleOpenModal={this.handleOpenModal} /> 
              : 
              <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
            )
            : 
            (isGameOver ? 
              <>
                <Result history={history} currentQuestion={currentQuestion} didPlayerWin={didPlayerWin} score={score} playAgainClickHandler={this.playAgainClickHandler} handleOpenModal={this.handleOpenModal} />
                <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
              </> 
              : 
              <>
                <Tower score={score} hook2Class={hook2Class} hook3Class={hook3Class} hook4Class={hook4Class} hook5Class={hook5Class} />
                <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
              </>
            )
        }
        <LearnMore showModal={showModal} questionsSeen={questionsSeen} handleCloseModal={this.handleCloseModal} />
      </main>
    )
  }
}

export default Game;