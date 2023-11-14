import styles from './Scores.module.css';
import UICard from './UICard';

const Scores = ({ scores }) => {
  return <UICard className={styles.scoresContainer}>Scores: {scores}</UICard>;
};

export default Scores;
