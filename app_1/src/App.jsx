import { useState } from "react";
import "./App.css";

function App() {
  const [cellvalue, setCellvalue] = useState(["a", "b", "c"]);
  function handleChange(value, idx) {
    setCellvalue((prev) => prev.map((cell, id) => (id === idx ? value : cell)));
  }

  function handleAdd(idx) {
    setCellvalue((prev) => [
      ...prev.slice(0, idx + 1),
      "_",
      ...prev.slice(idx + 1),
    ]);
  }

  function handleShow() {
    setShow((prev) => {
      return !prev;
    });
  }

  const combinedString = cellvalue.join("");

  const [show, setShow] = useState(false);

  return (
    <div className="main-container">
      {cellvalue.map((item, idx) => (
        <div className="cell" key={idx} >
          <input
            value={item}
            placeholder="_"
            onChange={(e) => handleChange(e.currentTarget.value, idx)}
          ></input>
          {cellvalue.length - 1 > idx && (
            <span className="add" onClick={() => handleAdd(idx)}></span>
          )}
        </div>
      ))}
      <button
        className="result"
        onClick={() => handleShow()}
      >
        SHOW
      </button>
      {show && <p className="text">{combinedString}</p>}
    </div>
  );
}

export default App;
