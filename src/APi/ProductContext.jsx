import React, { createContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_PRODUCT_FAILURE':
      return { ...state, loading: false, error: action.payload };
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
