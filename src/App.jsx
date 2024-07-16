
// import ReactDOM from 'react-dom';  
// import './index.css';  
// import Routing from './Router';  
//  import { ProductProvider } from './ProductContext';  
// function App (){
//   return (
    
//         <div className="App">
          
//           <Routing />
//         </div>

//   );
// }

// export default App;
// App.jsx
 import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Router';
import { ProductProvider } from '../src/APi/ProductContext';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <Routing />
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
