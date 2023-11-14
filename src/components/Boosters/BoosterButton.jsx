import styles from './BoosterButton.module.css';
import UICard from '../UI/UICard';
const BoosterButton = ({
  onSetBoosterRatio,
  boosterName,
  boosterRatio,
  boosterCost,
  onChangeScores,
  scores,
  type,
}) => {
  const onClickBoosterHandler = () => {
    if (scores >= boosterCost) {
      onSetBoosterRatio(boosterRatio);
      onChangeScores(+(scores - boosterCost).toFixed(2));
    }
  };

  const boosterTitle =
    type === 'autoClick'
      ? `Click here to activate +${boosterRatio}scores per seconds`
      : `Click here to activate +${boosterRatio}scores per click`;

  return (
    <UICard
      className={`${styles.boosterContainer} ${
        scores >= boosterCost ? '' : styles.inActive
      }`}>
      <button onClick={onClickBoosterHandler}>{boosterTitle}</button>
      <p>{boosterName}</p>
      <p>Cost: {boosterCost}</p>
    </UICard>
  );
};

export default BoosterButton;
