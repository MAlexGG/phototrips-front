import React from 'react'
import { CtButtons, CtContentForm, CtForm, CtInputs, TxtTitle } from './FormLogin.styled'
import Input from '../input/Input'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

function FormLogin() {
  return (
    <CtForm>
        <CtContentForm>
            <TxtTitle>Acceso de Usuario</TxtTitle>
            <CtInputs>
                <Input placeholder={'E-mail...'} type={'mail'} label={'E-mail'}/>
                <Input placeholder={'Contraseña...'} type={'password'} label={'Contraseña'}/>
        </CtInputs>
        </CtContentForm>
        
        <CtButtons>
        <Link to={'/'}><Button text='Cancelar' bg={'var(--light-color)'} color={'var(--dark-color)'}/></Link>
            <Button text='Acceder'/>
        </CtButtons>
    </CtForm>
    
  )
}

export default FormLogin