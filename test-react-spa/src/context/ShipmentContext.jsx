import React, { createContext, useReducer } from "react";

export const ShipmentContext = createContext();

const initialState = [];

function shipmentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(s => s.id !== action.payload);

    case "DELIVER":
      return state.map(s =>
        s.id === action.payload
          ? { ...s, status: "Delivered" }
          : s
      );

    default:
      return state;
  }
}

export function ShipmentProvider({ children }) {
  const [shipments, dispatch] = useReducer(shipmentReducer, initialState);

  return (
    <ShipmentContext.Provider value={{ shipments, dispatch }}>
      {children}
    </ShipmentContext.Provider>
  );
}