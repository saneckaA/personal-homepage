import { ThemeProvider } from 'styled-components';
import Container from './Container';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { useSwitchTheme } from './useSwitchTheme';

function App() {

  const [theme, setTheme] = useSwitchTheme();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container setTheme={setTheme} />
      </ThemeProvider>

    </>

  );
}

export default App;
