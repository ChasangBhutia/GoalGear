import { useState, useEffect } from "react"
import { getAllProducts, getProduct, createProduct, deleteProduct } from "../services/ProductServices";
import { useNavigate } from "react-router-dom";

export const useProduct = (productId) => {
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [refreshProduct, setRefreshProduct] = useState(0);
    const navigate = useNavigate();

    // asign all products as an array 
    useEffect(() => {
        const getProducts = async () => {
            try {
                let response = await getAllProducts();
                if (response.data.success) {
                    setAllProducts(response.data.products.reverse());
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        getProducts();
    }, [refreshProduct]);

    // get particular product
    useEffect(() => {
        if (!productId) {
            return;
        }
        const fetchProduct = async () => {
            try {
                let response = await getProduct(productId);
                if (response.data.success) {
                    setProduct(response.data.product);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchProduct();
    }, [])

    // Create product Only for admin
    const createNewProduct = async (productData) => {
        try {
            let response = await createProduct(productData);
            alert(response.data.message);
            setRefreshProduct(refreshProduct + 1);
        } catch (err) {
            console.log(err.message);
        }
    }

    // Delete product Only for admin

    const deleteItem = async (productId) => {
        try {
            let response = await deleteProduct(productId);
            if (response.data.success) {
                alert(response.data.message);
                navigate('/admin/all-products');
            }
        } catch (err) {
            console.log(err.message);
        }
    }



    return { allProducts, product, createNewProduct, deleteItem }
}