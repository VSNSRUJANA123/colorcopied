import React, { useState } from "react";
const Selections = ({ rgb, weight, index, hex }) => {
  const [copy, setCopy] = useState(false);
  const colorvalue = rgb.join(",");
  const copyColor = () => {
    setTimeout(() => {
      setCopy(false);
    }, 1000);
    setCopy(true);
    navigator.clipboard.writeText(`#${hex}`);
  };

  return (
    <div
      onClick={copyColor}
      className={`singleColor ${index > 9 ? "lightColor" : ""}`}
      style={{ backgroundColor: `rgb(${colorvalue})` }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
      {copy && <p className="copyTxt">color copied</p>}
    </div>
  );
};
export default Selections;
