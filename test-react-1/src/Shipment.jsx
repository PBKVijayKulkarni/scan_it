import React, { useState } from "react";

function LogisticsShipment() 
{
  const [shipmentId, setShipmentId] = useState("");
  const [senderName, setSenderName] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [deliveryType, setDeliveryType] = useState("Standard");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      Shipment Created!
      ID: ${shipmentId}
      Sender: ${senderName}
      Destination: ${destination}
      Weight: ${weight} kg
      Delivery: ${deliveryType}
      Status: ${status}
    `);

    // Reset form
    setShipmentId("");
    setSenderName("");
    setDestination("");
    setWeight("");
    setDeliveryType("Standard");
    setStatus("Pending");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Shipment Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Shipment ID: </label>
          <input
            type="text"
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value)}
            required
          /> <br/> <br/> 
        </div>

        <div>
          <label>Sender Name: </label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required 
          /> <br/> <br/> 
        </div>

        <div>
          <label>Destination City: </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          /> <br/> <br/> 
        </div>

        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required 
          /> <br/> <br/> 
        </div>

        <div>
          <label>Delivery Type: </label>
          <select
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
          </select> <br/> <br/> 
        </div>

        <div>
          <label>Status: </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select> <br/> <br/> 
        </div>

        <br />
        <button type="submit">Create Shipment</button>
      </form>
    </div>
  );
}

export default LogisticsShipment;