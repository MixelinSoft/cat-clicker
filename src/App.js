import { useEffect, useState } from 'react';
import './App.css';
import MainCat from './components/MainCat';
import Scores from './components/UI/Scores';
import Boosters from './components/Boosters/Boosters';
import ScoresPerClick from './components/UI/ScoresPerClick';
import AutoBoosters from './components/Boosters/AutoBoosters';

const App = () => {
  const [scores, setScores] = useState(0);
  const [boosterRatio, setBoosterRatio] = useState(1);
  const [autoClicksPerSecond, setAutoclicksPerSecond] = useState(0);

  useEffect(() => {
    if (autoClicksPerSecond > 0) {
      const interval = setInterval(() => {
        setScores(+(scores + autoClicksPerSecond).toFixed(2));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [scores]);

  const setScoresHandler = () => {
    setScores(+(scores + 1 * boosterRatio).toFixed(2));
  };

  const setBoosterRatioHandler = (ratio) => {
    setBoosterRatio(+(boosterRatio + ratio).toFixed(2));
  };

  const setAutoclicksPerSecondHandler = (ratio) => {
    setAutoclicksPerSecond(+(autoClicksPerSecond + ratio).toFixed(2));
  };

  return (
    <>
      <Scores scores={scores} />
      <ScoresPerClick scoresPerClick={boosterRatio} />
      <MainCat onClick={setScoresHandler} />
      <Boosters
        onSetBoosterRatio={setBoosterRatioHandler}
        onChangeScores={setScores}
        scores={scores}
      />
      <AutoBoosters
        onSetAutoclicksPerSecond={setAutoclicksPerSecondHandler}
        onChangeScores={setScores}
        scores={scores}
      />
    </>
  );
};

export default App;
