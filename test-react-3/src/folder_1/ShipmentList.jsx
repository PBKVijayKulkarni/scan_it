import React, { useContext } from "react";
import { ShipmentContext } from "./ShipmentContext";

function ShipmentList() {
  const { shipments, dispatch } = useContext(ShipmentContext);

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Sender</th>
          <th>Destination</th>
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
  );
}

export default ShipmentList;