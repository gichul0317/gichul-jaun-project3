import './EndScreen.css';
import { useState } from 'react';
import StartScreen from './StartScreen';
import firebase from './firebase';
import endMusic from './assets/game-clear.mp3';

const gameClearMusic = new Audio(endMusic);
const dbRef = firebase.database().ref();

function EndScreen({ playerList }) {
  // component display state
  const [viewComponent, setViewComponent] = useState(true);

  // delete player name from firebase
  const deletePlayerList = (key) => {
    dbRef.child(key).remove();
  };
  // if viewcomponent state is true, rendering endscreen
  if (viewComponent) {
    gameClearMusic.play();
    return (
      <div className="end">
        <h1>Players Won</h1>
        <ul>
          {playerList.map((item) => {
            return (
              <li key={item.key}>
                {item.name}
                <button
                  onClick={() => {
                    deletePlayerList(item.key);
                  }}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="play-btn"
          onClick={() => {
            setViewComponent(false);
          }}
        >
          Play Again
        </button>
      </div>
    );
    // if viewcomponent state is false, rendering startscreen
  } else {
    return <StartScreen />;
  }
}

export default EndScreen;
