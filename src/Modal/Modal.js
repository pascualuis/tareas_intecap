import React from 'react';
import './../styles/Modala.css';

const Modal = ({ cerrarModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="cerrar" onClick={cerrarModal}>&times;</span>

        <h2>Sistema</h2>
        <p>El registro se insertó con éxito.</p>

        <button className="boton-aceptar" onClick={cerrarModal}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;
