import React from 'react'
import { CtSignin } from './Signin.styled'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'
import MenuAuth from '../../components/menuAuth/MenuAuth'
import FormSignin from '../../components/formSignin/FormSignin'

function SignIn() {
  return (
    <CtSignin>
      <MenuAuth/>
      <ContinentsBackground isHover={false}/>
      <FormSignin/>
    </CtSignin>
  )
}

export default SignIn