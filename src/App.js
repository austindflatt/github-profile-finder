import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import NotFound from './components/404Page/NotFound'
import { AlertMessage } from './components/Layout/Alert'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NavBar from './components/Layout/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
      <ThemeProvider theme={darkTheme}>
      <NavBar />
      <CssBaseline />
      <Box m={2} pt={3}>
      <Container maxWidth="xl">
      <AlertMessage />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Container>
      </Box>
      </ThemeProvider>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;