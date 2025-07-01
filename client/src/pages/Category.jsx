import { useParams } from 'react-router-dom'
import CategorySection from '../components/CategorySection';
import { useProduct } from '../hooks/useProduct';

const Category = () => {
    const { type } = useParams();
    const { allProducts } = useProduct();

    const categoryProducts = allProducts.filter(p => p.category === type);
    return (
        <>
            <CategorySection type={type} categoryProducts={categoryProducts} />
        </>
    )
}

export default Category;