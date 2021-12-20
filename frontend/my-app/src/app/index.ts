import { combineReducers } from "@reduxjs/toolkit";
import { carsApi } from "../services/apiSlice";


const rootReducer = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  // if  needed persist can be added for RTKQuery
});
export default rootReducer;
