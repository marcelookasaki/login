import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';

import Store from './store';
//import history from './services/history';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import RoutesFunction from './routes';



function App() {
      return (
      <Provider store={Store}>
          <BrowserRouter >
          <Header />
          <RoutesFunction />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className='toast-container' />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
