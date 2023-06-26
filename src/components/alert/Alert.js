import React from 'react'
import { BtClose, CtAlert, ImgClose } from './Alert.styled'
import closeIcon from '../../assets/img/icons/noOk.svg'

function Alert({isVisible, setIsVisible}) {

    function closeAlert(){
        setIsVisible(false);
    }

  return (
    <CtAlert isVisible={isVisible}>
        <BtClose onClick={closeAlert}>
            <ImgClose src={closeIcon} alt='close button'/>
        </BtClose>
        Hola
    </CtAlert>
  )
}

export default Alert