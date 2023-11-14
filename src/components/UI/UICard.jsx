import styles from './UICard.module.css';

const UICard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default UICard;
