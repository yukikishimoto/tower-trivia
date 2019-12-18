import React from 'react';
import Landscape from '../../components/Landscape';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function Home() {
  return (
    <main className="landing">
      <Landscape />
      <img className="landing__logo" src={logo} alt="Tower Trivia logo" />
      <h1 className="landing__heading">Test your knowledge of the most famous towers around the world.</h1>
      <h2 className="landing__subheading">Answer correctly to build up your tower as high as you can!</h2>
      <Link to="/game">
        <AwesomeButton className="landing__button" type="primary">PLAY</AwesomeButton>
      </Link>
    </main>
  );
}

export default Home;