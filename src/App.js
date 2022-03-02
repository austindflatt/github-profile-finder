import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Hello World</h1>
      </Container>
    </Router>
  );
}

export default App;