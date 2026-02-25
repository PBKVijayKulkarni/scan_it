import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    text: "Hello World from Redux Toolkit!",
  },
  reducers: {
    changeMessage: (state, action) => {
      state.text = action.payload;  // mutable logic allowed (uses Immer internally)
    },
  },
});

export const { changeMessage } = messageSlice.actions;
export default messageSlice.reducer;