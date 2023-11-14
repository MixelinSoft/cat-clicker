import styles from './Boosters.module.css';

import UICard from '../UI/UICard';
import BoosterButton from './BoosterButton';

const Boosters = ({ onSetBoosterRatio, onChangeScores, scores }) => {
  const boosters = [
    {
      boosterName: 'Booster 1',
      boosterRatio: 0.01,
      boosterCost: 10,
    },
    {
      boosterName: 'Booster 2',
      boosterRatio: 5,
      boosterCost: 50,
    },
  ];
  return (
    <UICard className={styles.boostersContainer}>
      {boosters.map((booster) => (
        <BoosterButton
          onSetBoosterRatio={onSetBoosterRatio}
          boosterName={booster.boosterName}
          key={booster.boosterName}
          boosterRatio={booster.boosterRatio}
          boosterCost={booster.boosterCost}
          scores={scores}
          onChangeScores={onChangeScores}
        />
      ))}
    </UICard>
  );
};

export default Boosters;
