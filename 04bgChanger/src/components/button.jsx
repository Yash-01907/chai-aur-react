import React from "react";

function Button({ color }) {
  const setColor = function () {
    document.body.style.backgroundColor  = color;
  };
  return <button  className="bg-white" onClick={setColor}>{color}</button>;
}

export default Button;
