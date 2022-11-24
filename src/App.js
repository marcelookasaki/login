import React from 'react'
import { Router } from 'react-router-dom'
import history from './services/history';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import RoutesFunction from './routes';


function App() {
  return (
    <Router history={history}>
      <Header />
      <RoutesFunction />
      <GlobalStyles />
    </Router>

  );
}

export default App;
