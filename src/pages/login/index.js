import React from 'react';
import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {


  function handleClick(e) {
    e.preventDefault();

  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
