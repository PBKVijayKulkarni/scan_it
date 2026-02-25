import { createSlice } from "@reduxjs/toolkit";

const logisticsSlice = createSlice({
  name: "logistics",
  initialState: {
    shipmentType: "Air",
    fragile: false,
    destination: "",
  },
  reducers: {
    setLogistics: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setLogistics } = logisticsSlice.actions;
export default logisticsSlice.reducer;