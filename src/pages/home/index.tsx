import { useQuery } from '@tanstack/react-query';
import api from '../../api';
import { Item } from '../../components/item';
import type { Product } from '../../types';
import styles from './home.module.scss';

export function Home() {
  const query = useQuery<Product[]>({
    queryKey: ['product'],
    queryFn: () => api.get('product'),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h4>Products</h4>
        <input type="text" />
      </div>
      <div className={styles.products}>
        {query?.data?.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
