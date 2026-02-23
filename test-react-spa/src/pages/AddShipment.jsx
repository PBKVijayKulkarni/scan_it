import { useState, useContext } from "react";
import { ShipmentContext } from "../context/ShipmentContext";

function AddShipment() {
  const { dispatch } = useContext(ShipmentContext);

  const [shipmentId, setShipmentId] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        shipmentId,
        destination,
        status: "Pending"
      }
    });

    setShipmentId("");
    setDestination("");
  };

  return (
    <div>
      <h2>Add Shipment</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Shipment ID"
          value={shipmentId}
          onChange={e => setShipmentId(e.target.value)}
        />

        <input
          placeholder="Destination"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddShipment;