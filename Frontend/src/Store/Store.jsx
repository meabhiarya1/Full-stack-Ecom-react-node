import cartSliceReducers from "./cartReducer";
import dataSliceReducer from "./dataReducer";
// for demo purpose
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    data: dataSliceReducer,
    cart: cartSliceReducers, // for demo purpose
  },
});

export default Store;
