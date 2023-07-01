import React, { useState } from 'react';
import { CtAuth, CtMenuNav, CtMenuNavClose, CtNav, CtUser, ImgNav, ImgUser, TxtNavLogout, TxtNavProfile } from './MenuNav.styled';
import backIcon from '../../assets/img/icons/backIcon.svg';
import countriesIcon from '../../assets/img/icons/countriesIcon.svg';
import continentsIcon from '../../assets/img/icons/continentsIcon.svg';
import userIcon from '../../assets/img/icons/userIcon.svg';
import { Link } from 'react-router-dom';

function MenuNav() {

  const [toggle, setToggle] = useState(false);
  
  return (
    <CtMenuNav>
      <CtMenuNavClose>
        <CtNav>
          <ImgNav src={backIcon} alt='back button'/>
          <ImgNav src={countriesIcon} alt='back to countries page'/>
          <ImgNav src={continentsIcon} alt='back to continents page'/>
        </CtNav>
        <CtUser onClick={()=>setToggle(!toggle)}>
          <ImgUser src={userIcon} alt='user avatar'/>
        </CtUser>
      </CtMenuNavClose>
      {
        toggle && 
        <CtAuth>
          <Link to={'/'}><TxtNavProfile>Panel de Control</TxtNavProfile></Link>
          <TxtNavLogout>Desconectarse</TxtNavLogout>
        </CtAuth>
      }
    </CtMenuNav>
  )
}

export default MenuNav