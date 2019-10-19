import React from 'react';

import './index.scss';

function Utilities({ setPaint, setWidth, setHeight, setFiller, paint }) {
  return (
    <div className="utilities-comp">
      <button
        onClick={() => {
          setWidth(5);
          setHeight(5);
          setFiller({});
        }}
        style={{ display: 'none' }}
      >
        Reset
      </button>

      <input
        id="paint-check"
        type="checkbox"
        onClick={event => {
          setPaint(!paint);
        }}
      />
      <label htmlFor="paint-check">Paint</label>
    </div>
  );
}

export default Utilities;
