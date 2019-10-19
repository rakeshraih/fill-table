import React from 'react';

import './index.scss';

function Filler({ setFiller, name, children, selected }) {
  return (
    <div
      tabIndex="0"
      role="switch"
      aria-checked={selected}
      onClick={() => {
        setFiller(!selected ? { component: name === 'E' ? '' : children, name } : {});
      }}
      className={`fill-item ${selected ? 'selected' : ''}`}
    >
      {children}
    </div>
  );
}

export default Filler;
