import styles from './BoosterButton.module.css';
import UICard from '../UI/UICard';
const BoosterButton = ({
  onSetBoosterRatio,
  boosterName,
  boosterRatio,
  boosterCost,
  onChangeScores,
  scores,
}) => {
  const onClickBoosterHandler = () => {
    if (scores >= boosterCost) {
      onSetBoosterRatio(boosterRatio);
      onChangeScores(+(scores - boosterCost).toFixed(2));
    }
  };

  return (
    <UICard
      className={`${styles.boosterContainer} ${
        scores >= boosterCost ? '' : styles.inActive
      }`}>
      <button onClick={onClickBoosterHandler}>
        Click here to activate +{boosterRatio} on click
      </button>
      <p>{boosterName}</p>
      <p>Cost: {boosterCost}</p>
    </UICard>
  );
};

export default BoosterButton;
