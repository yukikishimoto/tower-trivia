import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function Home() {
  return (
    <main className="landing">
      <img className="landing__logo" src={logo} alt="Tower Trivia logo" />
      <h1 className="landing__heading">Test your knowledge of the most famous towers around the world.</h1>
      <h2 className="landing__subheading">Answer correctly to build up your tower as high as you can!</h2>
      <AwesomeButton className="landing__button" cssModule={AwesomeButtonStyles} type="primary">PLAY NOW</AwesomeButton>
    </main>
  );
}

export default Home;