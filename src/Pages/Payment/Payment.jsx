import { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from './Payment.module.css';
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormater from "../../Components/currencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {

const [{ user, basket }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const totalItems = basket?.reduce((amount, item) => amount + item.amount, 0);
  const totalPrice = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setLoading(false);
    if (e?.error) {
      setError(e.error.message);
    } else {
      setError(null);
    }
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
try {
      const response = await axiosInstance.post(
        `/payment/create?total=${totalPrice * 100}`
      );
      const clientSecret = response.data.clientSecret;
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      const paymentIntent = paymentResult.paymentIntent;
      console.log(paymentIntent);
      if (paymentResult.error) {
        setError(`Payment failed: ${paymentResult.error.message}`);
      }
      try {
        await db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        dispatch({
          type: Type.EMPTY_BASKET,
        });
        navigate("/order", { state: { msg: "You have placed a new order" } });
      } catch (error) {
        console.error("Error adding order: ", error);
      }
    } catch (err) {
      setError(`Payment failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <LayOut>
      <div className={classes.Payment_header}>
        Checkout ({totalItems}) items
      </div>
      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.Payment_Card_container}>
            <div className={classes.Payment_details}>
              <form onSubmit={handlePayment}>
                {error && <small style={{ color: "red" }}>{error}</small>}
                <CardElement onChange={handleChange} />
                <div className={classes.Payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormater amount={totalPrice} />
                    </span>
                  </div>
                  <button type="submit">
                    {loading ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
