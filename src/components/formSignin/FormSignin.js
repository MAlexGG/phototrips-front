import React from 'react'
import { CtButtons, CtContentForm, CtForm, CtInputs, TxtTitle } from './FormSignin.styled'
import Button from '../button/Button'
import Input from '../input/Input'
import { Link, useNavigate } from 'react-router-dom'

function FormSignin() {

  const navigate = useNavigate()

  function goAlertPage(){
    navigate('/alert', { state: {text: 'hola, es una prueba del sign in' }});
  }

  return (
    <>
    <CtForm>
      <CtContentForm>
        <TxtTitle>Registro de usuario</TxtTitle>
        <CtInputs>
          <Input placeholder={'Nombre...'} type={'text'} label={'Nombre'}/>
          <Input placeholder={'E-mail...'} type={'mail'} label={'E-mail'}/>
          <Input placeholder={'Contraseña...'} type={'password'} label={'Contraseña'}/>
        </CtInputs>
      </CtContentForm>
      <CtButtons>
        <Link to={'/'}><Button text='Cancelar' bg={'var(--light-color)'} color={'var(--dark-color)'}/></Link>
        <Button text='Registrar' event={goAlertPage}/>
      </CtButtons>
    </CtForm>
    </>
  )
}

export default FormSignin