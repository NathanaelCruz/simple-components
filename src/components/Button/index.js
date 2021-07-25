import React from 'react'
import * as S from './style'
import PropTypes from 'prop-types'

const Button = props => {
  return(
   <S.Button background={props.background} size={props.size} color={props.color}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
   </S.Button>
  )
}

Button.propTypes = {
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    backgroundColor: PropTypes.string,
    hover: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
  }


export default Button