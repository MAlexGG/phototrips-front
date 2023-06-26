import React from 'react'
import { BtClose, CtAlert, ImgClose } from './Alert.styled'
import closeIcon from '../../assets/img/icons/noOk.svg'

<<<<<<< HEAD
function Alert({isVisible, setIsVisible}) {
=======
function Alert({isVisible, setIsVisible, text}) {
>>>>>>> f6498fb (alert component and page)

    function closeAlert(){
        setIsVisible(false);
    }

  return (
    <CtAlert isVisible={isVisible}>
        <BtClose onClick={closeAlert}>
            <ImgClose src={closeIcon} alt='close button'/>
        </BtClose>
<<<<<<< HEAD
        Hola
=======
        {text}
>>>>>>> f6498fb (alert component and page)
    </CtAlert>
  )
}

export default Alert