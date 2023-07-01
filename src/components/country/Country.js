import React from 'react'
import { CtCountry, CtImgCountry, ImgCountry, TxtTitle } from './Country.styled';
//imagen a cambiar con la primera foto que aparezca en la lista de paises
import photo from '../../assets/img/background/Asia.webp';

function Country({country}) {
  return (
    <CtCountry>
        <CtImgCountry>
            <ImgCountry src={photo} alt='Country'/>
        </CtImgCountry>
        <TxtTitle>{country.name}</TxtTitle>
    </CtCountry>
  )
}

export default Country