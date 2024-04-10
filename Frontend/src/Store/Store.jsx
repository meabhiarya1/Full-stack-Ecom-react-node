import dataSliceReducer from "./dataReducer";
import cartSliceReducer from "./dataReducer"; // for demo purpose
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    data: dataSliceReducer,
    cart: cartSliceReducer, // for demo purpose
  },
});

export default Store;
