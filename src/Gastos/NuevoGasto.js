import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NuevoGasto = () => {
    const [datosGasto, setDatosGasto] = useState({
        titulo: '',
        descripcion: '',
        valor: '',
        fecha: ''        
    });

    const [listaGastos, setListaGasto] = useState(() => {
        const storeGastos = localStorage.getItem('listaGastos');
        return storeGastos ? JSON.parse(storeGastos) : [];
    });

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

        // Reset del formulario
        setDatosGasto({
            titulo: '',
            descripcion: '',
            valor: '',
            fecha: ''
        });
    };

    return (
        <div>
            <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Nuevo Gasto
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Título"
                            fullWidth
                            variant="outlined"
                            name="titulo"
                            value={datosGasto.titulo}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Descripción"
                            fullWidth
                            variant="outlined"
                            name="descripcion"
                            value={datosGasto.descripcion}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Valor"
                            fullWidth
                            type="number"
                            variant="outlined"
                            name="valor"
                            value={datosGasto.valor}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Fecha"
                            fullWidth
                            type="date"
                            variant="outlined"
                            name="fecha"
                            InputLabelProps={{ shrink: true }}
                            value={datosGasto.fecha}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Registrar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </div>
    );
};

export default NuevoGasto;
