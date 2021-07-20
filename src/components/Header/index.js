import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../images/index'
import Navigation from '../Navigation'
import * as S from './style'

const Header = props => {
    return(
        <S.Header>
        <Link to="/">
            <Logo/>
        </Link>
        <Navigation/>
        </S.Header>
    )
}

export default Header