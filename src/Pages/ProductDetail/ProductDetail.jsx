import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../Pages/Results/axios'; // Adjust path to axios instance
import Layout from '../../Components/layout/Layout';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating'; 
import classes from './Product.module.css'; // Adjust the path and file name for CSS
import { ProductContext } from '../../APi/ProductContext'; // Ensure correct path
import Loader from '../../Components/loader/Loader'; // Adjust the path to Loader

function ProductDetail() {
  const { productId } = useParams();
  const { state: { product, loading, error }, dispatch } = useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch({ type: 'FETCH_PRODUCT_REQUEST' });
        const response = await axios.get(`/products/${productId}`); // Adjust endpoint based on API
        dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: response.data });
      } catch (err) {
        dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: err.message });
        console.error('Error fetching product:', err);
      }
    };
    fetchProduct();
  }, [dispatch, productId]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Layout>
      <div className={classes.productDetails}>
        <h2>{product?.title}</h2>
        <img src={product?.image} alt={product?.title} className={classes.productImage} />
        <div className={classes.productInfo}>
          <div>
            <h3>Price:</h3>
            <p><CurrencyFormat amount={product?.price} /></p>
          </div>
          <div>
            <h3>Rating:</h3>
            <Rating value={product?.rating?.rate} precision={0.1} readOnly />
            <small>{product?.rating?.count} reviews</small>
          </div>
          <div>
            <h3>Description:</h3>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
