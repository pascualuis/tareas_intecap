import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'

const NuevoGasto = () => {


    const [datosGasto, setDatosGasto] = useState({
        titulo: '',
        descripcion: '',
        valor: '',
        fecha: ''        
      });

      const [listaGastos, setListaGasto]= useState(()=>{
        const storeGastos = localStorage.getItem('listaGastos');
        console.log(storeGastos);
        return storeGastos ? JSON.parse(storeGastos) : [];
      }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosGasto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaLista = [...listaGastos, datosGasto];
    setListaGasto(nuevaLista);

    localStorage.setItem('listaGastos', JSON.stringify(nuevaLista));

    setDatosGasto({
        titulo: '',
        descripcion: '',
        valor: '',
        fecha: ''
    })
  };



  return (
    <div>
    <form className="registro-gasto-form" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="titulo">Titulo:</label>
        <input type="text" id="titulo" name="titulo" value={datosGasto.titulo} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="descripcion">descripcion:</label>
        <input type="text" id="descripcion" name="descripcion" value={datosGasto.descripcion} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="valor">Valor:</label>
        <input type="number" id="valor" name="valor" value={datosGasto.valor} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" value={datosGasto.fecha} onChange={handleChange} />
      </div>      
      <button type="submit">Registrar</button>
    </form>
        {/* Mostrar listado de gastos en una tabla */}
      <div>
        <h2>Listado de Gastos</h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableHead>
            <TableRow>
                <TableCell align="center">Título</TableCell>
                <TableCell align="center">Descripción</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            
            {listaGastos.map((gasto, index) => (
              <TableRow key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{gasto.titulo}</TableCell>
                <TableCell align="center">{gasto.descripcion}</TableCell>
                <TableCell align="center">{gasto.valor}</TableCell>
                <TableCell align="center">{gasto.fecha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default NuevoGasto
