import type { Product } from '../../types';
import styles from './Item.module.scss';

interface ItemProps {
  product: Product;
}

export const Item = ({ product }: ItemProps) => {
  return (
    <div className={styles.container} tabIndex={0}>
      <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      <div className={styles.info}>
        <div>
          <h3>{product.brand}</h3>
          <p>{product.model}</p>
        </div>
        <div className={styles.price}>
          {product.price ? product.price : '~'}€
        </div>
      </div>
    </div>
  );
};
