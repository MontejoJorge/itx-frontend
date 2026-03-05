import type { ProductDetailsI } from '../../types';

interface ProductDetailsProps {
  product: ProductDetailsI;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
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
        <strong>Resolucion de pantalla:</strong> {product.displayResolution}
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
  );
};
