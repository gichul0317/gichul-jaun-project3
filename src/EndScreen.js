// ul li 15 to 20 players
// list players in recent orders (방금 에드된 순서대로)
// player click play again button
// send player back to startscreen.js

// add play music functionality in startscreen

import GameScreen from './GameScreen';
import './EndScreen.css';

function EndScreen() {
  return (
    <div className="end">
      <h1>Players Won</h1>
      <ul>
        <li>admin</li>
        <li>Tester</li>
      </ul>
      <button>Play Again</button>
    </div>
  );
}

export default EndScreen;
