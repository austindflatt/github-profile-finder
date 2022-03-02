import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import NotFound from './components/404Page/NotFound'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NavBar from './components/Layout/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <CssBaseline />
      <Container maxWidth="xl">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;