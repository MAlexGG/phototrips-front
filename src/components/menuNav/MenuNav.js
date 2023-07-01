import React, { useState } from 'react';
import { CtAuth, CtMenuNav, CtMenuNavClose, CtNav, CtUser, ImgNav, ImgUser, TxtNavLogout, TxtNavProfile } from './MenuNav.styled';
import backIcon from '../../assets/img/icons/backIcon.svg';
import countriesIcon from '../../assets/img/icons/countriesIcon.svg';
import continentsIcon from '../../assets/img/icons/continentsIcon.svg';
import userIcon from '../../assets/img/icons/userIcon.svg';
import { Link } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import Alert from '../alert/Alert';

function MenuNav() {

  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState('');

  const authApi = AuthService();
  //const navigate = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();

    authApi.postLogout().then(res => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      setMessage(res.data.msg)
    }).catch(error => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
    }); 
  }
  
  return (
    <>
      <CtMenuNav>
        <CtMenuNavClose>
          <CtNav>
            <ImgNav src={backIcon} alt='back button'/>
            <ImgNav src={countriesIcon} alt='back to countries page'/>
            <ImgNav src={continentsIcon} alt='back to continents page'/>
          </CtNav>
          <CtUser onClick={()=>setToggle(!toggle)}>
            <ImgUser src={userIcon} alt='user avatar'/>
          </CtUser>
        </CtMenuNavClose>
        {
          toggle && 
          <CtAuth>
            <Link to={'/'}><TxtNavProfile>Panel de Control</TxtNavProfile></Link>
            <TxtNavLogout onClick={logoutSubmit}>Desconectarse</TxtNavLogout>
          </CtAuth>
        }
      </CtMenuNav>
      { message && <Alert text={message} route={'/'}/> }
    </>
  )
}

export default MenuNav