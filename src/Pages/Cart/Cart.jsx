import React, { useContext } from 'react';
import Layout from '../../Components/layout/Layout';
import { CartContext } from '../../CartContext';
import classes from './Cart.module.css'; // Create and adjust the path for CSS module
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
function Cart() {
  const { state } = useContext(CartContext);
  const { cart } = state;

  return (
    <Layout>
      <div className={classes.cartPage}>
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className={classes.cartItem}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><CurrencyFormat amount={item.price} /></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
