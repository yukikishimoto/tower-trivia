import React from 'react';
import axios from 'axios';
import {AwesomeButton} from 'react-awesome-button';
import './styles.scss';

class Result extends React.Component {
  state = {
    name: '',
    blankNameError: false
  }

  formKeyDownHandler = (event) => {
    // Prevent the page from refreshing when the player if focused on an input form field and presses "enter" on the keyboard:
    if (event.key === "Enter") {
      event.preventDefault();
    };
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value.toUpperCase()
    });

    if (event.target.value) {
      this.setState({
        blankNameError: false
      })
    }
  }

  submitScoreClickHandler = () => {
    if (this.state.name.length > 10) {
      return;
    }

    if (!this.state.name) {
      this.setState({
        blankNameError: true
      })
      return;
    }

    const newHighScore = {
      name: this.state.name,
      score: this.props.score
    };

    axios
    .post("http://localhost:8080/highscores", newHighScore)
    .then(() => {
      this.props.history.push('/highscores');
    })
    .catch(() => {
      alert("There was an error in the request to post your high score to the server.");
    });
  }

  render() {
    const {didPlayerWin, score, playAgainClickHandler, handleOpenModal} = this.props;
    const {blankNameError} = this.state;

    const resultHTML = 
      <>
        <p className="result__learn-more" onClick={handleOpenModal}>Click here to learn more<br />about the structures you saw in the game!</p>
        <h2 className="result__subheading">YOUR SCORE:</h2>
        <span className="result__score">{score}m</span>
        <form className="result__form" onKeyDown={this.formKeyDownHandler}>
          <label className="result__form-label" htmlFor="name">ENTER YOUR NAME:</label>
          <input className="result__form-field" type="text" id="name" onChange={this.nameChangeHandler} />
          <div className="result__form-errors">
            {blankNameError ? <p>Name cannot be blank.</p> : null}
            {(this.state.name.length > 10) ? <p>Name cannot exceed 10 characters.</p> : null}
          </div>
        </form>
        <AwesomeButton className="result__button-1" type="secondary" onPress={this.submitScoreClickHandler}>SUBMIT YOUR SCORE</AwesomeButton>
        <AwesomeButton className="result__button-2" type="primary" onPress={playAgainClickHandler}>PLAY AGAIN</AwesomeButton>
      </>
    
    return (
      <>
        {
          didPlayerWin ? 
            <section className="result result--won">
              <h1 className="result__heading">YOU WIN!</h1>
              {resultHTML}
            </section>
          : 
            <section className="result result--lost">
              <h1 className="result__heading">GAME OVER</h1>
              {resultHTML}
            </section>
        }
      </>
    );
  }
}

export default Result;