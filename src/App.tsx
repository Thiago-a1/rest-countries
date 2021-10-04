import React, { useContext } from "react";

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/ThemeContext';

import Routes from './routes';

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

import { Header } from './components/Header';

import Global from './styles/global';

const App = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
          <Global />
          <Header />
          <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
