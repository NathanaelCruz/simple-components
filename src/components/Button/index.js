import React from 'react'
import * as S from './style'
import PropTypes from 'prop-types'

const Button = props => {
  return(
   <S.Button size={props.size} color={props.color} variant={props.variant}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
   </S.Button>
  )
}

Button.propTypes = {
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    disableShadow: PropTypes.bool
  }

Button.defaultProps = {
   size: {
      sm: "0.5rem 1.5rem",
      md: ".8rem 1.5rem",
      lg: ".9rem 1.6rem"
   },
   color: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      danger: "var(--danger)",
      default: "var(--default)"
   },
   colorText: {
      primary: "var(--white)",
      secondary: "var(--white)",
      danger: "var(--white)",
      default: "var(--text-default)"
   },
   disabled: {
      background: "var(--default)",
      color: "var(--text-default)"
   },
   variant: {
      outline: "inherit" 
   }
}
export default Button