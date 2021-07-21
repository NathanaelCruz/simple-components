import React from 'react'
import * as S from './style'

const Wrapper = props => {
    return(
        <S.Wrapper>
            {props.children}
        </S.Wrapper>
    )
}

export default Wrapper