import React, { useState, useMemo, useEffect } from "react";

function ShippingWithMandE()
 {
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [shipmentType, setShipmentType] = useState("Road");

  const ratePerUnit = {
    Road: 2,
    Air: 5,
    Sea: 3
  };

  // 1️⃣ useMemo → Calculate billing
  const billing = useMemo(() => {
    console.log("Calculating billing...");
    const rate = ratePerUnit[shipmentType];
    const base = weight * distance * rate;
    const gst = base * 0.18;
    const total = base + gst;

    return { base, gst, total };
  }, [weight, distance, shipmentType]);

  // 2️⃣ useEffect → Trigger side effect when total changes
  useEffect(() => {
    if (billing.total > 0) {
      console.log("Invoice Updated:", billing);

      // Example: API call
      // fetch('/api/invoice', { method: 'POST', body: JSON.stringify(billing) });
    }
  }, [billing]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Billing ver 2</h2>

      <input
        type="number"
        placeholder="Weight"
        onChange={(e) => setWeight(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Distance"
        onChange={(e) => setDistance(Number(e.target.value))}
      />

      <select onChange={(e) => setShipmentType(e.target.value)}>
        <option value="Road">Road</option>
        <option value="Air">Air</option>
        <option value="Sea">Sea</option>
      </select>

      <hr />

      <h3>Total: ₹ {billing.total.toFixed(2)}</h3>
    </div>
  );
}

export default ShippingWithMandE;