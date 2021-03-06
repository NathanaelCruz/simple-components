import React from 'react'
import * as S from './style'

const CodeText = props => {
    return(
        <S.Code color={props.states}>
            {props.text}
        </S.Code>
    )
}

export default CodeText