import styled from 'styled-components'


export const Title = styled.h1`
  color: ${props => (props.isRed ? 'red' : 'blue')};
  background-color: lightcyan;
  small{
    font-size: 12pt;
    margin-left: 15px;
    color: black;
  }
`

export const Paragrafo = styled.p`
  font-size: 30px;
  color: darkblue;
`

