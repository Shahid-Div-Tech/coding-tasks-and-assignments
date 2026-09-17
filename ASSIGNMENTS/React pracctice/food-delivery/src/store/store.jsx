import React from "react";
import { createContext, useReducer } from "react";
import foods from "./data";

export const appContext = createContext();

function reducerFunction(state, action) {
  if (action.type === "ADDTOCART") {
    return {
      ...state,
      addToCartItems: [
        ...state.addToCartItems,
        ...state.items.filter((item) => item.id === action.payload),
      ],
    }; 
  }

  return state;
}

const Store = ({ children }) => {
  const [state, dispatchItems] = useReducer(reducerFunction, {
    items: foods,
    addToCartItems: [],
  });

  function addToCart(id) {
    dispatchItems({
      type: "ADDTOCART",
      payload: id,
    });
  }

  function removeFromCart() {}

  function increaseItem() {}

  function decreaseItem() {}

  return (
    <appContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        addToCartItems: state.addToCartItems,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default Store;
