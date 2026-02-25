import { createSlice } from "@reduxjs/toolkit";

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    amount: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    calculateBill: (state, action) => {
      state.amount = action.payload;
      state.tax = state.amount * 0.18;
      state.total = state.amount + state.tax;
    },
  },
});

export const { calculateBill } = billingSlice.actions;
export default billingSlice.reducer;