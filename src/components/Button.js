import React from "react";
import "../style-sheet/Button.css"

function Button(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor != ".") && (valor != "=")
  }


    return(
      <div className={`button-container ${esOperador(props.children) ? "operator" : ""}`.trimEnd()}
      onClick={() => props.useClick(props.children)}>
        {props.children}
      </div>
    );
}

export default Button