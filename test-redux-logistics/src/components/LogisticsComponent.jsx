import { useDispatch } from "react-redux";
import { setLogistics } from "../features/logisticsSlice";
import { useState } from "react";

function LogisticsComponent() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    shipmentType: "Air",
    fragile: false,
    destination: "",
  });

  const handleSubmit = () => {
    dispatch(setLogistics(data));
  };

  return (
    <div>
      <h2>Logistics Details</h2>

      <select onChange={(e) => setData({ ...data, shipmentType: e.target.value })}>
        <option>Air</option>
        <option>Sea</option>
        <option>Road</option>
      </select>

      <input
        type="checkbox"
        onChange={(e) => setData({ ...data, fragile: e.target.checked })}
      />
      Fragile

      <input
        placeholder="Destination"
        onChange={(e) => setData({ ...data, destination: e.target.value })}
      />

      <button onClick={handleSubmit}>Save Logistics</button>
    </div>
  );
}

export default LogisticsComponent;