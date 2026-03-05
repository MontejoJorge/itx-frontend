import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import api from '../../api';
import type { ProductDetails } from '../../types';
import styles from './product.module.scss';

export function Product() {
  const { id } = useParams();

  const { data: product } = useQuery<ProductDetails>({
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
          <ul>
            <li>
              <strong>Marca:</strong> {product.brand}
            </li>
            <li>
              <strong>Modelo:</strong> {product.model}
            </li>
            <li>
              <strong>Precio:</strong> {product.price}€
            </li>
            <li>
              <strong>CPU:</strong> {product.cpu}
            </li>
            <li>
              <strong>RAM:</strong> {product.ram}
            </li>
            <li>
              <strong>Sistema Operativo:</strong> {product.os}
            </li>
            <li>
              <strong>Resolucion de pantalla:</strong>{' '}
              {product.displayResolution}
            </li>
            <li>
              <strong>Bateria:</strong> {product.battery}
            </li>
            <li>
              <strong>Camaras:</strong>
              <ol>
                <li>Principal: {product.primaryCamera}</li>
                <li>Secundaria: {product.secondaryCmera}</li>
              </ol>
            </li>
            <li>
              <strong>Dimensiones:</strong> {product.dimentions}
            </li>
            <li>
              <strong>Peso:</strong> {product.weight && `${product.weight}g`}
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Color</span>
              <div className={styles.optionsList}>
                {product.options.colors.map((color) => (
                  <div key={color.code} className={styles.option}>
                    {color.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Almacenamiento</span>
              <div className={styles.optionsList}>
                {product.options.storages.map((storage) => (
                  <div key={storage.code} className={styles.option}>
                    {storage.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}
