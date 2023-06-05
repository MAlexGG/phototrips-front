import React from 'react'
import { Link } from "react-router-dom";
import { CtHome } from './Home.styled';

function Home() {
  return (
    <CtHome>
      <h1>Phototrips</h1>
      <Link to={`/error`}>APP</Link>
    </CtHome>
  )
}

export default Home