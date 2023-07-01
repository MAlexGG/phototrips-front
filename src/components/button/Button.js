import React from 'react'
import { Bt } from './Button.styled'

function Button({bg, color, text, event, type}) {
  return (
    <Bt bg={bg} color={color} onClick={event} type={type}>{text}</Bt>
  )
}

export default Button

Button.defaultProps = {
    bg: 'var(--dark-color)',
    color: 'var(--light-color)',
    type: 'text'
}