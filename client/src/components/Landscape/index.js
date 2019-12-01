import React from 'react';
import cloud1 from '../../assets/images/cloud-1.png';
import cloud2 from '../../assets/images/cloud-2.png';
import cloud3 from '../../assets/images/cloud-3.png';
import './styles.scss';

function Landscape() {
  return (
    <>
      <img className="landscape__cloud landscape--cloud-1" src={cloud1} alt="Cloud" />
      <img className="landscape__cloud landscape--cloud-2" src={cloud2} alt="Cloud" />
      <img className="landscape__cloud landscape--cloud-3" src={cloud3} alt="Cloud" />
      <div className="landscape__smoke landscape--smoke-1"></div>
      <div className="landscape__smoke landscape--smoke-2"></div>
      <div className="landscape__smoke landscape--smoke-3"></div>
      <div className="landscape__smoke landscape--smoke-4"></div>
      <div className="landscape__smoke landscape--smoke-5"></div>
      <div className="landscape__smoke landscape--smoke-6"></div>
      <div className="landscape__smoke landscape--smoke-7"></div>
      <div className="landscape__smoke landscape--smoke-8"></div>
      <div className="landscape__smoke landscape--smoke-9"></div>
      <div className="landscape__smoke landscape--smoke-10"></div>
      <div className="landscape__bird-container landscape__bird-container-1">
        <div className="landscape__bird landscape--bird-1"></div>
      </div>
      <div className="landscape__bird-container landscape__bird-container-2">
        <div className="landscape__bird landscape--bird-2"></div>
      </div>
    </>
  );
}

export default Landscape;