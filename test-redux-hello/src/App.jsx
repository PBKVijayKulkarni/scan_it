import { useSelector, useDispatch } from "react-redux";
//import { changeMessage } from "./features/messageSlice";
import { changeMessage } from "./features/messageslice";

function App() {
  const message = useSelector((state) => state.message.text);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{message}</h1>

      <button
        onClick={() =>
          dispatch(changeMessage("Hello Vite + Redux Toolkit!"))
        }
      >
        Change Message
      </button>
    </div>
  );
}

export default App;