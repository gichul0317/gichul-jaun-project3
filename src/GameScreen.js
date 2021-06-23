import './GameScreen.css';
import virus from './assets/virus.svg';
import player from './assets/player.svg';
import { useEffect, useState } from 'react';
import gameMusic from './assets/game-playing.mp3';
import EndScreen from './EndScreen';
import LoadingScreen from './LoadingScreen';

const backgroundMusic = new Audio(gameMusic);

function GameScreen({ userName, playerList }) {
  // game console message state
  const [gameMessage, setGameMessage] = useState(
    `${userName}, what will you do?`
  );
  // vid monster health state
  const [opponentHealth, setOpponentHealth] = useState(100);
  // player heatlh status state
  const [playerHealth, setPlayerHealth] = useState(100);
  // vid monster animation state
  const [vidAnimation, setVidAnimation] = useState(false);
  // player animation state
  const [playerAnimation, setPlayerAnimation] = useState(false);
  // button disable state
  const [disable, setDisable] = useState(false);
  // delay state for loading screen
  const [delay, setDelay] = useState(false);
  // view component state
  const [viewComponent, setViewComponent] = useState(true);

  // use effect for finishing the game
  useEffect(() => {
    if (opponentHealth <= 0) {
      setDisable(true);
      setGameMessage('Finishing Blow!!!');
      setVidAnimation(true);
      setTimeout(() => {
        setViewComponent(false);
      }, 1500);
    }
  }, [opponentHealth]);

  // social distancing button
  const socialDistancing = () => {
    if (opponentHealth > 0) {
      setDisable(true);
      setGameMessage('Social Distancing!!!');
      setVidAnimation(true);
      setOpponentHealth(opponentHealth - 10);
      setTimeout(() => {
        setVidAnimation(false);
        setGameMessage('Virus Attacking!!!');
        setPlayerAnimation(true);
        setPlayerHealth(playerHealth - 5);
        setTimeout(() => {
          setDisable(false);
          setPlayerAnimation(false);
          setGameMessage(`${userName}, what will you do?`);
        }, 2000);
      }, 2000);
    }
  };

  // wash hands button
  const washHands = () => {
    if (opponentHealth > 0) {
      setDisable(true);
      setGameMessage('Wash Hands!!!');
      setVidAnimation(true);
      setOpponentHealth(opponentHealth - 15);
      setTimeout(() => {
        setVidAnimation(false);
        setGameMessage('Virus Attacking!!!');
        setPlayerAnimation(true);
        setPlayerHealth(playerHealth - 5);
        setTimeout(() => {
          setDisable(false);
          setPlayerAnimation(false);
          setGameMessage(`${userName}, what will you do?`);
        }, 2000);
      }, 2000);
    }
  };

  // mask wear button
  const maskWearing = () => {
    if (opponentHealth > 0) {
      setDisable(true);
      setGameMessage('Wear a Mask!!!');
      setVidAnimation(true);
      setOpponentHealth(opponentHealth - 20);
      setTimeout(() => {
        setVidAnimation(false);
        setGameMessage('Virus Attacking!!!');
        setPlayerAnimation(true);
        setPlayerHealth(playerHealth - 5);
        setTimeout(() => {
          setDisable(false);
          setPlayerAnimation(false);
          setGameMessage(`${userName}, what will you do?`);
        }, 2000);
      }, 2000);
    }
  };

  // vaccine shot button
  const vaccineShot = () => {
    if (opponentHealth <= 40 && opponentHealth > 0) {
      setDisable(true);
      setGameMessage('Vaccinated!!!');
      setVidAnimation(true);
      setOpponentHealth(opponentHealth - 25);
      setTimeout(() => {
        setVidAnimation(false);
        setGameMessage('Virus Attacking!!!');
        setPlayerAnimation(true);
        setPlayerHealth(playerHealth - 5);
        setTimeout(() => {
          setDisable(false);
          setPlayerAnimation(false);
          setGameMessage(`${userName}, what will you do?`);
        }, 2000);
      }, 2000);
    } else if (opponentHealth > 40) {
      setDisable(true);
      setGameMessage('Not Ready Yet!!!');
      setTimeout(() => {
        setGameMessage('Virus Attacking!!!');
        setPlayerAnimation(true);
        setPlayerHealth(playerHealth - 5);
        setTimeout(() => {
          setDisable(false);
          setPlayerAnimation(false);
          setGameMessage(`${userName}, what will you do?`);
        }, 2000);
      }, 2000);
    }
  };

  // if viewcomponent is true, rendering gamescreen
  if (viewComponent) {
    backgroundMusic.play();
    return (
      <div className="game">
        <section className="vidMonster">
          <div className="vidMonster-info">
            <div className="vidMonster-box">
              <div className="vidMonster-text">
                <p>VIRUS</p>
                <p>Lv.??</p>
              </div>
              <div className="vidMonster-health">
                <label htmlFor="vidMonHP">HP:</label>
                <progress id="vidMonHP" max="100" value={opponentHealth}>
                  100%
                </progress>
              </div>
            </div>
          </div>
          <div className="vidMonster-img">
            <img
              src={virus}
              alt="vid monster character"
              className={vidAnimation ? 'vidMonster-animation' : null}
            />
          </div>
        </section>

        <section className="player">
          <div className="player-info">
            <div className="player-box">
              <div className="player-text">
                <p>PLAYER</p>
                <p>Lv.??</p>
              </div>
              <div className="player-health">
                <label htmlFor="playerHP">HP:</label>
                <progress id="playerHP" max="100" value={playerHealth}>
                  100%
                </progress>
              </div>
            </div>
          </div>
          <div className="player-img">
            <img
              src={player}
              alt="player character"
              className={playerAnimation ? 'player-animation' : null}
            />
          </div>
        </section>

        <section className="menu">
          <div className="menu-text">
            <p>{gameMessage}</p>
          </div>
          <div className="menu-buttons">
            <button onClick={socialDistancing} disabled={disable}>
              Social Distancing
            </button>
            <button onClick={washHands} disabled={disable}>
              Wash Hands
            </button>
            <button onClick={maskWearing} disabled={disable}>
              Mask Wearing
            </button>
            <button onClick={vaccineShot} disabled={disable}>
              Vaccine Shot
            </button>
          </div>
        </section>
      </div>
    );
    // if view component is false, rendering loading screen and then end screen
  } else {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    setTimeout(() => {
      setDelay(true);
    }, 2000);
    if (!delay) {
      return <LoadingScreen />;
    } else {
      return <EndScreen playerList={playerList} />;
    }
  }
}

export default GameScreen;
