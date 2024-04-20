import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@mui/material';
import NuevoGasto from './Gastos/NuevoGasto';
import ListaGasto from './Gastos/ListaGasto';
import Grafica from './Graficos/Grafica';

function App() {
  return(

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" sizes='small' />

        <Container fixed>
          <NuevoGasto/>
          <Grafica/>
        </Container>
      </header>

        {/* <Box display="flex">  
          <Box flexGrow={1}>  
        </Box>
        <Box flex={0.5}>  
          <ListaGasto/>
        </Box>
        </Box> */}
        
    </div>
  );
}

export default App;
