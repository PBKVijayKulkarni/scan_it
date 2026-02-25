import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShipments,
  addShipment,
  deleteShipment,
  updateShipmentStatus,
} from "../features/shipmentSlice";

function ShipmentComponent() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.shipments);

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const handleAdd = () => {
    const newShipment = {
      id: Date.now(),
      title,
      status: "Pending",
    };
    dispatch(addShipment(newShipment));
    setTitle("");
  };

  return (
    <div>
      <h2>Shipment Management</h2>

      {loading && <p>Loading shipments...</p>}

      <input
        placeholder="Shipment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Shipment</button>

      <ul>
        {list.map((shipment) => (
          <li key={shipment.id}>
            {shipment.title} - {shipment.status}

            <button
              onClick={() =>
                dispatch(
                  updateShipmentStatus({
                    id: shipment.id,
                    status: "Delivered",
                  })
                )
              }
            >
              Deliver
            </button>

            <button
              onClick={() => dispatch(deleteShipment(shipment.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShipmentComponent;