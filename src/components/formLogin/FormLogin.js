import React from 'react'
import { CtButtons, CtContentForm, CtForm, CtInputs, TxtTitle } from './FormLogin.styled'
import Input from '../input/Input'
import Button from '../button/Button'
import { Link, useNavigate } from 'react-router-dom'

function FormLogin() {

  const navigate = useNavigate();

  function goAlertPage(){
    navigate('/alert', { state: {text: 'hola, es una prueba del login' }});
  }
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
            <Button text='Acceder' event={goAlertPage}/>
        </CtButtons>
    </CtForm>
    
  )
}

export default FormLogin