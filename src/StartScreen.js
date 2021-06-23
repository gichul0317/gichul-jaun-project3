import './StartScreen.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import GameScreen from './GameScreen';
import LoadingScreen from './LoadingScreen';

const dbRef = firebase.database().ref();

function StartScreen() {
  // user name state array for firebase
  const [storedUserName, setStoredUserName] = useState([]);
  // user name state
  const [userName, setUserName] = useState('');
  // component display state
  const [viewComponent, setViewComponent] = useState(true);
  // delay state for loading screen
  const [delay, setDelay] = useState(false);

  // update user name state
  const userInput = function (event) {
    setUserName(event.target.value);
  };

  // push user name to the firebase
  const storeUserInput = function (event) {
    event.preventDefault();
    if (userName !== '') {
      dbRef.push(userName);
      alert(`${userName} has been saved`);
      // change view component state to display gamescreen
      setViewComponent(false);
    } else {
      alert('Please Enter Your Name');
    }
  };

  useEffect(() => {
    dbRef.on('value', (res) => {
      const newArr = [];
      const data = res.val();
      for (let key in data) {
        newArr.push({ key: key, name: data[key] });
      }
      setStoredUserName(newArr);
    });
  }, [userName]);

  // if view component state is true, rendering startscreen
  if (viewComponent) {
    return (
      <div className="start">
        <h1>Vid Monster</h1>
        <form action="submit">
          <label htmlFor="userName" className="sr-only">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            required
            placeholder="Player Name"
            onChange={userInput}
            value={userName}
          />
          <button onClick={storeUserInput}>
            {userName === '' ? 'Loading...' : 'Start'}
          </button>
        </form>
      </div>
    );
    // if view component state is false, rendering loading screen and then gamescreen
  } else {
    setTimeout(() => {
      setDelay(true);
    }, 2000);
    if (!delay) {
      return <LoadingScreen />;
    } else {
      return <GameScreen userName={userName} playerList={storedUserName} />;
    }
  }
}

export default StartScreen;
