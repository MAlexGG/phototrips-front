import React from 'react'
import { CtSignin } from './Signin.styled'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'

function SignIn() {
  return (
    <CtSignin>
      <ContinentsBackground isHover={false}/>
    </CtSignin>
  )
}

export default SignIn