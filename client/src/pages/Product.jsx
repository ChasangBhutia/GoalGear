import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay'
import { useProduct } from '../hooks/useProduct';

const Product = (props) => {
    const {productId} = useParams();
    const {product} = useProduct(productId);
     

  return (
    <section>
        <ProductDisplay product={product} role={props.user.role}/>
    </section>
  )
}

export default Product