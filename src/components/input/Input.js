import React from 'react'
import { CtInput, Inpt, Labl, TxtError } from './Input.styled'


function Input(props) {
  return (
    <CtInput>
        <Labl>{props.label}</Labl>
        <Inpt placeholder={props.placeholder} type={props.type}/>
        <TxtError>{props.error}</TxtError>
    </CtInput>
  )
}

export default Input

Input.defaultProps = {
    error: ''
}