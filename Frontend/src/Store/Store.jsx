import dataSliceReducer from "./dataReducer";
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({ reducer: dataSliceReducer })

export default Store;