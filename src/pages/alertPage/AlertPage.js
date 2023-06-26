import React from 'react'
import { CtAlertPage } from './AlertPage.styled'
import Alert from '../../components/alert/Alert'
import ContinentsBackground from '../../components/continentsBackground/ContinentsBackground'
import { useState } from 'react';

function AlertPage() {

    const [isVisible, setIsVisible] = useState(true);

  return (
    <CtAlertPage>
        <ContinentsBackground/>
        <Alert isVisible={isVisible} setIsVisible={setIsVisible}/>
    </CtAlertPage>
  )
}

export default AlertPage