import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setError(false);
    try {
      let colors = new Values(color).all();
      setList(colors);
    } catch (err) {
      setError(true);
    }
  };
  console.log(color);
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="color"
            id="color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error && "error"}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <div className="colors">
        {list.map((color, idx) => {
          console.log(color);
          return (
            <SingleColor
              key={idx}
              {...color}
              index={idx}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
