import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './Pages/Auth/Auth.jsx';
import Payment from './Pages/Payment/Payment.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Order from './Pages/Orders/Order.jsx';
import Landing from './Pages/Landing/Landing.jsx';
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const stripePromise = loadStripe('pk_test_51PeZJ1Rvc6oDJXGZTmFcnZkkN53yLsZ4FUlUCIMh6FoQZLYteXGxVdVijaSbdJaCRahouvq9Wo6Ab0BZOECAyDRm00DSAJtBkx');

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" 
          element={
            <ProtectedRoute msg={"You must log in to pay"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/order" 
          element={
            <ProtectedRoute msg={"You must log in to access your orders"} redirect={"/auth"}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
