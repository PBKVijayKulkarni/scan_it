import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

function MessageComponent() {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_MESSAGE", payload: "Hello Classic Redux!" })
        }
      >
        Change Message
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MessageComponent />
    </Provider>
  );
}