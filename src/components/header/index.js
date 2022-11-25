import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from "./styled";

export default function Header(){
  return(
    <Nav>
      <Link to="/user">
        <FaHome size={24} />
      </Link>
      <Link to="/list">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/register">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  )
}

