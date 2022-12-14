import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../../styles/globalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../../store/modules/examples/actions'

export default function Register() {
  const dispatch = useDispatch()
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest())
  }

  return (
    <Container>
      <Title>
        Register
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
