import React, { useState } from "react";

const SingleColor = ({ rgb, hexColor, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const rgbString = rgb.join(",");
  console.log(hexColor);
  const handleClipboard = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    navigator.clipboard.writeText(hexColor);
  };
  return (
    <article
      onClick={handleClipboard}
      className={`color ${index > 7 && "light-font"}`}
      style={{ backgroundColor: `rgb(${rgbString})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
