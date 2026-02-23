import React, { createContext, useReducer } from "react";

// Create Context
export const ShipmentContext = createContext();

// Initial State
const initialState = [];

// Reducer
function shipmentReducer(state, action) {
  switch (action.type) {
    case "ADD_SHIPMENT":
      return [...state, action.payload];

    case "UPDATE_STATUS":
      return state.map((shipment) =>
        shipment.id === action.payload
          ? { ...shipment, status: "Delivered" }
          : shipment
      );

    case "DELETE_SHIPMENT":
      return state.filter(
        (shipment) => shipment.id !== action.payload
      );

    default:
      return state;
  }
}

// Provider Component
export function ShipmentProvider({ children }) {
  const [shipments, dispatch] = useReducer(
    shipmentReducer,
    initialState
  );

  return (
    <ShipmentContext.Provider value={{ shipments, dispatch }}>
      {children}
    </ShipmentContext.Provider>
  );
}