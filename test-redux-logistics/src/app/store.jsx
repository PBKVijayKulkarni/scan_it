import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import logisticsReducer from "../features/logisticsSlice";
import billingReducer from "../features/billingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    logistics: logisticsReducer,
    billing: billingReducer,
  },
});