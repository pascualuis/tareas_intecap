import React, { useState } from 'react';
import './../style/RegistroPacienteFormulario.css';

const RegistroPacienteFormulario = () => {
  const [datosPaciente, setDatosPaciente] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    email: ''
  });

const [listaPacientes, setListaPacinetes]= useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosPaciente(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListaPacinetes([...listaPacientes, datosPaciente]);

    setDatosPaciente({
      nombre:'',
      apellido:'',
      edad:'',
      telefono:'',
      email:''
    })
  };

  return (
    <div>
   <form className="registro-paciente-form" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={datosPaciente.nombre} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={datosPaciente.apellido} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" name="edad" value={datosPaciente.edad} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" value={datosPaciente.telefono} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={datosPaciente.email} onChange={handleChange} />
      </div>
      <button type="submit">Registrar</button>
    </form>
    {/* mostrar listado paciente */}
    <div>
      <h2>Listado pacientes</h2>
      <ul>
        {listaPacientes.map((paciente, index)=>(
          <li key={index}>{paciente.nombre} {paciente.apellido} - {paciente.edad} - {paciente.email}</li>
        ))}
      </ul>
    </div>
    </div>
 
  );
};

export default RegistroPacienteFormulario;
