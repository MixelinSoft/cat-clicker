import styles from './MainCat.module.css';
import background from '../images/background.jpg';
const MainCat = ({ onClick }) => {
  return (
    <div className={styles.mainCat}>
      <button
        className={styles.mainCat__button}
        onClick={onClick}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}>
        Pet
      </button>
    </div>
  );
};

export default MainCat;
