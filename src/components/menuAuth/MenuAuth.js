import React from 'react'
import { BtMenuAuth, CtAuth, CtMenuAuth, TxtNavLogIn, TxtNavSignIn } from './MenuAuth.styled'
import avatar from '../../assets/img/icons/userIcon.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuAuth() {

  const [toggle, setToggle] = useState(false);

  return (
    <CtMenuAuth>
      <BtMenuAuth onClick={()=>setToggle(!toggle)}>
        <img src={avatar} alt="user avatar" />
      </BtMenuAuth>
      {toggle &&
        <CtAuth>
          <Link to={'/signin'}><TxtNavSignIn>Registro</TxtNavSignIn></Link>
          <Link to={'/login'}><TxtNavLogIn>Acceso</TxtNavLogIn></Link>
        </CtAuth>
      }
    </CtMenuAuth>
  )
}

export default MenuAuth