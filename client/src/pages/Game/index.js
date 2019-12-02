import React from 'react';
import Tower from '../../components/Tower';
import Trivia from '../../components/Trivia';
import Result from '../../components/Result';
import './styles.scss';

class Game extends React.Component {
  render() {
    return (
      <main className="game">
        {/* <Tower /> */}
        <Result />
        <Trivia />
      </main>
    )
  }
}

export default Game;