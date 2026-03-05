import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import api from '../../api';
import { Item } from '../../components/item';
import type { Product } from '../../types';
import styles from './home.module.scss';

export function Home() {
  const [search, setSearch] = useState('');

  const query = useQuery<Product[]>({
    queryKey: ['product'],
    queryFn: () => api.get('product'),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });

  const filteredProducts = query?.data?.filter((product) => {
    const searchLower = search.toLowerCase();
    return (
      product.brand.toLowerCase().includes(searchLower) ||
      product.model.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h4>Products</h4>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
      </div>
      <div className={styles.products}>
        {filteredProducts?.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
