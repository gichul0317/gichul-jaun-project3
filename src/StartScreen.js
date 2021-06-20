import './StartScreen.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';

const dbRef = firebase.database().ref();

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
    if (userName !== '') {
      dbRef.push(userName);
    } else {
      alert('Please Enter Your Name');
    }
    setUserName('');
  };

  useEffect(() => {
    dbRef.on('value', (res) => {
      const newArr = [];
      const data = res.val();
      for (let key in data) {
        newArr.push(data[key]);
      }
      setStoredUserName(newArr);
    });
  }, []);

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
          {userName === '' ? 'Loading...' : 'save your name'}
        </button>
      </form>
    </div>
  );
}

export default StartScreen;
