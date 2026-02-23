import React, { useState, useContext } from "react";
import { ShipmentContext } from "./ShipmentContext";

function ShipmentForm() {
  const { dispatch } = useContext(ShipmentContext);

  const [shipmentId, setShipmentId] = useState("");
  const [sender, setSender] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_SHIPMENT",
      payload: {
        id: Date.now(),
        shipmentId,
        sender,
        destination,
        status: "Pending"
      }
    });

    setShipmentId("");
    setSender("");
    setDestination("");
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Add Shipment</button>
    </form>
  );
}

export default ShipmentForm;