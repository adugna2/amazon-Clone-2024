// ContextProvider.jsx
import React, { createContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  product: null,
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_PRODUCT_FAILURE':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
