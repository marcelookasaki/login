import React from 'react'
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import RoutesFunction from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesFunction  />
      <GlobalStyles />
    </BrowserRouter>

  );
}

export default App;
