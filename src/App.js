import './App.css';

// import packages
import { useState, useEffect } from 'react';

// import components
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import Footer from './Footer';
import EndScreen from './EndScreen';

function App() {
  // const [currentComponent, setCurrentComponent] = useState(1);

  // const handleComponent = () => {
  //   switch (currentComponent) {
  //     case 1:
  //       setCurrentComponent(2);
  //       break;
  //     case 2:
  //       setCurrentComponent(1);
  //       break;
  //     // case 3:
  //     //   setCurrentComponent(1);
  //   }
  // };

  return (
    <div className="App">
      <div className="wrapper">
        <StartScreen />
        {/* <GameScreen /> */}
        {/* {currentComponent == 1 && <StartScreen />}
        {currentComponent == 2 && <GameScreen />} */}
        {/* <EndScreen /> */}
      </div>
      {/* <button
        onClick={() => {
          handleComponent();
        }}
      >
        Start
      </button> */}
      <Footer />
    </div>
  );
}

export default App;
