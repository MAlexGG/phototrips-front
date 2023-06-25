import React from 'react'
import { CtHome, TxtTitle } from './Home.styled';
import MenuAuth from '../../components/menuAuth/MenuAuth';
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground';

function Home() {
  return (
    <CtHome>
      <MenuAuth/>
      <ContinentsBackground isHover={true}/>
      <TxtTitle>PHOTOTRIPS</TxtTitle>
    </CtHome>
  )
}

export default Home