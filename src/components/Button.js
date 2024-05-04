import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'brn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  // it's going to see if the button has the buttonStyle/Size/Color prop to set it or set a default one, wich, in this case, it's going to be the first item of each array.

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
  )
}