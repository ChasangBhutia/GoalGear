import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay'
import { useProduct } from '../hooks/useProduct';

const Product = ({user}) => {
    const {productId} = useParams();
    const {product} = useProduct(productId);
     

  return (
    <>
        <ProductDisplay product={product} role={user.role}/>
    </>
  )
}

export default Product