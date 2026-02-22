import React, { useState } from "react";

function ShipmentManager() 
{
  const [shipmentId, setShipmentId] = useState("");
  const [sender, setSender] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [shipments, setShipments] = useState([]);

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

    setShipments([...shipments, newShipment]);

    // Clear form
    setShipmentId("");
    setSender("");
    setDestination("");
    setWeight("");
  };

  const updateStatus = (id) => {
    const updatedShipments = shipments.map((shipment) =>
      shipment.id === id
        ? { ...shipment, status: "Delivered" }
        : shipment
    );

    setShipments(updatedShipments);
  };

  const deleteShipment = (id) => {
    const filteredShipments = shipments.filter(
      (shipment) => shipment.id !== id
    );
    setShipments(filteredShipments);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Shipment Management</h2>

      {/* Shipment Form */}
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
          placeholder="Sender Name"
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
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <button type="submit">Add Shipment</button>
      </form>

      <hr />

      {/* Shipment List */}
      <h3>Shipment List</h3>

      {shipments.length === 0 ? (
        <p>No shipments added yet.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Shipment ID</th>
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
                <td>{shipment.weight} kg</td>
                <td>{shipment.status}</td>
                <td>
                  <button
                    onClick={() => updateStatus(shipment.id)}
                    disabled={shipment.status === "Delivered"}
                  >
                    Mark Delivered
                  </button>

                  <button
                    onClick={() => deleteShipment(shipment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShipmentManager;