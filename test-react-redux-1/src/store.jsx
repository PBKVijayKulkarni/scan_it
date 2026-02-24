import { createStore } from "redux";

const initialState = { message: "Hello World" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);