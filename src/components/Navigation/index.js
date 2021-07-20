import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

const Navigation = props => {
    return (
        <S.Navigation>
            <S.NavigationList>
                <S.NavigationListItem>
                    <Link to="/">Home</Link>
                </S.NavigationListItem>
                <S.NavigationListItem>
                    <Link to="/buttons">Buttons</Link>
                </S.NavigationListItem>
                <S.NavigationListItem>
                    <Link to="/inputs">Inputs</Link>
                </S.NavigationListItem>
            </S.NavigationList>
        </S.Navigation>
    )
}

export default Navigation