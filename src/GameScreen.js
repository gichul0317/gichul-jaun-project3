import './GameScreen.css';
import virus from './assets/virus.svg';
import player from './assets/player.svg';
import { useState } from 'react';

function GameScreen() {
  const [opponentHealth, setOpponentHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);

  const socialDistancing = () => {
    setOpponentHealth(opponentHealth - 10);
    setTimeout(() => {
      setPlayerHealth(playerHealth - 5);
    }, 2000);
  };

  const washHands = () => {
    setOpponentHealth(opponentHealth - 20);
  };

  const maskWearing = () => {
    setOpponentHealth(opponentHealth - 30);
  };

  const vaccineShot = () => {
    setOpponentHealth(opponentHealth - 40);
  };

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
          <img src={virus} alt="vid monster character" />
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
          <img src={player} alt="player character" />
        </div>
      </section>

      <section className="menu">
        <div className="menu-text">
          <p>{`what will you do?`}</p>
        </div>
        <div className="menu-buttons">
          <button onClick={socialDistancing}>Social Distancing</button>
          <button onClick={washHands}>Wash Hands</button>
          <button onClick={maskWearing}>Mask Wearing</button>
          <button onClick={vaccineShot}>Vaccine Shot</button>
        </div>
      </section>
    </div>
  );
}

export default GameScreen;
