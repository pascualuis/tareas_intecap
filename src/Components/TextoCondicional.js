import React, {useState} from "react";

//Style
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const TextoCondicional=()=>{
    const[mostrarTexto, setMostrarTexto]=useState(false);

    return(
        <div>
            <Container align="center">
            <Button onClick={()=>setMostrarTexto(!mostrarTexto)}>
                {mostrarTexto ? `Ocultar Texto`: `Mostrar Texto`}
            </Button>
            {mostrarTexto && <p>Este es el texto que se va a mostrar condicionalmente</p> }
            </Container>
        </div>        
    );
};

export default TextoCondicional;