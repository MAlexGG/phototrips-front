import React from 'react'
import { CtAlertPage } from './AlertPage.styled'
import Alert from '../../components/alert/Alert'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function AlertPage() {

  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  return (
    <CtAlertPage>
        <ContinentsBackground/>
        <Alert isVisible={isVisible} setIsVisible={setIsVisible} text={location.state.text}/>
    </CtAlertPage>
  )
}

export default AlertPage