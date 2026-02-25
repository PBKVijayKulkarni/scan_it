import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { useState } from "react";

function UserComponent() 
{
  const dispatch = useDispatch();
  const [user, setLocalUser] = useState({ name: "", email: "" });

  const handleSubmit = () => {
    dispatch(setUser(user));
  };

  return (
    <div>
      <h2>User Details</h2>
      <input
        placeholder="Name"
        onChange={(e) => setLocalUser({ ...user, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setLocalUser({ ...user, email: e.target.value })}
      />
      <button onClick={handleSubmit}>Save User</button>
    </div>
  );
}

export default UserComponent;