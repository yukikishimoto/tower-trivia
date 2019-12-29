import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import close from '../../assets/icons/close.svg';
import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LearnMore(props) {
  const {showModal, questionsSeen, handleCloseModal} = props;

  return (
    <Modal isOpen={showModal} onRequestClose={handleCloseModal} shouldCloseOnOverlayClick={true}>
      <img className="learn-more__modal-close" src={close} alt="" onClick={handleCloseModal} />
      <Slider dots={true} cssEase="cubic-bezier(0.68, -0.55, 0.265, 1.55)" speed="400" >
        {
          questionsSeen[0] ? 
            questionsSeen.map(answer => 
              <div className="learn-more__tower-carousel-tab" key={answer.id}>
                <div className="learn-more__tower-image-container">
                  <img className="learn-more__tower-image" src={answer.image} alt="Famous tower" />
                </div>
                <h1 className="learn-more__tower-name">{answer.name}</h1>
                <h2 className="learn-more__tower-location">{answer.correctAnswer}</h2>
                <p className="learn-more__tower-description">{answer.description}</p>
              </div>
            )
          :
          null
        }
      </Slider>
    </Modal>
  );
}

export default LearnMore;