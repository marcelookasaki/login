import React from "react";
import { Nav } from "./header_styled";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function Header(){
 // const botaoClicado = useSelector(state => state.example.botaoClicado);
  return(
    <Nav>
      <a href=""><FaHome size={24} /> </a>
      <a href=""><FaSignInAlt size={24} /></a>
      <a href=""><FaUserAlt size={24} /></a>
    </Nav>
  )
}

