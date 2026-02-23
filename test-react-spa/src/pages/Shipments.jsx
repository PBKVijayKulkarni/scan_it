import { useContext } from "react";
import { ShipmentContext } from "../context/ShipmentContext";

function Shipments() {
  const { shipments, dispatch } = useContext(ShipmentContext);

  return (
    <div>
      <h2>Shipment List</h2>

      {shipments.map(s => (
        <div key={s.id} style={{ border: "1px solid black", margin: 5, padding: 5 }}>
          <p>ID: {s.shipmentId}</p>
          <p>Destination: {s.destination}</p>
          <p>Status: {s.status}</p>

          <button onClick={() => dispatch({ type: "DELIVER", payload: s.id })}>
            Deliver
          </button>

          <button onClick={() => dispatch({ type: "DELETE", payload: s.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shipments;