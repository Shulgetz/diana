import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(177, 138, 252, 1)',
      dark: '#0A0C26',
    },
    secondary: {
      light: '#4A148C',
      main: '#360E66',
      dark: '#140526',
    },
    success: {
      light: '#00F763',
      main: '#00C851',
      dark: '#006629',
    },
    background: {
      paper: '#360E66',
    },
    info: {
      light: '#fff',
      main: '#fff',
      dark: '#f2f3f4',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Julee',
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} exact />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
