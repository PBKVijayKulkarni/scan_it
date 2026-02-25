import UserComponent from "./components/UserComponent";
import LogisticsComponent from "./components/LogisticsComponent";
import BillingComponent from "./components/BillingComponent";

function App() {
  return (
    <div>
      <h1>Logistics Management System</h1>
      <UserComponent />
      <LogisticsComponent />
      <BillingComponent />
    </div>
  );
}

export default App;