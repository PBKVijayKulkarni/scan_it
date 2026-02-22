import React, { useState, useMemo } from "react";

function ShippingWithUsememo()
 {
  const [customerName, setCustomerName] = useState("");
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [shipmentType, setShipmentType] = useState("Road");

  const ratePerUnit = {
    Road: 2,
    Air: 5,
    Sea: 3
  };

  // useMemo for billing calculation
  const billing = useMemo(() => {
    console.log("Calculating billing...");

    const rate = ratePerUnit[shipmentType];
    const baseAmount = weight * distance * rate;
    const gst = baseAmount * 0.18;
    const totalAmount = baseAmount + gst;

    return {
      baseAmount,
      gst,
      totalAmount
    };

  }, [weight, distance, shipmentType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bill Generated Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Billing System (useMemo)</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <br />

        <div>
          <label>Distance (km):</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>

        <br />

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

        <hr />

        <h3>Billing Details</h3>
        <p>Base Amount: ₹ {billing.baseAmount.toFixed(2)}</p>
        <p>GST (18%): ₹ {billing.gst.toFixed(2)}</p>
        <h4>Total Amount: ₹ {billing.totalAmount.toFixed(2)}</h4>

        <button type="submit">Generate Bill</button>

      </form>
    </div>
  );
}

export default ShippingWithUsememo;