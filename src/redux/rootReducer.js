import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import addCart from "./cartSlice";

export const rootReducer = combineReducers({
  products: productsReducer,
  addCart: addCart,
});
