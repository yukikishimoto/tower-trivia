import React from 'react';
import axios from 'axios';
import {AwesomeButton} from 'react-awesome-button';
import './styles.scss';

class Result extends React.Component {
  state = {
    name: '',
    blankNameError: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value.toUpperCase()
    });
    console.log(this.state.name); // Why does this lag by 1 char?
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
    const {didPlayerWin, score, playAgainClickHandler} = this.props;
    const {blankNameError} = this.state;

    const resultHTML = 
      <>
        <h2 className="result__subheading">YOUR SCORE:</h2>
        <span className="result__score">{score}m</span>
        <form className="result__form">
          <label className="result__form-label" htmlFor="name">ENTER YOUR NAME:</label>
          <input className="result__form-field" type="text" id="name" onChange={this.nameChangeHandler} />
          <div className="result__form-errors">
            {blankNameError ? <p className="result__form-error">Name cannot be blank.</p> : null}
            {(this.state.name.length > 10) ? <p className="result__form-error">Name cannot exceed 10 characters.</p> : null}
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