import { createStore } from "redux";

const initialState = {
  customerName: "",
  shipmentType: "Domestic",
  services: [],
  deliverySpeed: "Standard",
  file: null
};

function logisticsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CUSTOMER":
      return { ...state, customerName: action.payload };

    case "SET_SHIPMENT_TYPE":
      return { ...state, shipmentType: action.payload };

    case "TOGGLE_SERVICE":
      const updatedServices = state.services.includes(action.payload)
        ? state.services.filter(service => service !== action.payload)
        : [...state.services, action.payload];
      return { ...state, services: updatedServices };

    case "SET_DELIVERY_SPEED":
      return { ...state, deliverySpeed: action.payload };

    case "SET_FILE":
      return { ...state, file: action.payload };

    default:
      return state;
  }
}

export const store = createStore(logisticsReducer);