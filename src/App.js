import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
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
      <ToastContainer autoClose={3000} className='toast-container' />
    </Router>

  );
}

export default App;
