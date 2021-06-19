import firebase from './firebase';
import { useEffect, useState } from 'react';
import './StartScreen.css';

function StartScreen() {
  const [storedUserName, setStoredUserName] = useState([]);
  const [userName, setUserName] = useState('');

  // update user name state
  const userInput = function (event) {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  // push user name to the firebase
  const storeUserInput = function (event) {
    event.preventDefault();
  };

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
          placeholder="User Name"
          onChange={userInput}
          value={userName}
        />
        <button onClick={storeUserInput}>Start</button>
      </form>
    </div>
  );
}

export default StartScreen;
