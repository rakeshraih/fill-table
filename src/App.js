import React, { useState } from 'react';
import Table from './components/Table';
import Input from './components/Input';
import Filler from './components/Filler';
import Menu from './components/Menu';

import { AppProvider, FillerProvider } from './AppContext';

import './App.scss';
import Utilities from './components/Utilities';
import User from './components/User';

function App() {
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const [filler, setFiller] = useState({});
  const [paint, setPaint] = useState(false);

  return (
    <FillerProvider value={{ filler }}>
      <AppProvider value={{ width, height, paint }}>
        <section className="App">
          <h2>Demo of Event Delegation, Component reuse, Debouse, Mouse Events, Re-rerenders etc</h2>
          <div className="filler-container">
            <div>
              <Menu
                selected={filler.name === 'emoji'}
                onChange={component => {
                  setFiller({ component, name: 'emoji' });
                }}
              ></Menu>
              <Filler name="B" selected={filler.name === 'B'} setFiller={setFiller}>
                <span>B</span>
              </Filler>
              <Filler reset name="E" selected={filler.name === 'E'} setFiller={setFiller}>
                <span>E</span>
              </Filler>
            </div>
            <div>
              <Input
                onBlur={value => {
                  setHeight(value);
                }}
                name="height"
                id="height-input"
              ></Input>
              <Input
                onBlur={value => {
                  setWidth(value);
                }}
                name="width"
                id="width-input"
              ></Input>
            </div>
          </div>
          <User></User>
          <Utilities {...{ setPaint, setWidth, setHeight, setFiller, paint }}></Utilities>
          <Table></Table>
        </section>
      </AppProvider>
    </FillerProvider>
  );
}

export default App;
