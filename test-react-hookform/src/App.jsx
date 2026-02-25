import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Logistics Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            {...register("age", {
              min: { value: 18, message: "Minimum age is 18" },
            })}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        {/* Shipment Type (Radio) */}
        <div>
          <label>Shipment Type:</label>
          <input
            type="radio"
            value="Air"
            {...register("shipmentType", { required: true })}
          /> Air
          <input
            type="radio"
            value="Sea"
            {...register("shipmentType")}
          /> Sea
          <input
            type="radio"
            value="Road"
            {...register("shipmentType")}
          /> Road
          <p style={{ color: "red" }}>
            {errors.shipmentType && "Select shipment type"}
          </p>
        </div>

        {/* Fragile (Checkbox) */}
        <div>
          <label>
            <input type="checkbox" {...register("fragile")} />
            Fragile Item
          </label>
        </div>

        {/* Destination (Select) */}
        <div>
          <label>Destination:</label>
          <select {...register("destination", { required: true })}>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
          <p style={{ color: "red" }}>
            {errors.destination && "Select destination"}
          </p>
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;