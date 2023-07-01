import React, { useState } from 'react'
import { BtClose, CtAlert, ImgClose } from './Alert.styled'
import closeIcon from '../../assets/img/icons/noOk.svg'

function Alert({text}) {

  const [isVisible, setIsVisible] = useState(true);

    function closeAlert(){
        setIsVisible(false);
    }

  return (
    <CtAlert isVisible={isVisible}>
        <BtClose onClick={closeAlert}>
            <ImgClose src={closeIcon} alt='close button'/>
        </BtClose>
        {text}
    </CtAlert>
  )
}

export default Alert