import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messageslice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});