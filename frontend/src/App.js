import React from 'react';
import Companies from './components/Companies';
import ButtonAppBar from './components/ButtonAppBar'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <ButtonAppBar />
        <h1>Hello, World!</h1>
        <p>This is your first React page in your Rails app.</p>
        <Companies />
      </div>
    </ThemeProvider>
  );
}

export default App;
