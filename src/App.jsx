import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { showToast } from "./showToast.js";
import Toast from "./Toast.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Toast Ex</h1>
      <button
        onClick={() => {
          showToast(`This is a toast message! ${count}`, {
            duration: count * 1000,
            background: "#871",
            showProgress: false,
          });
          setCount((prev) => prev + 1);
        }}
      >
        Show Toast
      </button>
      <Toast />
    </div>
  );
}

export default App;
