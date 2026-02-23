import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShipmentProvider } from "./context/ShipmentContext";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Shipments from "./pages/Shipments";
import AddShipment from "./pages/AddShipment";
import Reports from "./pages/Reports";

function App() {
  return (
    <ShipmentProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/add" element={<AddShipment />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </ShipmentProvider>
  );
}

export default App;