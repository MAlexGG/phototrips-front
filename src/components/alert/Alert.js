import React, { useState } from 'react'
import { BtClose, CtAlert, ImgClose } from './Alert.styled'
import closeIcon from '../../assets/img/icons/noOk.svg'
import { useNavigate } from 'react-router-dom';

function Alert({text, type, route}) {

  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); 

    function closeAlert(){
        setIsVisible(false);
        navigate(route);
    }

  return (
    <CtAlert isVisible={isVisible}>
        <BtClose onClick={closeAlert} type={type}>
            <ImgClose src={closeIcon} alt='close button'/>
        </BtClose>
        {text}
    </CtAlert>
  )
}

export default Alert