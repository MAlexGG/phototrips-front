import React from 'react'
import { CtHome, CtBackground, ImgBackground, TxtTitle } from './Home.styled';
import MenuAuth from '../../components/menuAuth/MenuAuth';
import africa from '../../assets/img/background/Africa.webp';
import sudamerica from '../../assets/img/background/America.webp';
import asia from '../../assets/img/background/Asia.webp';
import europa from '../../assets/img/background/Europa.webp';
import oceania from '../../assets/img/background/Oceania.webp'; 


function Home() {
  return (
    <CtHome>
      <MenuAuth/>
      <CtBackground>
        <ImgBackground src={africa} alt='africa landscape'/>
        <ImgBackground src={sudamerica} alt='america landscape'/>
        <ImgBackground src={asia} alt='asia landscape'/>
        <ImgBackground src={europa} alt='europa landscape'/>
        <ImgBackground src={oceania} alt='oceania landscape'/>
      </CtBackground>
      
      <TxtTitle>PHOTOTRIPS</TxtTitle>
      

    </CtHome>
  )
}

export default Home