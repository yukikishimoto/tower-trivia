import React from 'react';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import cloud1 from '../../assets/images/cloud-1.png';
import cloud2 from '../../assets/images/cloud-2.png';
import cloud3 from '../../assets/images/cloud-3.png';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function Home() {
  return (
    <main className="landing">
      <img className="landing__cloud landing--cloud-1" src={cloud1} alt="Cloud" />
      <img className="landing__cloud landing--cloud-2" src={cloud2} alt="Cloud" />
      <img className="landing__cloud landing--cloud-3" src={cloud3} alt="Cloud" />
      <div className="landing__smoke landing--smoke-1"></div>
      <div className="landing__smoke landing--smoke-2"></div>
      <div className="landing__smoke landing--smoke-3"></div>
      <div className="landing__smoke landing--smoke-4"></div>
      <div className="landing__smoke landing--smoke-5"></div>
      <div className="landing__smoke landing--smoke-6"></div>
      <div className="landing__smoke landing--smoke-7"></div>
      <div className="landing__smoke landing--smoke-8"></div>
      <div className="landing__smoke landing--smoke-9"></div>
      <div className="landing__bird-container landing__bird-container-1">
        <div className="landing__bird landing--bird-1"></div>
      </div>
      <div className="landing__bird-container landing__bird-container-2">
        <div className="landing__bird landing--bird-2"></div>
      </div>
      <div className="landing__smoke landing--smoke-10"></div>
      <img className="landing__logo" src={logo} alt="Tower Trivia logo" />
      <h1 className="landing__heading">Test your knowledge of the most famous towers around the world.</h1>
      <h2 className="landing__subheading">Answer correctly to build up your tower as high as you can!</h2>
      <Link to="/game">
        <AwesomeButton className="landing__button" type="primary">PLAY NOW</AwesomeButton>
      </Link>
    </main>
  );
}

export default Home;