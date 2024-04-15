import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "productHanlder",
  initialState: initialState,
  reducers: {
    addData(state, action) {
      return (state = action.payload);
    },
  },
});

export const productSliceActions = productSlice.actions;

const productSliceReducer = productSlice.reducer;

export default productSliceReducer;
