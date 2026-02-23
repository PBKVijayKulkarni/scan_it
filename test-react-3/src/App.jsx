import React from "react";
import { ShipmentProvider } from "./folder_1/ShipmentContext";
import ShipmentForm from "./folder_1/ShipmentForm";
import ShipmentList from "./folder_1/ShipmentList";

function App() {
  return (
    <ShipmentProvider>
      <h2>Logistics Management (useContext + useReducer)</h2>
      <ShipmentForm />
      <ShipmentList />
    </ShipmentProvider>
  );
}

export default App;