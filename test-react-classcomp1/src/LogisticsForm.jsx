import React, { Component } from "react";

class LogisticsForm extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor called");

    this.state = {
      shipmentId: "",
      shipmentType: "standard",
      services: [],
      destination: "Mumbai",
      document: null
    };
  }

  //  Lifecycle Method 1
  componentDidMount() {
    console.log("Component Mounted - API call can be done here");
  }

  //  Lifecycle Method 2
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("Component Updated");
    }
  }

  //  Lifecycle Method 3
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  // Handle Text Input
  handleChange = (e) => {
    this.setState({ shipmentId: e.target.value });
  };

  // Handle Radio Button
  handleRadioChange = (e) => {
    this.setState({ shipmentType: e.target.value });
  };

  // Handle Checkbox
  handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...this.state.services];

    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter(
        (service) => service !== value
      );
    }

    this.setState({ services: updatedServices });
  };

  // Handle Select Dropdown
  handleSelectChange = (e) => {
    this.setState({ destination: e.target.value });
  };

  // Handle File Upload
  handleFileChange = (e) => {
    this.setState({ document: e.target.files[0] });
  };

  render() {
    return (
      <div>
        <h2>Logistics Shipment Form</h2>

        {/* Text Field */}
        <div>
          <label>Shipment ID: </label>
          <input
            type="text"
            value={this.state.shipmentId}
            onChange={this.handleChange}
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label>Shipment Type:</label>
          <br />
          <input
            type="radio"
            value="standard"
            checked={this.state.shipmentType === "standard"}
            onChange={this.handleRadioChange}
          />
          Standard
          <input
            type="radio"
            value="express"
            checked={this.state.shipmentType === "express"}
            onChange={this.handleRadioChange}
          />
          Express
        </div>

        {/* Checkboxes */}
        <div>
          <label>Additional Services:</label>
          <br />
          <input
            type="checkbox"
            value="insurance"
            onChange={this.handleCheckboxChange}
          />
          Insurance
          <input
            type="checkbox"
            value="tracking"
            onChange={this.handleCheckboxChange}
          />
          Tracking
          <input
            type="checkbox"
            value="packaging"
            onChange={this.handleCheckboxChange}
          />
          Packaging
        </div>

        {/* Select Dropdown */}
        <div>
          <label>Destination:</label>
          <select
            value={this.state.destination}
            onChange={this.handleSelectChange}
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label>Upload Document:</label>
          <input type="file" onChange={this.handleFileChange} />
        </div>

        <hr />

        <h3>Shipment Summary</h3>
        <p>ID: {this.state.shipmentId}</p>
        <p>Type: {this.state.shipmentType}</p>
        <p>Services: {this.state.services.join(", ")}</p>
        <p>Destination: {this.state.destination}</p>
        <p>
          Document: {this.state.document ? this.state.document.name : "No file"}
        </p>
      </div>
    );
  }
}

export default LogisticsForm;