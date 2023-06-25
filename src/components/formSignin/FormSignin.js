import React from 'react'
import { CtButtons, CtForm, CtInputs, TxtTitle } from './FormSignin.styled'
import Button from '../button/Button'
import Input from '../input/Input'

function FormSignin() {
  return (
    <CtForm>
        <CtInputs>
            <TxtTitle>Registro de usuario</TxtTitle>
            <Input placeholder={'Nombre...'} type={'text'} label={'Nombre'}/>
            <Input placeholder={'E-mail...'} type={'mail'} label={'E-mail'}/>
            <Input placeholder={'Contraseña...'} type={'password'} label={'Contraseña'}/>
        </CtInputs>
        <CtButtons>
            <Button text='Cancelar' bg={'var(--light-color)'} color={'var(--dark-color)'}/>
            <Button text='Registrar'/>
        </CtButtons>
    </CtForm>
  )
}

export default FormSignin