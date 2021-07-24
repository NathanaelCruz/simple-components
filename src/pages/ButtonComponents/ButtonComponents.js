import React, { Fragment } from 'react'
import Button from '../../components/Button'
import * as S from '../../templates/Main/style'

const ButtonComponents = () => {
    return (
        <Fragment>
            <S.Heading1>
                Buttons
            </S.Heading1>
            <S.SectionWrapper>
                <S.Code text="<Button/>"/>
                <Button>Teste</Button>
            </S.SectionWrapper>
        </Fragment> 
    )
}

export default ButtonComponents