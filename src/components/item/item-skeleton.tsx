import styles from './Item.module.scss';

export const ItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonImage} />
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
        <div className={styles.price}>
          <div className={styles.skeletonPrice} />
        </div>
      </div>
    </div>
  );
};