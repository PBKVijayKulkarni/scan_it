import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LogisticsForm() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleCheckbox = (service) => {
    dispatch({ type: "TOGGLE_SERVICE", payload: service });
  };

  const handleFileChange = (e) => {
    dispatch({ type: "SET_FILE", payload: e.target.files[0] });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logistics Shipment Form</h2>

      {/* Text Input */}
      <div>
        <label>Customer Name: </label>
        <input
          type="text"
          value={state.customerName}
          onChange={(e) =>
            dispatch({ type: "SET_CUSTOMER", payload: e.target.value })
          }
        />
      </div>

      <br />

      {/* Radio Buttons */}
      <div>
        <label>Shipment Type: </label>
        <label>
          <input
            type="radio"
            value="Domestic"
            checked={state.shipmentType === "Domestic"}
            onChange={(e) =>
              dispatch({ type: "SET_SHIPMENT_TYPE", payload: e.target.value })
            }
          />
          Domestic
        </label>

        <label>
          <input
            type="radio"
            value="International"
            checked={state.shipmentType === "International"}
            onChange={(e) =>
              dispatch({ type: "SET_SHIPMENT_TYPE", payload: e.target.value })
            }
          />
          International
        </label>
      </div>

      <br />

      {/* Checkboxes */}
      <div>
        <label>Additional Services: </label>

        {["Insurance", "Tracking", "Fragile"].map(service => (
          <label key={service} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              checked={state.services.includes(service)}
              onChange={() => handleCheckbox(service)}
            />
            {service}
          </label>
        ))}
      </div>

      <br />

      {/* Select Dropdown */}
      <div>
        <label>Delivery Speed: </label>
        <select
          value={state.deliverySpeed}
          onChange={(e) =>
            dispatch({ type: "SET_DELIVERY_SPEED", payload: e.target.value })
          }
        >
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
          <option value="Same Day">Same Day</option>
        </select>
      </div>

      <br />

      {/* File Upload */}
      <div>
        <label>Upload Invoice: </label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <br />

      {/* Display State */}
      <h3>Current Redux State:</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default LogisticsForm;