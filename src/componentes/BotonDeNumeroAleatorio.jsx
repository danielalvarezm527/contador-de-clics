import React from "react";
import '../css/BotonDeNumeroAleatorio.css';

function BotonDeNumeroAleatorio({ texto, accion }){
  return(
    <button
      className="boton-numero-aleatorio"
      onClick={accion}>
      {texto}
    </button>
  );
}

export default BotonDeNumeroAleatorio;