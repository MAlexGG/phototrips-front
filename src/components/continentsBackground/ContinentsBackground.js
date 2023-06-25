import React from 'react';

import africa from '../../assets/img/background/Africa.webp';
import sudamerica from '../../assets/img/background/America.webp';
import asia from '../../assets/img/background/Asia.webp';
import europa from '../../assets/img/background/Europa.webp';
import oceania from '../../assets/img/background/Oceania.webp'; 
import { CtBackground, CtImgBackground, ImgBackground } from './ContinentsBackground.styled';

function ContinentsBackground({isHover}) {
  return (
    <CtBackground>
      <CtImgBackground>
        <ImgBackground src={africa} alt='africa landscape' isHover={isHover}/>
      </CtImgBackground>
      <CtImgBackground>
        <ImgBackground src={sudamerica} alt='america landscape' isHover={isHover}/>
      </CtImgBackground>  
      <CtImgBackground>
        <ImgBackground src={asia} alt='asia landscape' isHover={isHover}/>
      </CtImgBackground> 
      <CtImgBackground>
        <ImgBackground src={europa} alt='europa landscape' isHover={isHover}/>
      </CtImgBackground> 
      <CtImgBackground>
        <ImgBackground src={oceania} alt='oceania landscape' isHover={isHover}/>
      </CtImgBackground> 
      </CtBackground>
  )
}

export default ContinentsBackground
