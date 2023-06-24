import React from 'react'
import { Link } from "react-router-dom";
import { CtHome } from './Home.styled';
import MenuAuth from '../../components/menuAuth/MenuAuth';

function Home() {
  return (
    <CtHome>
      <h1>Phototrips</h1>
      <Link to={`/error`}>APP</Link>
      <MenuAuth/>
    </CtHome>
  )
}

export default Home