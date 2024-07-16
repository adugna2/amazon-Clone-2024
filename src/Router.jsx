import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import SignIn from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart'; // Import the Cart component

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<SignIn />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/category/:categoryName" element={<Results />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
            </Routes>
        </Router>
    )
};

export default Routing;
