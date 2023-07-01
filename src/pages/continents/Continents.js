import React from 'react'
import { CtContinents } from './Continents.styled'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'
import Alert from '../../components/alert/Alert'
import MenuNav from '../../components/menuNav/MenuNav'

function Continents() {
  return (
    <CtContinents>
        <MenuNav/>
        <ContinentsBackground isHover={true}/>
        <Alert isVisible={true} text='¿A cuál continente quieres ir?'/>
    </CtContinents>
  )
}

export default Continents