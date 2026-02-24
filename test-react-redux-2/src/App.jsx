import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import LogisticsForm from "./LogisticsForm";

function App() {
  return (
    <Provider store={store}>
      <LogisticsForm />
    </Provider>
  );
}

export default App;