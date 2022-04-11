import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from './styles/Themes/light';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
      ;
    </ThemeProvider>
  );
};

export default App;
