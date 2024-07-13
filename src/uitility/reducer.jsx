// utility/reducer.jsx
import { type } from './Actiontype';

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
