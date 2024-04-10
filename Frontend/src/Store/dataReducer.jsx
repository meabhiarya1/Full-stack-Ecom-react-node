import { createSlice } from '@reduxjs/toolkit';


const initialState = []

// naming on the requirement
const dataSlice = createSlice({
    name: "dataHandler", initialState: initialState, reducers: {
        addData(state, action) {
          return state = action.payload;
        }
    }
})

export const dataSliceActions = dataSlice.actions
const dataSliceReducer = dataSlice.reducer

export default dataSliceReducer;