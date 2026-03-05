import { useParams } from 'react-router';

export function Product() {
  const { id } = useParams();

  return <div>Product ID: {id}</div>;
}
