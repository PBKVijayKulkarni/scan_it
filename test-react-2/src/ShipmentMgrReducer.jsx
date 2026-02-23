import React, { useReducer, useState } from "react";

// Initial State
const initialState = [];

// Reducer Function
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
function ShipmentMgrReducer() {
    const [shipments, dispatch] = useReducer(
      shipmentReducer,
      initialState
    );
  
    const [shipmentId, setShipmentId] = useState("");
    const [sender, setSender] = useState("");
    const [destination, setDestination] = useState("");
    const [weight, setWeight] = useState("");
  
    const addShipment = (e) => {
      e.preventDefault();
  
      const newShipment = {
        id: Date.now(),
        shipmentId,
        sender,
        destination,
        weight,
        status: "Pending"
      };
  
      dispatch({ type: "ADD_SHIPMENT", payload: newShipment });
  
      setShipmentId("");
      setSender("");
      setDestination("");
      setWeight("");
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>Logistics Shipment (useReducer)</h2>
  
        <form onSubmit={addShipment}>
          <input
            type="text"
            placeholder="Shipment ID"
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value)}
            required
          />
  
          <input
            type="text"
            placeholder="Sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
  
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
  
          <input
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
  
          <button type="submit">Add Shipment</button>
        </form>
  
        <hr />
  
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Destination</th>
              <th>Weight</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.shipmentId}</td>
                <td>{shipment.sender}</td>
                <td>{shipment.destination}</td>
                <td>{shipment.weight}</td>
                <td>{shipment.status}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_STATUS",
                        payload: shipment.id
                      })
                    }
                    disabled={shipment.status === "Delivered"}
                  >
                    Deliver
                  </button>
  
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DELETE_SHIPMENT",
                        payload: shipment.id
                      })
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ShipmentMgrReducer;