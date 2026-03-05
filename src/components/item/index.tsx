import { Link } from 'react-router';
import type { Product } from '../../types';
import styles from './Item.module.scss';

interface ItemProps {
  product: Product;
}

export const Item = ({ product }: ItemProps) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.container}>
      <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      <div className={styles.info}>
        <div className={styles.left}>
          <h3 title={product.brand}>{product.brand}</h3>
          <p title={product.model}>{product.model}</p>
        </div>
        <div className={styles.price}>
          {product.price ? product.price : '~'}€
        </div>
      </div>
    </Link>
  );
};
