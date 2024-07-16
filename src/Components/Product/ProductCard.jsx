
// ProductCard.jsx
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from '../Product/css/Product.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext'; // Adjust the path accordingly

function ProductCard({ Product }) {
  const { image, title, rating, id, price } = Product;
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: Product });
  };

  return (
    <div className={classes.card__container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  Product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;








// import Rating from '@mui/material/Rating'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import classes from '../Product/css/Product.module.css'
// import { Link } from 'react-router-dom';

// function ProductCard({ Product }) {
//   const { image, title, rating,id, price } = Product;

//   return (
//     <div className={`${classes.card__container}`}> 
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title}/>
//       </Link>

//       <div>
//         <h3>{title}</h3>
        
//         <div className={classes.rating}>
//           <Rating value={rating.rate} precision={0.1}/>
//           <small>{rating.count}</small>
//         </div>
        
//         <div className={classes.price}>
//           <CurrencyFormat amount={price}/>
//         </div>
        
//         <button className={classes.button}>Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


















// // import React from 'react'
// // import Rating from '@mui/material/Rating';
// // import CurrencyFormat from '../Componets/CurrencyFormat/CurrencyFormat';
// // import classes from './css/Product.modules.css'
// // function ProductCard({product}) {
// //   const {image,title,id,rating,price}=product;
// //   return (
// //     <div className={`${classes.card__container}`}>
// //         <a href=''>
// //             <img src={image}alt=''/>
// //         </a>
// //    <div>
// //    <h3> title</h3>
// //    <div className={
// //     classes.rating }>
// //     {/* rating */}
// //     <rating value={rating.rate} precision={0.1}/>
// //     {/* count */}
// //     <small> {rating.count}(60)</small>
// //     {/* price  */}
// //    </div>
// //    <div>
// //     {/* price */}
// //     <CurrencyFormat amount={price}/>
// //    </div>
// //    <button className={classes.button}/>
// //     </div>
// // add cart
// //     </div>
// //   )
// // }

// // export default ProductCard