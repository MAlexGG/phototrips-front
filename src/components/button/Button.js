import React from 'react'
import { Bt } from './Button.styled'

function Button(props) {
  return (
    <Bt bg={props.bg} color={props.color}>{props.text}</Bt>
  )
}

export default Button

Button.defaultProps = {
    bg: 'var(--dark-color)',
    color: 'var(--light-color)'
}