import React, {useState} from 'react';

//Style

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

import ListItemText from '@mui/material/ListItemText';


const ListaElementos=()=>{
    const[elementos, setElementos]=useState([
        {id:1, nombre: 'Elemento 1 '},
        {id:2, nombre: 'Elemento 2 '},
        {id:3, nombre: 'Elemento 3 '}
    ]);

    const[editandoId, setEditandoId]=useState(null);
    const[textoEditado, setTextoEditado]=useState('');

    const handleEditar = (id, nombre) =>{
        setEditandoId(id);
        setTextoEditado(nombre);
    };

    const handleGuardar = (id) =>{
        const nuevosElementos = elementos.map((elemento)=>
        elemento.id ===id ? {...elemento, nombre: textoEditado} : elemento
        );
        setElementos(nuevosElementos);
        setEditandoId(null);
    };

    const handleEliminar = (id) =>{
        const nuevosElementos = elementos.filter((elemento)=>elemento.id!==id);
        setElementos(nuevosElementos);
    };
    return(
        <div>
            <Container maxWidth="sm" align="center">
                <h1>Lista de elementos</h1>
                <ul>
                    {elementos.map((elemento)=>(
                    <ListItemText  key={elemento.id}>
                        {editandoId===elemento.id?(
                            <TextField id="standard-basic" size="small"
                                type='text'
                                value={textoEditado}
                                onChange={(e) => setTextoEditado(e.target.value)}
                            />
                    ):(
                        elemento.nombre
                    )}
                         {editandoId === elemento.id ? (
                            <Button variant="outlined" startIcon={<SaveIcon/>} onClick={() => handleGuardar(elemento.id)}>Guardar</Button>
                        ) :(
                            <Button variant="outlined" startIcon={<EditIcon/>} onClick={() => handleEditar(elemento.id, elemento.nombre)}>Editar</Button>
                        )}
                        <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => handleEliminar(elemento.id) }>Eliminar</Button>
                        </ListItemText >

                     ))}
                 </ul>
             </Container>
        </div>
    );
};

export default ListaElementos;