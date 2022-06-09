import React from "react";
import "../style-sheet/ButtonClear.css"

const ButtonClear = (props) => (
  <div className="button-clear" onClick={props.useClear}>
    {props.children}
  </div>
);

export default ButtonClear;