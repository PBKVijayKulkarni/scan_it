import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#ddd" }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/shipments">Shipments</Link> |{" "}
      <Link to="/add">Add Shipment</Link> |{" "}
      <Link to="/reports">Reports</Link>
    </nav>
  );
}

export default Navbar;