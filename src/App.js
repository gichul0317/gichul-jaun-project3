// import packages
import { useState, useEffect } from 'react';

// import css and images
import './App.css';
import virus from './assets/virus.svg';
import player from './assets/player.svg';

// import components
import StartScreen from './StartScreen';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <StartScreen></StartScreen>
        <img src={virus} alt="" />
        <img src={player} alt="" />
      </div>
    </div>
  );
}

export default App;
