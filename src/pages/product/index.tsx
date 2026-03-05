import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
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

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, number | null>
  >({
    colors: null,
    storages: null,
  });

  useEffect(() => {
    if (!product) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedOptions({
      colors:
        product.options.colors.length === 1
          ? product.options.colors[0].code
          : null,
      storages:
        product.options.storages.length === 1
          ? product.options.storages[0].code
          : null,
    });
  }, [product]);

  const addToCart = useMutation({
    mutationFn: (data: {
      id: string;
      colorCode: number;
      storageCode: number;
    }) => api.post('cart', data),
  });

  const handleAddToCart = () => {
    if (id && selectedOptions.colors && selectedOptions.storages) {
      addToCart.mutate({
        id,
        colorCode: selectedOptions.colors,
        storageCode: selectedOptions.storages,
      });
    }
  };

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
          <Options
            options={product.options}
            selected={selectedOptions}
            onSelect={setSelectedOptions}
          />
          <button
            onClick={handleAddToCart}
            disabled={!selectedOptions.colors || !selectedOptions.storages}
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
