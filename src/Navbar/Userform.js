import React, { useState } from 'react';

export default function UsuarioForm() {
  const [nombre, setNombre] = useState('');
  const [alias, setAlias] = useState('');
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState('');
  const [edadEsPrivada, setEdadEsPrivada] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuarioData = { nombre, alias, fechaDeNacimiento, edadEsPrivada };
    console.log(usuarioData);
    // Aquí puedes realizar la llamada a la API para enviar `usuarioData`
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Alias:
        <input
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
      </label>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaDeNacimiento}
          onChange={(e) => setFechaDeNacimiento(e.target.value)}
        />
      </label>
      <label>
        ¿Es la edad privada?
        <input
          type="checkbox"
          checked={edadEsPrivada}
          onChange={(e) => setEdadEsPrivada(e.target.checked)}
        />
      </label>
      <button type="submit">Crear Usuario</button>
    </form>
  );
}