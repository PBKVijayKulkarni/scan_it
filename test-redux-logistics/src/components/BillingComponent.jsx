import { useDispatch, useSelector } from "react-redux";
import { calculateBill } from "../features/billingSlice";
import { useState } from "react";

function BillingComponent() {
  const dispatch = useDispatch();
  const billing = useSelector((state) => state.billing);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h2>Billing</h2>

      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={() => dispatch(calculateBill(amount))}>
        Calculate
      </button>

      <p>Tax: {billing.tax}</p>
      <p>Total: {billing.total}</p>
    </div>
  );
}

export default BillingComponent;