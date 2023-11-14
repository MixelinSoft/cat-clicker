import { useState } from 'react';
import './App.css';
import MainCat from './components/MainCat';
import Scores from './components/UI/Scores';
import Boosters from './components/Boosters/Boosters';
import ScoresPerClick from './components/UI/ScoresPerClick';

const App = () => {
  const [scores, setScores] = useState(0);
  const [boosterRatio, setBoosterRatio] = useState(1);
  const [autoClicksPerSecond, setAutoclicksPerSecond] = useState(0);

  const setScoresHandler = () => {
    setScores(+(scores + 1 * boosterRatio).toFixed(2));
  };

  const setBoosterRatioHandler = (ratio) => {
    setBoosterRatio(+(boosterRatio + ratio).toFixed(2));
  };

  return (
    <div>
      <Scores scores={scores} />
      <ScoresPerClick scoresPerClick={boosterRatio} />
      <MainCat onClick={setScoresHandler} />
      <Boosters
        onSetBoosterRatio={setBoosterRatioHandler}
        onChangeScores={setScores}
        scores={scores}
      />
    </div>
  );
};

export default App;
