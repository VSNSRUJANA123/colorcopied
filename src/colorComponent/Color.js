import Values from "values.js";
import React, { useEffect, useState } from "react";
import Selections from "./Selections";
import "./color.css";
const Color = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
      setColor("");
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  useEffect(() => {
    let colors = new Values("#f15025").all(10);
    setList(colors);
  }, []);
  return (
    <main>
      <section className="Colorsection">
        <h1>Color Generator:</h1>
        <form onSubmit={submitForm}>
          <input
            placeholder="#f15025"
            type="search"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colorsContainer">
        {list.map((items, index) => {
          return (
            <Selections key={index} {...items} index={index} hex={items.hex} />
          );
        })}
      </section>
    </main>
  );
};
export default Color;
