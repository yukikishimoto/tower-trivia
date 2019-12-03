import React from 'react';
import cloud1 from '../../assets/images/cloud1.png';
import cloud2 from '../../assets/images/cloud2.png';
import cloud3 from '../../assets/images/cloud3.png';
import hook from '../../assets/images/hook.svg';
import block1 from '../../assets/images/block1.svg';
import block2 from '../../assets/images/block2.svg';
import block3 from '../../assets/images/block3.svg';
import block4 from '../../assets/images/block4.svg';
import block5 from '../../assets/images/block5.svg';
import './styles.scss';

function Tower() {
  return (
    <section className="tower">
      <img className="tower__cloud tower--cloud-1" src={cloud1} alt="Cloud" />
      <img className="tower__cloud tower--cloud-2" src={cloud2} alt="Cloud" />
      <img className="tower__cloud tower--cloud-3" src={cloud3} alt="Cloud" />
      <img className="tower__cloud tower--cloud-4" src={cloud1} alt="Cloud" />
      <div className="tower__score">
        <span className="tower__score-label">HEIGHT</span>
        <span className="tower__score-value">100m</span>
      </div>
      <div className="tower__block-container">
        <img className="tower__hook" src={hook} alt="Tower crane hook" />
        <img className="tower__block tower--block-1" src={block1} alt="Tower block 1" />
        <img className="tower__block tower--block-2" src={block2} alt="Tower block 2" />
        <img className="tower__block tower--block-3" src={block3} alt="Tower block 3" />
        <img className="tower__block tower--block-4" src={block4} alt="Tower block 4" />
        <img className="tower__block tower--block-5" src={block5} alt="Tower block 5" />
      </div>
    </section>
  );
}

export default Tower;