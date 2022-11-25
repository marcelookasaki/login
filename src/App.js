import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import Store, {persistor} from './store';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import RoutesFunction from './routes';



function App() {
      return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter >
            <Header />
            <RoutesFunction />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className='toast-container' />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  );
}

export default App;
