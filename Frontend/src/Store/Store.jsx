import cartSliceReducers from "./cartReducer";
import dataSliceReducer from "./dataReducer";
import productSliceReducer from "./productReducer";
// for demo purpose
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    data: dataSliceReducer,
    cart: cartSliceReducers, // for demo purpose
    product: productSliceReducer,
  },
});

export default Store;
