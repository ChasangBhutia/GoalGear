import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay'
import { useProduct } from '../hooks/useProduct';

const Product = () => {
    const {productId} = useParams();
    const {product} = useProduct(productId);
   
  return (
    <div>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product