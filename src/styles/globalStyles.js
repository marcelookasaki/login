import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${colors.primaryDarkColor};
    color: ;: ${colors.primaryColor};
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
  }

  a {
    text-decoration: ${colors.primaryColor};;
  }

  ul {
    list-style: none;
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast-success{
    background: ${colors.successColor};
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast-error{
    background: ${colors.errorColor};
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;



