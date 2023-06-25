import React from 'react'
import { CtLogin } from './Login.styled'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'

function LogIn() {
  return (
    <CtLogin>
      <ContinentsBackground isHover={false}/>
    </CtLogin>
  )
}

export default LogIn