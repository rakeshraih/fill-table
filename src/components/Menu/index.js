import React, { useState, useEffect } from 'react';
import { EmojiList, EmojiSourceBaseURL } from '../../Constants';
import './index.scss';

const createImgTag = val => {
  return <img alt={val.name} role="button" src={`${EmojiSourceBaseURL}/${val.src}`}></img>;
};

function getIconsList(setInputValue, onChange) {
  return EmojiList.map(val => (
    <li
      onClick={() => {
        const newImg = createImgTag(val);
        onChange(newImg);
        setInputValue(newImg);
      }}
      key={val.name}
      tabIndex="0"
    >
      {createImgTag(val)}
    </li>
  ));
}

function Menu({ onChange, selected }) {
  const [inputValue, setInputValue] = useState(createImgTag(EmojiList[0]));
  const [optionExpanded, setOptionExpanded] = useState(false);

  const clickListener = () => {
    if (optionExpanded) {
      setOptionExpanded(!optionExpanded);
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickListener);
    return () => {
      window.removeEventListener('click', clickListener);
    };
  });

  return (
    <div className={`menu-comp ${optionExpanded ? 'active' : ''}`}>
      <button
        aria-label="Emoji Picker"
        onClick={() => {
          setOptionExpanded(!optionExpanded);
        }}
        aria-expanded={optionExpanded}
        tabIndex="0"
        aria-controls="menu-items"
        className={`fill-item ${selected ? 'selected' : ''}`}
      >
        {inputValue}
      </button>
      <ul aria-hidden={!optionExpanded} id="menu-items">
        {getIconsList(setInputValue, onChange)}
      </ul>
    </div>
  );
}

export default Menu;
