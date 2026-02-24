import React, { useState, useEffect } from "react";
import axios from "axios";

function ShipmentApp() {
  const [formData, setFormData] = useState({
    customerName: "",
    origin: "",
    destination: "",
    shipmentType: "Air",
  });

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch shipments
  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      setShipments(response.data);
    } catch (err) {
      setError("Failed to fetch shipments");
    } finally {
      setLoading(false);
    }
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      alert("Shipment booked successfully!");

      // Add new shipment to UI
      setShipments([response.data, ...shipments]);

      // Reset form
      setFormData({
        customerName: "",
        origin: "",
        destination: "",
        shipmentType: "Air",
      });
    } catch (err) {
      setError("Failed to book shipment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Logistics Shipment Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={formData.origin}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <br /><br />

        <select
          name="shipmentType"
          value={formData.shipmentType}
          onChange={handleChange}
        >
          <option value="Air">Air</option>
          <option value="Sea">Sea</option>
          <option value="Road">Road</option>
        </select>
        <br /><br />

        <button type="submit">Book Shipment</button>
      </form>

      <hr />

      <h3> Shipment List</h3>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            ID: {shipment.id} | {shipment.title || shipment.customerName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShipmentApp;
