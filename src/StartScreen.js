import './StartScreen.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import GameScreen from './GameScreen';

const dbRef = firebase.database().ref();

function StartScreen() {
  const [storedUserName, setStoredUserName] = useState([]);
  const [userName, setUserName] = useState('');

  // component display
  const [viewComponent, setViewComponent] = useState(true);

  // update user name state
  const userInput = function (event) {
    // console.log(event.target.value);
    setUserName(event.target.value);
  };

  // push user name to the firebase
  const storeUserInput = function (event) {
    event.preventDefault();
    if (userName !== '') {
      dbRef.push(userName);
      alert(`${userName} has been saved`);
      setViewComponent(false);
      // console.log(userName);
    } else {
      alert('Please Enter Your Name');
    }
    // setUserName('');
  };

  useEffect(() => {
    dbRef.on('value', (res) => {
      const newArr = [];
      const data = res.val();
      for (let key in data) {
        if (userName !== data[key]) {
          newArr.push({ key: key, name: data[key] });
        }
      }
      setStoredUserName(newArr);
      // console.log(storedUserName);
    });
  }, []);

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
        {/* {storedUserName.map((item) => {
          return <div key={item.key}>{item.name}</div>;
        })} */}
      </div>
    );
  } else {
    return <GameScreen userName={userName} />;
  }
}

export default StartScreen;

// (storeUserInput, () => setViewComponent(false))

// if same name exists in the dbRef, alert and ask
// for another name
