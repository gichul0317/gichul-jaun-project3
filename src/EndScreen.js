// ul li 15 to 20 players
// list players in recent orders (방금 에드된 순서대로)
// player click play again button
// send player back to startscreen.js

// add play music functionality in startscreen

import './EndScreen.css';
import { useState } from 'react';
import StartScreen from './StartScreen';

function EndScreen({ playerList }) {
  const [viewComponent, setViewComponent] = useState(true);

  if (viewComponent) {
    return (
      <div className="end">
        <h1>Players Won</h1>
        <ul>
          {playerList.map((item) => {
            return <li key={item.key}>{item.name}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            setViewComponent(false);
          }}
        >
          Play Again
        </button>
      </div>
    );
  } else {
    return <StartScreen />;
  }
}

export default EndScreen;
