import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import axios from 'axios';
import Tower from '../../components/Tower';
import Trivia from '../../components/Trivia';
import Result from '../../components/Result';
import close from '../../assets/icons/close.svg';
import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      hook2Class: "tower__hook tower--hook-2",
      hook3Class: "tower__hook tower--hook-3",
      hook4Class: "tower__hook tower--hook-4",
      hook5Class: "tower__hook tower--hook-5"
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    // Bind modal to element with className="game":
    Modal.setAppElement('.game');

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

    const questionsSeen = [];
    for (let i = 1; i <= this.state.currentQuestion; i++) {
      questionsSeen.push(this.state.trivia[i - 1]);
    }

    return (
      <main className="game">
        {isGameOver ? <Result history={history} currentQuestion={currentQuestion} didPlayerWin={didPlayerWin} score={score} playAgainClickHandler={this.playAgainClickHandler} handleOpenModal={this.handleOpenModal} /> : <Tower score={score} hook2Class={hook2Class} hook3Class={hook3Class} hook4Class={hook4Class} hook5Class={hook5Class} />}
        <Trivia trivia={trivia} currentQuestion={currentQuestion} isQuestionAnswered={isQuestionAnswered} optionSelected={optionSelected} isAnswerCorrect={isAnswerCorrect} answerClickHandler={this.answerClickHandler} nextQuestionClickHandler={this.nextQuestionClickHandler} />
        <Modal isOpen={this.state.showModal}>
          <img className="game__modal-close" src={close} alt="" onClick={this.handleCloseModal} />
          <Slider dots={true} cssEase="cubic-bezier(0.68, -0.55, 0.265, 1.55)" speed="400" >
            {
              questionsSeen[0] ? 
                questionsSeen.map(answer => 
                  <div className="game__tower-carousel-tab" key={answer.id}>
                    <img className="game__tower-image" src={answer.image} alt="Famous tower" />
                    <h1 className="game__tower-name">{answer.name}</h1>
                    <h2 className="game__tower-location">{answer.correctAnswer}</h2>
                    <p className="game__tower-description">{answer.description}</p>
                  </div>
                )
              :
              null
            }
          </Slider>
        </Modal>
      </main>
    )
  }
}

export default Game;