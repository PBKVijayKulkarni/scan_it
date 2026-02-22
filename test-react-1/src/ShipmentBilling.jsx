import React, { useState, useEffect } from "react";

function ShipmentBilling() 
{
  const [customerName, setCustomerName] = useState("");
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [shipmentType, setShipmentType] = useState("Road");
  const [baseAmount, setBaseAmount] = useState(0);
  const [gst, setGst] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Rate per km per kg based on shipment type
  const ratePerUnit = {
    Road: 2,
    Air: 5,
    Sea: 3
  };

  // useEffect to calculate billing automatically
  useEffect(() => {
    const rate = ratePerUnit[shipmentType];
    const calculatedBase = weight * distance * rate;
    const calculatedGst = calculatedBase * 0.18; // 18% GST
    const calculatedTotal = calculatedBase + calculatedGst;

    setBaseAmount(calculatedBase);
    setGst(calculatedGst);
    setTotalAmount(calculatedTotal);

  }, [weight, distance, shipmentType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Billing Generated Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Billing System</h2>

      <form onSubmit={handleSubmit}>

        {/* Customer Name */}
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <br />

        {/* Weight */}
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <br />

        {/* Distance */}
        <div>
          <label>Distance (km):</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>

        <br />

        {/* Shipment Type */}
        <div>
          <label>Shipment Type:</label>
          <select
            value={shipmentType}
            onChange={(e) => setShipmentType(e.target.value)}
          >
            <option value="Road">Road</option>
            <option value="Air">Air</option>
            <option value="Sea">Sea</option>
          </select>
        </div>

        <br />

        <hr />

        {/* Billing Details */}
        <h3>Billing Details</h3>
        <p>Base Amount: ₹ {baseAmount.toFixed(2)}</p>
        <p>GST (18%): ₹ {gst.toFixed(2)}</p>
        <h4>Total Amount: ₹ {totalAmount.toFixed(2)}</h4>

        <button type="submit">Generate Bill</button>

      </form>
    </div>
  );
}

export default ShipmentBilling;