import React from 'react';
import './styles.scss';

function Tower() {
  return (
    <section className="tower">
      <img className="tower__cloud-1" src="" alt="Cloud" />
      <img className="tower__cloud-2" src="" alt="Cloud" />
      <img className="tower__cloud-3" src="" alt="Cloud" />
      <img className="tower__cloud-4" src="" alt="Cloud" />
      <img className="tower__crane" src="" alt="Tower crane" />
      <div className="tower__score">
        <span className="tower__score-label">HEIGHT</span>
        <span className="tower__score-value">100m</span>
      </div>
      <img className="tower__block-1" src="" alt="Tower block 1" />
      <img className="tower__block-2" src="" alt="Tower block 2" />
      <img className="tower__block-3" src="" alt="Tower block 3" />
      <img className="tower__block-4" src="" alt="Tower block 4" />
      <img className="tower__block-5" src="" alt="Tower block 5" />
    </section>
  );
}

export default Tower;