import React from 'react';
import CountUp from 'react-countup';
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

function Tower(props) {
  const {score, hook2Class, hook3Class, hook4Class, hook5Class} = props;

  const towerScoreClass = () => {
    if (score === 100) {
      return "tower__score tower__score--100";
    } else if (score === 200) {
      return "tower__score tower__score--200";
    } else if (score === 300) {
      return "tower__score tower__score--300";
    } else if (score === 400) {
      return "tower__score tower__score--400";
    } else if (score === 500) {
      return "tower__score tower__score--500";
    }
  }

  return (
    <section className="tower">
      <img className="tower__cloud tower--cloud-1" src={cloud1} alt="Cloud" />
      <img className="tower__cloud tower--cloud-2" src={cloud2} alt="Cloud" />
      <img className="tower__cloud tower--cloud-3" src={cloud3} alt="Cloud" />
      <img className="tower__cloud tower--cloud-4" src={cloud1} alt="Cloud" />
      <div className={towerScoreClass()}>
        <span className="tower__score-label">HEIGHT</span>
        {score === 100 ? <CountUp className="tower__score-value" start={score - 100} end={score} duration={2} delay={0} /> : null}
        {score === 200 ? <CountUp className="tower__score-value" start={score - 100} end={score} duration={2} delay={2} /> : null}
        {score === 300 ? <CountUp className="tower__score-value" start={score - 100} end={score} duration={2} delay={1.75} /> : null}
        {score === 400 ? <CountUp className="tower__score-value" start={score - 100} end={score} duration={2} delay={1.5} /> : null}
        {score === 500 ? <CountUp className="tower__score-value" start={score - 100} end={score} duration={2} delay={1.25} /> : null}
        <span>m</span>
      </div>
      <div className="tower__block-container">
        {score === 200 ? <img className={hook2Class} src={hook} alt="Tower crane hook" /> : null}
        {score === 300 ? <img className={hook3Class} src={hook} alt="Tower crane hook" /> : null}
        {score === 400 ? <img className={hook4Class} src={hook} alt="Tower crane hook" /> : null}
        {score === 500 ? <img className={hook5Class} src={hook} alt="Tower crane hook" /> : null}
        <img className="tower__block tower--block-1" src={block1} alt="Tower block 1" />
        {score >= 200 ? <img className="tower__block tower--block-2" src={block2} alt="Tower block 2" /> : null}
        {score >= 300 ? <img className="tower__block tower--block-3" src={block3} alt="Tower block 3" /> : null}
        {score >= 400 ? <img className="tower__block tower--block-4" src={block4} alt="Tower block 4" /> : null}
        {score >= 500 ? <img className="tower__block tower--block-5" src={block5} alt="Tower block 5" /> : null}
      </div>
    </section>
  );
}

export default Tower;