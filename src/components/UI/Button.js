import React from "react";
import "./Button.css";

function Button({ buttonText, className }) {
  return <button className={className}>{buttonText}</button>;
}

export default Button;
