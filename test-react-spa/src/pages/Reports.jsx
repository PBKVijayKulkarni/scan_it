import { useContext } from "react";
import { ShipmentContext } from "../context/ShipmentContext";

function Reports() {
  const { shipments } = useContext(ShipmentContext);

  const pending = shipments.filter(s => s.status === "Pending").length;

  return (
    <div>
      <h2>Reports</h2>
      <p>Pending Shipments: {pending}</p>
    </div>
  );
}

export default Reports;