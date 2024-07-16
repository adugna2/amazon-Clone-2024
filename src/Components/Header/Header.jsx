import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from 'react-icons/sl';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import classes from '../Header/css/Header.module.css';
import flag from '../../image/flag.jpg';
import LowerHeader from "./LowerHeader";

function Header() {
  const { state } = useContext(CartContext);
  const cartCount = state.cart.length;

  return (
    <>
      <header className={classes.stickyHeader}>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
          </div>

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <div>Ethiopia</div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="category" id="category-select">
              <option value="">All</option>
            </select>
            <input type="text" id="search-input" placeholder="Search products" aria-label="Search products" />
            <FaSearch size={25} />
          </div>

          <div className={classes.order_container}>
            <div className={classes.language}>
              <img src={flag} />
              <select name="language" id="language-select">
                <option value="en">EN</option>
              </select>
            </div>

            <Link to="">
              <div>
                <p>Sign In</p>
                <div>Account & Lists</div>
              </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <div>& Orders</div>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BsCart size={35} />
              <span>{cartCount}</span>
            </Link>
          </div>
        </div>
      </header>
      <LowerHeader />
    </>
  );
}

export default Header;
