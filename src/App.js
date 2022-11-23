import React from 'react'
import GlobalStyles from './styles/globalStyles';
import './App.css';
import Login from './pages/login';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>

  );
}

export default App;
