import React, { useState } from 'react';

import './index.scss';

function Input({ onBlur, name, id, value }) {
  const [inputValue, setInputValue] = useState(value || 15);

  return (
    <div className="input-comp">
      <label htmlFor={id}>{name}</label>
      <input
        type="number"
        min="1"
        max="15"
        value={inputValue}
        name={name}
        id={id}
        onChange={event => setInputValue(event.target.value)}
        onBlur={event => onBlur(event.target.value)}
      />
    </div>
  );
}

export default Input;
