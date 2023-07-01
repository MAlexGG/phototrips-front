import React, { useState } from 'react';
import { CtButtons, CtContentForm, CtForm, CtInput, CtInputs, Inpt, Labl, TxtError, TxtTitle } from './FormLogin.styled';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import axios from 'axios';
import Alert from '../alert/Alert';

const initialLogin = {
  email: '',
  password: '',
  error_list: []
};

function FormLogin() {

  const [login, setLogin] = useState(initialLogin);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInput = (e) => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const authApi = AuthService();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: login.email,
      password: login.password,
    };

    axios.get('/sanctum/csrf-cookie').then(res => {
      authApi.postLogin(data).then(res => {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_user', res.data.user.name);
          setMessage(res.data.msg);
      }).catch(error => {
        setLogin({...login, error_list: error.response.data.errors});
        setError(error.response.data.errors.msg);
      });
    });
  };


  return (
    <CtForm>
        <CtContentForm>
            <TxtTitle>Acceso de Usuario</TxtTitle>
            <CtInputs>
                <CtInput>
                  <Labl>E-mail</Labl>
                  <Inpt type='mail' placeholder='E-mail...' name='email' value={login.email} onChange={handleInput}/>
                  <TxtError>{login.error_list.email}</TxtError>
                </CtInput>
                <CtInput>
                  <Labl>Contraseña</Labl>
                  <Inpt type='password' placeholder='Contraseña...' name='password' value={login.password} onChange={handleInput}/>
                  <TxtError>{login.error_list.password}</TxtError>
                </CtInput>
        </CtInputs>
        </CtContentForm>
        
        <CtButtons>
        <Link to={'/'}><Button text='Cancelar' bg={'var(--light-color)'} color={'var(--dark-color)'}/></Link>
            <Button text='Acceder' type={'submit'} event={handleSubmit}/>
        </CtButtons>
        {message && <Alert text={message} route={'/continents'}/>}
        {error && <Alert text={error} type={'reset'}/>}
    </CtForm>
    
  )
}

export default FormLogin