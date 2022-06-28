import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const sound = useRef();
  const color = useRef();
  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    sound.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type={"text"} placeholder="Sound .." ref={sound} />
      <input type={"color"} ref={color} />
      <button>ADD</button>
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
