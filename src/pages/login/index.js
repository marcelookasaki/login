import React from 'react'
import { Title, Paragrafo } from './styled'
import { Container } from '../../styles/globalStyles'


export default function Login() {
  return (
    <Container>
      <Title isdRed={false} >
        Login
        <small>Eeeita!</small>
      </Title>
      <Paragrafo>Mussum Ipsum, cacilds vidis litro abertis</Paragrafo>
    </Container>
  )
}
