import { useContext } from "react";
import { ShipmentContext } from "../context/ShipmentContext";

function Dashboard() {
  const { shipments } = useContext(ShipmentContext);

  const delivered = shipments.filter(s => s.status === "Delivered").length;

  return (
    <div>
      <h2>Logistics Dashboard</h2>
      <p>Total Shipments: {shipments.length}</p>
      <p>Delivered Shipments: {delivered}</p>
    </div>
  );
}

export default Dashboard;