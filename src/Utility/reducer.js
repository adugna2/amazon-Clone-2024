import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItems = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItems) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        // console.log(updatedBasket)
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_TO_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);

      const newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
