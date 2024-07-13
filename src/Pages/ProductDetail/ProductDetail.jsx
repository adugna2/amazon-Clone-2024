// import React{useContext,useEffect, u} from 'react';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../Pages/Results/axios'; // Adjust path to axios instance
import Layout from '../../Components/layout/Layout';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating';
import classes from './Product.module.css';
import { ProductContext } from '../../ProductContext'; // Import ProductContext
import Loader from '../../Components/loader/Loader'
function ProductDetail() {
  const { productId } = useParams();
  const { state: { product, loading, error }, dispatch } = useContext(ProductContext); // Use useContext to access context values

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${productId}`); // Adjust endpoint based on API
        dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: response.data }); // Dispatch action on successful fetch
      } catch (err) {
        dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: err.message }); // Dispatch action on fetch failure
        console.error('Error fetching product:', err);
      }
    };
    fetchProduct();
  }, [dispatch, productId]);

  if (loading) {
    return <Loader loading={loading} />; // Use the Loader component
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if fetch fails
  }

  return (
    <Layout>
      <div className={classes.productDetails}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} className={classes.productImage} />
        <div className={classes.productInfo}>
          <div>
            <h3>Price:</h3>
            <p><CurrencyFormat amount={product.price} /></p>
          </div>
          <div>
            <h3>Rating:</h3>
            <Rating value={product.rating?.rate} precision={0.1} />
            <small>{product.rating?.count} reviews</small>
          </div>
          <div>
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;