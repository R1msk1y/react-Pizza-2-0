import styles from './NotFound.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default NotFoundBlock;
