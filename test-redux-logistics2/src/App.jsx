import UserComponent from "./components/UserComponent";
import LogisticsComponent from "./components/LogisticsComponent";
import BillingComponent from "./components/BillingComponent";
import ShipmentComponent from "./components/ShipmentComponent";

function App() {
  return (
    <div>
      <h1>Logistics Management System</h1>
      <UserComponent />
      <LogisticsComponent />
      <BillingComponent />
      <ShipmentComponent />
    </div>
  );
}

export default App;