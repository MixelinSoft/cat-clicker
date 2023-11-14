import styles from './ScoresPerClick.module.css';

import UICard from './UICard';

const ScoresPerClick = ({ scoresPerClick }) => {
  return (
    <UICard className={styles.scoresPerClickContainer}>
      Scores Per Click: {scoresPerClick}
    </UICard>
  );
};

export default ScoresPerClick;
