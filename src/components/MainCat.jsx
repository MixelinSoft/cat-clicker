import styles from './MainCat.module.css';
const MainCat = ({ onClick }) => {
  return (
    <div className={styles.mainCat}>
      <button className={styles.mainCat__button} onClick={onClick}>
        CAT
      </button>
    </div>
  );
};

export default MainCat;
