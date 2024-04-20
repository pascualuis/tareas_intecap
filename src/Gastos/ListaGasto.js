import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';


const ListaGasto = () => {
  const [listagastos, setListaGastos] = useState(() => {
    const storeGastos = localStorage.getItem('listaGastos');
    return storeGastos ? JSON.parse(storeGastos) : [];
  });


  return (
    <div>
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
  {listagastos.length > 0 ? (
    listagastos.map((gasto, index) => (
      <TableRow key={index}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="center">{gasto.titulo}</TableCell>
        <TableCell align="center">{gasto.descripcion}</TableCell>
        <TableCell align="center">{gasto.valor}</TableCell>
        <TableCell align="center">{gasto.fecha}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} align="center">
        No hay gastos registrados
      </TableCell>
    </TableRow>
  )}
</TableBody>
          </Table>
        </TableContainer>
      </div>
      
    </div>
  )
}

export default ListaGasto
