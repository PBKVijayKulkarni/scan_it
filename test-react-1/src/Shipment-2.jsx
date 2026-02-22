import React, { useState } from "react";

function Shipment_2() 
{
  const [formData, setFormData] = useState({
    customerName: "",
    shipmentType: "",
    services: [],
    destination: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value],
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== value),
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Shipment Order Submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Shipment Booking Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Text Input */}
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Radio Buttons */}
        <div>
          <label>Shipment Type:</label><br />
          <input
            type="radio"
            name="shipmentType"
            value="Air"
            onChange={handleChange}
          /> Air
          <input
            type="radio"
            name="shipmentType"
            value="Sea"
            onChange={handleChange}
          /> Sea
          <input
            type="radio"
            name="shipmentType"
            value="Road"
            onChange={handleChange}
          /> Road
        </div>

        <br />

        {/* Checkboxes */}
        <div>
          <label>Additional Services:</label><br />
          <input
            type="checkbox"
            value="Insurance"
            onChange={handleCheckboxChange}
          /> Insurance
          <input
            type="checkbox"
            value="Express Delivery"
            onChange={handleCheckboxChange}
          /> Express Delivery
          <input
            type="checkbox"
            value="Fragile Handling"
            onChange={handleCheckboxChange}
          /> Fragile Handling
        </div>

        <br />

        {/* Select Dropdown */}
        <div>
          <label>Destination:</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">--Select Destination--</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        <br />

        {/* File Upload */}
        <div>
          <label>Upload Shipment Document:</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <br />

        <button type="submit">Submit Order</button>

      </form>
    </div>
  );
}

export default Shipment_2;