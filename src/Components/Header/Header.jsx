
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from 'react-icons/sl';
import { BsCart } from 'react-icons/bs';
// import log from '../resource/amazon_PNG25.png'
import LowerHeader from './LowerHeader';
import classes from '../Header/css/Header.module.css'
  import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
    <header>
      <div className= {classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"          
            />
            {/* {log} /> */}
          </Link> 
        </div>

        {/* Delivery */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <div>Ethiopia</div>
          </div>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select name="category" id="category-select">
            <option value="">All</option>
            {/* Add more categories as options here */}
          </select>
          <input type="text" id="search-input" placeholder="Search products" aria-label="Search products" />
          <FaSearch size={25} />
        </div>

        {/* Right side links */}
        <div className={classes.order_container}>
          {/* Language selection */}
          <div className={classes.language}>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Language selection" />
            <select name="language" id="language-select">
              <option value="en">EN</option>
              {/* Add more languages as options here */}
            </select>
          </div>

          {/* Sign in and account */}
          <Link to="">
            <div>
              <p>Sign In</p>
              <div>Account & Lists</div>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <div>& Orders</div>
          </Link>

          {/* Cart */}
          <Link to="/Cart" className={classes.cart}>
            <BsCart size={35}/>
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
    <LowerHeader/>
    </>
  );
}

export default Header;









// import { FaSearch } from "react-icons/fa";
// import { SlLocationPin } from 'react-icons/sl';
// import { BsCart } from 'react-icons/bs';
// import '../Header/Header.css';

// function Header() {
//   return (
//     <header>
//       <div className= {classes.header__container}>
//         {/* Logo */}
//         <div className={classes.logo__container}>
//           <a href="#">
//             <img src="https://www.vecteezy.com/png/12681601-amazon-logotype-illustration-popular-online-shoping-icon" alt="Amazon logo" />
//           </a>
//         </div>

//         {/* Delivery */}
//         <div className={classes.delivery}>
//           <span>
//             <SlLocationPin />
//           </span>
//           <div>
//             <p>Deliver to</p>
//             <div>Ethiopia</div>
//           </div>
//         </div>

//         {/* Search */}
//         <div className={classes.search}>
//           <select name="category" id="category-select">
//             <option value="">All</option>
//             {/* Add more categories as options here */}
//           </select>
//           <input type="text" id="search-input" placeholder="Search products" aria-label="Search products" />
//           <FaSearch  size={25} />
//         </div>

//         {/* Right side links */}
//         <div className={classes.order_container}>
//           {/* Language selection */}
//           <div className={classes.language}>
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Famerican-fla&psig=AOvVaw0x5sU0lXYzQZR-fzxbWovP&ust=1720074603773000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCeg7GfiocDFQAAAAAdAAAAABAE=" alt="Language selection" />
//             <select name="language" id="language-select">
//               <option value="en">EN</option>
//               {/* Add more languages as options here */}
//             </select>
//           </div>

//           {/* Sign in and account */}
//           <a href="" >
//             <div>
//               <p>Sign In</p>
//               <div>Account & Lists</div>
//             </div>
//           </a>

//           {/* Orders */}
//           <a href="" >
//             <p>Returns</p>
//             <div>& Orders</div>
//           </a>

//           {/* Cart */}
//           <a href="" className={classes.cart}>
//             <BsCart size={35}/>
//             <div>0</div>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;