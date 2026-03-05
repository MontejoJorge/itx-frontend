import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import api from '../../api';
import { Options } from '../../components/options';
import { ProductDetails } from '../../components/product-details';
import type { ProductDetailsI } from '../../types';
import styles from './product.module.scss';

export function Product() {
  const { id } = useParams();

  const { data: product } = useQuery<ProductDetailsI>({
    queryKey: ['product', id],
    queryFn: () => api.get(`product/${id}`),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });

  if (!product) return null;

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <ProductDetails product={product} />
        </div>
        <div className={styles.bottom}>
          <Options options={product.options} />
          <button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}
