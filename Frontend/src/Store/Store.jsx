import cartSliceReducers from "./cartReducer";
import dataSliceReducer from "./dataReducer";
import productSliceReducers from "./productReducer";
// for demo purpose
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    data: dataSliceReducer,
    cart: cartSliceReducers, // for demo purpose
    product: productSliceReducers,
  },
});

export default Store;
