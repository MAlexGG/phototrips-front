import React from 'react'
import { CtLogin } from './Login.styled'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'
import MenuAuth from '../../components/menuAuth/MenuAuth'
import FormLogin from '../../components/formLogin/FormLogin'

function LogIn() {
  return (
    <CtLogin>
      <MenuAuth/>
      <ContinentsBackground isHover={false}/>
      <FormLogin/>
    </CtLogin>
  )
}

export default LogIn