import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Pages/Auth/SignUp.jsx'
import Payment from './Pages/Payment/Payment.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Order from './Pages/Orders/Order.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<SignUp />} />
        <Route path="payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing