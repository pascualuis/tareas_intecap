import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@mui/material';
import NuevoGasto from './Gastos/NuevoGasto';
import ListaGasto from './Gastos/ListaGasto';

function App() {
  return(

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" sizes='small' />

        <Container fixed>
        </Container>
      </header> */}

        <Box display="flex">  
          <Box flexGrow={1}>  
          <NuevoGasto/>
        </Box>
        <Box flex={0.5}>  
          <ListaGasto/>
        </Box>
        </Box>
        
    </div>
  );
}

export default App;
