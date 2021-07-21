import React from 'react'
import * as S from './style'

const Footer = props => {
    return (
        <S.Footer>
            <S.Address>{props.credits}</S.Address>
        </S.Footer>
    )
}

export default Footer