import { combineReducers } from "@reduxjs/toolkit";
import { carsApi } from "../services/apiSlice";


const rootReducer = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  // if  needed persist can be added for RTKQuery
//   [rawSourceHomeApi.reducerPath]: rawSourceHomeApi.reducer,
//   [rawDuctionSearchApi.reducerPath]: rawDuctionSearchApi.reducer,
//   [petApi.reducerPath]: petApi.reducer,
//   auth: persistReducer(authConfig, authSlice.reducer),
//   home: persistReducer(homeConfig, homeSlice.reducer),
//   petList: persistReducer(petListConfig, petSlice.reducer),
//   productList: persistReducer(productListConfig, productSlice.reducer),

});
export default rootReducer;
