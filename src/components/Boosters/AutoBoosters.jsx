import UICard from '../UI/UICard';
import BoosterButton from './BoosterButton';
import styles from './AutoBoosters.module.css';

const AutoBoosters = ({ onSetAutoclicksPerSecond, onChangeScores, scores }) => {
  const boosters = [
    {
      boosterName: 'Autoclick 1',
      boosterRatio: 0.01,
      boosterCost: 10,
      type: 'autoClick',
    },
    {
      boosterName: 'Autoclick 2',
      boosterRatio: 0.5,
      boosterCost: 50,
      type: 'autoClick',
    },
  ];

  return (
    <UICard className={styles.boostersContainer}>
      {boosters.map((booster) => (
        <BoosterButton
          onSetBoosterRatio={onSetAutoclicksPerSecond}
          boosterName={booster.boosterName}
          key={booster.boosterName}
          boosterRatio={booster.boosterRatio}
          boosterCost={booster.boosterCost}
          scores={scores}
          onChangeScores={onChangeScores}
          type={booster.type}
        />
      ))}
    </UICard>
  );
};

export default AutoBoosters;
