import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay'
import MenuBar from '../components/MenuBar';
import { useProduct } from '../hooks/useProduct';

const Product = () => {
    const {productId} = useParams();
    const {product} = useProduct(productId);
   
  return (
    <div>
        <MenuBar/>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product